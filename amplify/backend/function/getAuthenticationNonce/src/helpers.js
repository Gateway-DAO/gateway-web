const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')

const cognito = new AWS.CognitoIdentityServiceProvider()

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = "23do7wyxrredvnvvkzddkh5imu"
const AUTH_GATEWAY_USERPOOLID = "us-east-1_vLFvhaiCg"

const docClient = new AWS.DynamoDB.DocumentClient()

const createUser = async (publicAddress, nonce, username, tableName) => {
    const userId = uuidv4()
    await cognito
        .adminCreateUser({
            UserPoolId: AUTH_GATEWAY_USERPOOLID,
            Username: userId,
            MessageAction: 'SUPPRESS',
        })
        .promise()

    await cognito
        .adminSetUserPassword({
            Password: 'password',
            UserPoolId: AUTH_GATEWAY_USERPOOLID,
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
                username,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        })
        .promise()
    return userId
}

module.exports = { createUser }
