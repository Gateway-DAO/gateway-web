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

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const docClient = new AWS.DynamoDB.DocumentClient()

const resolvers = {
    GateStatus: {
        keysDone: async (ctx) => {
            const { Items } = await docClient
                .scan({
                    TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
                    FilterExpression: 'gateID = :gateID and userID = :userID',
                    ExpressionAttributeValues: {
                        ':gateID': ctx.source.gateID,
                        ':userID': ctx.source.userID
                    },
                })
                .promise()

            console.log(Items)

            const tasks = Items || []

            if (tasks.length === 0) {
                return 0
            }

            let keys = tasks
                .map(async (ts) => {
                    const { Items: [key] = [] } = await docClient
                        .query({
                            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
                            KeyConditionExpression: 'id = :keyID',
                            ExpressionAttributeValues: {
                                ':keyID': ts.keyID,
                            },
                        })
                        .promise()

                    console.log(key.keys)

                    return key.keys
                })

            keys = await Promise.all(keys)

            return keys.reduce((sum, el) => sum + el, 0)
        },
    },
}

exports.handler = async (event) => {
    const typeHandler = resolvers[event.typeName]
    if (typeHandler) {
        const resolver = typeHandler[event.fieldName]
        if (resolver) {
            return await resolver(event)
        }
    }
    throw new Error('Resolver not found.')
}
