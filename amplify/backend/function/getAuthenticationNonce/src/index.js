const AWS = require('aws-sdk')
const { createUser } = require('./helpers')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = "23do7wyxrredvnvvkzddkh5imu"
const AUTH_GATEWAY_USERPOOLID = "us-east-1_vLFvhaiCg"

exports.handler = async (event, ctx, callback) => {
    try {
        const { wallet, username } = event.arguments
        const docClient = new AWS.DynamoDB.DocumentClient()
        const UserTableName = `User-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`
        console.log('publicAddress', wallet)
        const { Items: [user] = [] } = await docClient
            .query({
                TableName: UserTableName,
                IndexName: 'UserByAddress',
                KeyConditionExpression: 'wallet = :wallet',
                ExpressionAttributeValues: {
                    ':wallet': wallet,
                },
            })
            .promise()
        if (user) {
            return { userId: user.id, nonce: user.nonce }
        }
        const nonce = Math.floor(Math.random() * 1000000)
        const userId = await createUser(
            wallet,
            nonce,
            username,
            UserTableName
        )
        return { userId, nonce }
    } catch (error) {
        console.log(error)
        return error
    }
}
