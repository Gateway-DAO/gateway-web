const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')

const cognito = new AWS.CognitoIdentityServiceProvider()

AWS.config.update({
    region: 'us-east-1',
})

const AUTH_GATEWAY_POOLID = process.env.AUTH_GATEWAY7887C977_USERPOOLID

const docClient = new AWS.DynamoDB.DocumentClient()

const createUser = async (publicAddress, nonce, tableName) => {
    const userId = uuidv4()
    await cognito
        .adminCreateUser({
            UserPoolId: AUTH_GATEWAY_POOLID,
            Username: userId,
            MessageAction: 'SUPPRESS',
        })
        .promise()

    await cognito
        .adminSetUserPassword({
            Password: 'password',
            UserPoolId: AUTH_GATEWAY_POOLID,
            Username: userId,
            Permanent: true,
        })
        .promise()

    await docClient
        .put({
            TableName: tableName,
            Item: {
                id: userId,
                wallet: publicAddress,
                nonce,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                init: false
            },
        })
        .promise()
    return userId
}

module.exports = { createUser }
