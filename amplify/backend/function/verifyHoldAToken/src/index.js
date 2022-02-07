/* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
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
const { createTaskStatus, getKey, getUser } = require('/opt/helpers.js')
const abi = require("./ERC20.json")

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID, gateID } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

		// 2. get user
		const user = await getUser(userID)

        // 3. check if user holds the token
        const chainID = key.task.chainID
        const tokenAddress = key.task.address
        const amount = key.task.amount
		const wallet = user.wallet

        // 3.1 get the accurate provider
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

		const contract = new ethers.Contract(tokenAddress, abi, provider);
		const balance = await contract.balanceOf(wallet);

        if (balance > amount) {
			// The user holds the token, so task completed
			const item = await createTaskStatus({
				userID,
				keyID,
                gateID,
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
			error: "NO_HOLD",
			msg: "User doesn't hold token"
		}
    } catch (error) {
        console.log(error)
        return error
    }
}
