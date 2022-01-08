/* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	AUTH_GATEWAY7887C977_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */const AWS = require('aws-sdk')
const { createUser } = require('./helpers')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT
const AUTH_GATEWAY_POOLID = process.env.AUTH_GATEWAY7887C977_USERPOOLID

exports.handler = async (event, ctx, callback) => {
    try {
        const { wallet } = event.arguments
        const docClient = new AWS.DynamoDB.DocumentClient()
        const UserTableName = `User-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`

        console.log('publicAddress', wallet)
        console.log(UserTableName)

        const { Items: [user] = [] } = await docClient
            .query({
                TableName: UserTableName,
                UserPoolId: AUTH_GATEWAY_POOLID,
                IndexName: 'UserByAddress',
                KeyConditionExpression: 'wallet = :wallet',
                ExpressionAttributeValues: {
                    ':wallet': wallet,
                },
            })
            .promise()

        console.log(user)
        if (user) {
            return { userId: user.id, nonce: user.nonce }
        }

        // If there's no user
        const nonce = Math.floor(Math.random() * 1000000)
        const userId = await createUser(
            wallet,
            nonce,
            UserTableName
        )
        return { userId, nonce }
    } catch (error) {
        console.log(error)
        return error
    }
}
