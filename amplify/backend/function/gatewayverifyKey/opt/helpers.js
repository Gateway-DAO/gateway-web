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
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise()

    return key
}

const getUser = async (id) => {
    const { Items: [user] = [] } = await docClient
        .query({
            TableName: `User-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise()

    return user
}

const getGateStatus = async (userID, gateID) => {
    const { Items: [status] = [] } = await docClient
        .scan({
            TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            FilterExpression: '#gateID = :id and #userID = :userID',
            ExpressionAttributeNames: {
                "#gateID": "gateID",
                "#userID": "userID"
            },
            ExpressionAttributeValues: {
                ':id': gateID,
                ':userID': userID
            },
        })
        .promise()

    return status
}

const createTaskStatus = async (input) => {
    const taskID = uuidv4()

    const Item = {
        id: input.id || taskID,
        userID: input.userID || "",
        keyID: input.keyID || "",
        gateID: input.gateID || "",
        completed: input.completed || false
    }

    await docClient
        .put({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)'
        })
        .promise()

    return Item
}

const createGateStatus = async (input) => {
    const gateStatusID = uuidv4()

    const Item = {
        id: input.id || gateStatusID,
        userID: input.userID || "",
        gateID: input.gateID || "",
        status: input.status || "IN_PROGRESS"
    }

    await docClient
        .put({
            TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)'
        })
        .promise()

    return Item
}

module.exports = { getKey, getUser, getGateStatus, createTaskStatus, createGateStatus }
