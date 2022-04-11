/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GATESTATUSTABLE_ARN
	API_GATEWAY_GATESTATUSTABLE_NAME
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
const {
    createTaskStatus,
    createGateStatus,
    getGateStatus,
    getKey,
    getUser,
    getCompletedKeys,
    getGate,
    markGateAsCompleted,
    removePeopleFromKey,
} = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

        if (key.peopleLimit <= 0 && !key.unlimited) {
            return {
                __typename: 'Error',
                keyID,
                error: 'NO_MORE_SLOTS',
                msg: "This task can no longer be completed.",
            }
        }

        // 2. get gate
        const gate = await getGate(key.gateID)

        // 2. get user
        const user = await getUser(userID)

        // 3. get gate status; if doesn't exist, create it
        let gateStatus = await getGateStatus(userID, key.gateID)
        if (!gateStatus) {
            gateStatus = await createGateStatus({
                userID,
                gateID: key.gateID,
            })
        }

        let keysDone = await getCompletedKeys(userID, key.gateID)

        // 4. check if user has interacted with the contract
        const chainID = key.task.chainID
        const scAddress = key.task.address
        const method = key.task.methodName || ""
        const wallet = user.wallet

        const chain = () => {
            switch (chainID) {
                case 1:
                    return 'ethereum'
                case 44787:
                    return 'celo_alfajores'
                case 62320:
                    return 'celo_baklava'
                case 42220:
                    return 'celo_rc1'
                case 56:
                    return 'bsc'
                case 97:
                    return 'bsc_testnet'
                case 5:
                    return 'goerli'
                case 137:
                    return 'matic'
                case 106:
                    return 'velas'
                case 8217:
                    return 'klaytn'
                case 43114:
                    return 'avalanche'
                default:
                    return 'ethereum'
            }
        }

        // 4.1. connect to BitQuery
        const ENDPOINT = 'https://graphql.bitquery.io/'
        const QUERY = `
            query getContractInteraction($address: String, $scAddress: String${method && ", $method: String"}) {
                ethereum(network: ${chain()}) {
                smartContractCalls(
                    caller: {is: $address}
                    smartContractAddress: {is: $scAddress}
                    ${method && "smartContractMethod: {is: $method}"}
                ) {
                    smartContractMethod {
                        name
                        }
                    }
                }
            }
        `

        const VARIABLES = {
            address: wallet,
            scAddress: scAddress,
            ...(method && { method: method }),
        }

        const res = await axios({
            url: ENDPOINT,
            method: 'POST',
            data: {
                query: QUERY,
                variables: VARIABLES,
            },
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-API-KEY': 'BQYhbCMXDs70kF2zYnfZD43DjNYW8vIT',
            },
        })

        console.log(JSON.stringify(res.data))

        const interactions = res.data.data.ethereum.smartContractCalls

        if (interactions.length > 0) {
            // The user interacted with the contract, so task completed
            const item = await createTaskStatus({
                userID,
                keyID,
                gateID: key.gateID,
                completed: true,
            })

            let completedGate = false

            if (!key.unlimited && key.peopleLimit > 0) {
                await removePeopleFromKey(keyID)
            }

            if (
                keysDone + key.keys >= gate.keysNumber &&
                gateStatus.status !== 'COMPLETED'
            ) {
                // Gate completed, update gate status
                await markGateAsCompleted(gateStatus.id)
                completedGate = true
            }

            return {
                __typename: 'TaskAndGateResponse',
                ...item,
                completedGate,
            }
        }

        return {
            __typename: 'Error',
            keyID,
            error: 'NO_INTERACTION',
            msg: "User didn't interact with the given method",
        }
    } catch (error) {
        const { keyID } = event.arguments

        return {
            __typename: 'Error',
            keyID,
            error: 'UNEXPECTED_ERROR',
            msg: error,
        }
    }
}
