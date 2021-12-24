/* Amplify Params - DO NOT EDIT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */const ethUtil = require('ethereumjs-util')
const AWS = require('aws-sdk')

const UserTableName = `User-${process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`

exports.handler = async (event) => {
    // Get challenge and timestamp from user attributes
    console.log('event', event)

    const { userName } = event
    const { publicAddress, signature, nonce } = JSON.parse(
        event.request.challengeAnswer
    )
    console.log(ethUtil)

    /*  const { v, r, s } = ethUtil.fromRpcSig(signature)
    const pubKey = ethUtil.ecrecover(
        ethUtil.toBuffer(ethUtil.fromUtf8(nonce)),
        v,
        r,
        s
    )
    const addrBuf = ethUtil.pubToAddress(pubKey)
    const address = ethUtil.bufferToHex(addrBuf) */

    console.log({ publicAddress, signature, nonce })
    const msgBuffer = ethUtil.toBuffer(ethUtil.fromUtf8(nonce))
    console.log(msgBuffer)

    const msgHash = ethUtil.hashPersonalMessage(msgBuffer)
    console.log(msgHash)

    const signatureBuffer = ethUtil.toBuffer(signature)
    const signatureParams = ethUtil.fromRpcSig(signatureBuffer)
    const publicKey = ethUtil.ecrecover(
        msgHash,
        signatureParams.v,
        signatureParams.r,
        signatureParams.s
    )
    const addressBuffer = ethUtil.publicToAddress(publicKey)
    const address = ethUtil.bufferToHex(addressBuffer)
    console.log('address', address)
    console.log('publicAddress', publicAddress)

    if (address.toLowerCase() === publicAddress.toLowerCase()) {
        const docClient = new AWS.DynamoDB.DocumentClient()
        const nonce = Math.floor(Math.random() * 1000000)
        await docClient
            .update({
                TableName: UserTableName,
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
