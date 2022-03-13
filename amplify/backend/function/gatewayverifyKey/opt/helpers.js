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

const getGate = async (id) => {
    const { Items: [gate] = [] } = await docClient
        .query({
            TableName: `Gate-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise()

    return gate
}

const removePeopleFromKey = async (keyID) => {
    const { Items: [key] = [] } = await docClient
        .update({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Key: {
                id: keyID,
            },
            ConditionExpression: `#unlimited = :false AND #people >= :zero`,
            UpdateExpression: 'SET #people = #people - :decrement',
            ExpressionAttributeValues: {
                ':decrement': 1,
                ':false': false,
                ':zero': 0
            },
            ExpressionAttributeNames: {
                '#people': 'peopleLimit',
                '#unlimited': 'unlimited'
            },
            ReturnValues: 'UPDATED_NEW',
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
                '#gateID': 'gateID',
                '#userID': 'userID',
            },
            ExpressionAttributeValues: {
                ':id': gateID,
                ':userID': userID,
            },
        })
        .promise()

    return status
}

const markGateAsCompleted = async (gsID) => {
    // Mark gate as completed
    const { Items: [status] = [] } = await docClient
        .update({
            TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Key: {
                id: gsID,
            },
            ConditionExpression: `#st <> :completed`,
            UpdateExpression: 'set #st = :completed',
            ExpressionAttributeValues: {
                ':completed': 'COMPLETED',
            },
            ExpressionAttributeNames: {
                "#st": "status"
            },
            ReturnValues: 'UPDATED_NEW',
        })
        .promise()

    /*
    // Issue credential
    const Item = {
        id: uuidv4(),
        issuerID: process.env.ENV == "main" ? "21696527-0fe3-40fc-86d5-d85f650ae3fe" : "70a52c4e-f333-4f6c-b528-993ad166ad10",
        targetID: userID
        organizationID: daoID,
        name,
        description,
        ceramicStream: 
        createdAt: new Date().toISOString()
    }

    await docClient
        .put({
            TableName: `Credential-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)',
        })
    */

    return status
}

const createTaskStatus = async (input) => {
    const taskID = uuidv4()

    const Item = {
        id: input.id || taskID,
        userID: input.userID || '',
        keyID: input.keyID || '',
        gateID: input.gateID || '',
        completed: input.completed || false,
    }

    await docClient
        .put({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)',
        })
        .promise()

    return Item
}

const createGateStatus = async (input) => {
    const gateStatusID = uuidv4()

    const Item = {
        id: input.id || gateStatusID,
        userID: input.userID || '',
        gateID: input.gateID || '',
        status: input.status || 'IN_PROGRESS',
    }

    await docClient
        .put({
            TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)',
        })
        .promise()

    return Item
}

const getCompletedKeys = async (userID, gateID) => {
    const { Items } = await docClient
        .scan({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            FilterExpression: 'gateID = :gateID and userID = :userID',
            ExpressionAttributeValues: {
                ':gateID': gateID,
                ':userID': userID
            },
        })
        .promise()

    const tasks = Items || []

    if (tasks.length === 0) {
        return 0
    }

    let keys = tasks.map(async (ts) => {
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
}

module.exports = {
    getKey,
    getUser,
    getGate,
    getGateStatus,
    getCompletedKeys,
    createTaskStatus,
    createGateStatus,
    removePeopleFromKey,
    markGateAsCompleted
}
