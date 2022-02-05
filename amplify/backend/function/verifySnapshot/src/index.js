/* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GATETABLE_ARN
	API_GATEWAY_GATETABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_KEYTABLE_ARN
	API_GATEWAY_KEYTABLE_NAME
	API_GATEWAY_TASKSTATUSTABLE_ARN
	API_GATEWAY_TASKSTATUSTABLE_NAME
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk')
const { default: axios } = require('axios')
const { createTaskStatus, getKey, getUser } = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

        // 2. get user
        const user = await getUser(userID)

        // 3. check if user has interacted with the contract
        const type = key.task.snapshotType
        const spaceID = key.task.spaceID
        const proposal = key.task.proposal
        const wallet = user.wallet

        // 3.1. connect to Snapshot API
        const ENDPOINT = 'https://hub.snapshot.org/graphql'
        const QUERY_PROPOSAL = `
			query Proposals($space: String!, $wallet: String!) {
				proposals(
					first: 20,
					skip: 0,
					where: {
						space: $space,
						author: $wallet
					},
					orderBy: "created",
					orderDirection: desc
				) {
					id
					title
					body
					choices
					start
					end
					snapshot
					state
					author
					space {
						id
						name
					}
				}
			}
		`
        const QUERY_VOTE = `
			query Votes($proposal: String!, $wallet: String!) {
				votes (
					first: 1000
					where: {
						proposal: $proposal,
						voter: $wallet
					}
				) {
					id
					voter
					created
					choice
					space {
						id
					}
				}
			}
		`

        const res = await axios.get(ENDPOINT, {
            data: JSON.stringify({
                query: type === "VOTE" ? QUERY_VOTE : QUERY_PROPOSAL,
                variables: JSON.stringify({
					wallet,
					...(type === "VOTE" ? { proposal } : { space: spaceID })
				}),
            }),
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Node',
            },
        })

        const interactions = type === "VOTE" ? res.data.data.votes : res.data.data.proposals

        if (interactions.length > 0) {
            // The user interacted with the contract, so task completed
            const item = await createTaskStatus({
                userID,
                keyID,
                completed: true,
            })

            return {
                __typename: 'TaskStatus',
                ...item,
            }
        }

        return {
            __typename: 'Error',
            keyID,
            error: 'NO_INTERACTION',
            msg: "User didn't interact with the given method",
        }
    } catch (error) {
        console.log(error)
        return error
    }
}
