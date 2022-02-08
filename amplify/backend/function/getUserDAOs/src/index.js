/* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const AWS = require('aws-sdk')

const resolvers = {
    User: {
        daos: async (ctx) => {
            const daos_ids = ctx.source.daos_ids || []

            if (daos_ids.length === 0) {
                return []
            }

            const DAOTableName = `DAO-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`
            const docClient = new AWS.DynamoDB.DocumentClient()

            const { Items: daos = [] } = await docClient
                .scan({
                    TableName: DAOTableName,
                    ExpressionAttributeNames: {
                        '#dao': 'dao',
                    },
                    ExpressionAttributeValues: {
                        ':daos': daos_ids,
                    },
                    FilterExpression: "contains(:daos, #dao)"
                })
                .promise()

            return daos
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
