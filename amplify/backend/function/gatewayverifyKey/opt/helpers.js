const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const docClient = new AWS.DynamoDB.DocumentClient()

const getKey = async (id) => {
    const { Items: [key] = [] } = await docClient
        .query({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            IndexName: 'UserByAddress',
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise()

    return key
}

const createTaskStatus = async (input) => {
    const taskID = uuidv4()

    const Item = {
        id: input.id || taskID,
        userID: input.userID || "",
        keyID: input.keyID || "",
        completed: input.completed || false
    }

    await docClient
        .put({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
        })
        .promise()

    return Item
}

module.exports = { getKey, createTaskStatus }
