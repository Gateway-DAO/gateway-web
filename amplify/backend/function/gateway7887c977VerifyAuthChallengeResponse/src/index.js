/* Amplify Params - DO NOT EDIT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const Web3 = require('web3')
const AWS = require('aws-sdk')

exports.handler = async (event) => {
    console.log('event', event)

    const { userName } = event
    const { publicAddress, signature, nonce } = JSON.parse(
        event.request.challengeAnswer
    )

    const web3 = new Web3(
        Web3.givenProvider ||
            'wss://mainnet.infura.io/ws/v3/19128174ace8471f88c08ca304b087e9'
    )
    const address = web3.eth.accounts.recover(`Welcome to Gateway!\n\nPlease sign this message for access: ${nonce}`, signature, false)

    console.log(address)
    console.log(publicAddress)

    if (address.toLowerCase() === publicAddress.toLowerCase()) {
        const docClient = new AWS.DynamoDB.DocumentClient()
        const nonce = Math.floor(Math.random() * 1000000)
        await docClient
            .update({
                TableName: `User-${process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
                Key: {
                    id: userName,
                },
                UpdateExpression: 'set nonce = :nonce',
                ExpressionAttributeValues: {
                    ':nonce': nonce,
                },
            })
            .promise()

        event.response.answerCorrect = true
        return event
    }

    console.log('NOT VALIDATED!!!')

    // Fallback
    event.response.answerCorrect = false
    return event
}
