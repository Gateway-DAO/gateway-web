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
        const chainID = key.task.chainID
        const scAddress = key.task.address
        const method = key.task.method
        const wallet = user.wallet

		const chain = () => {
			switch (chainID) {
				case 1:
					return "ethereum"
				case 44787:
					return "celo_alfajores"
				case 62320:
					return "celo_baklava"
				case 42220:
					return "celo_rc1"
				case 56:
					return "bsc"
				case 97:
					return "bsc_testnet"
				case 5:
					return "goerli"
				case 137:
					return "matic"
				case 106:
					return "velas"
				case 8217:
					return "klaytn"
				case 43114:
					return "avalanche"
				default:
					return "ethereum"
			}
		}

        // 3.1. connect to BitQuery
        const ENDPOINT = 'https://graphql.bitquery.io/'
        const QUERY = `
			query getContractInteraction($wallet: String!, $scaddress: String!, $method: String!) {
				ethereum(network: ${chain()}) {
					smartContractCalls(
					caller: {is: $wallet}
					${method && `smartContractMethod: {is: $method}`}
					smartContractAddress: {is: $scaddress}
					) {
						smartContractMethod {
							name
						}
					}
				}
			}
		`
        const VARIABLES = `
			{
				"wallet": "${wallet}",
				"scaddress": "${scAddress}",
				${method && `"method": "${method}"`}
			}
		`

        const res = await axios.get(ENDPOINT, {
            data: JSON.stringify({
                query: QUERY,
                variables: VARIABLES,
            }),
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Node',
                'X-API-KEY': process.env.BITQUERY_KEY,
            },
        })

		const interactions = res.data.data.ethereum.smartContractCalls

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
