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
const { ethers } = require('ethers')
const {
    createTaskStatus,
    getGateStatus,
    createGateStatus,
    getKey,
    getUser,
    getGate,
    getCompletedKeys,
    markGateAsCompleted,
    removePeopleFromKey,
} = require('/opt/helpers.js')
const abi = require('./ERC20.json')

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

        // 4. check if user holds the token
        const chainID = key.task.chainID
        const tokenAddress = key.task.address
        const amount = key.task.amount
        const wallet = user.wallet

        // 4.1 get the accurate provider
        // TODO: move endpoints to secret variables
        const getProvider = () => {
            switch (chainID) {
                case 1:
                    // Mainnet Ethereum
                    return new ethers.providers.JsonRpcProvider(
                        'https://mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 3:
                    // Ropsten
                    return new ethers.providers.JsonRpcProvider(
                        'https://ropsten.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 4:
                    // Rinkeby
                    return new ethers.providers.JsonRpcProvider(
                        'https://rinkeby.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 5:
                    // Görli
                    return new ethers.providers.JsonRpcProvider(
                        'https://goerli.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 6:
                    // Kovan
                    return new ethers.providers.JsonRpcProvider(
                        'https://kovan.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 10:
                    // Mainnet Optimistic
                    return new ethers.providers.JsonRpcProvider(
                        'https://optimism-mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 56:
                    // Mainnet BSC
                    return new ethers.providers.JsonRpcProvider(
                        'https://speedy-nodes-nyc.moralis.io/dfb3897464f2fdbbfd1b4a83/bsc/mainnet'
                    )
                case 69:
                    // Optimistic Kovan
                    return new ethers.providers.JsonRpcProvider(
                        'https://optimism-kovan.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 97:
                    // BSC Testnet
                    return new ethers.providers.JsonRpcProvider(
                        'https://speedy-nodes-nyc.moralis.io/dfb3897464f2fdbbfd1b4a83/bsc/testnet'
                    )
                case 137:
                    // Mainnet Polygon
                    return new ethers.providers.JsonRpcProvider(
                        'https://polygon-mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 42161:
                    // Mainnet Arbitrum
                    return new ethers.providers.JsonRpcProvider(
                        'https://arbitrum-mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 80001:
                    // Polygon Mumbai
                    return new ethers.providers.JsonRpcProvider(
                        'https://polygon-mumbai.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                case 421611:
                    // Arbitrum Rinkeby
                    return new ethers.providers.JsonRpcProvider(
                        'https://arbitrum-rinkeby.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
                default:
                    return new ethers.providers.JsonRpcProvider(
                        'https://mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
                    )
            }
        }

        const provider = getProvider()

        const contract = new ethers.Contract(tokenAddress, abi, provider)
        const balance = await contract.balanceOf(wallet)

        if (balance > amount) {
            // The user holds the token, so task completed
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
            error: 'NO_HOLD',
            msg: "User doesn't hold token",
        }
    } catch (error) {
        const { keyID } = event.arguments

        console.log(error)

        return {
            __typename: 'Error',
            keyID,
            error: 'UNEXPECTED_ERROR',
            msg: error,
        }
    }
}
