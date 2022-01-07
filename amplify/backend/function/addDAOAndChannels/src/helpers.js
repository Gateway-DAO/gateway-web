const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const docClient = new AWS.DynamoDB.DocumentClient()

const createDAO = async (input) => {
    const daoId = uuidv4()

    const Item = {
        id: input.id || daoId,
        dao: input.dao,
        name: input.name,
        backgroundURL: input.backgroundURL || "",
        logoURL: input.logoURL || "",
        categories: input.categories || [],
        description: input.description || "",
        tokenAddress: input.tokenAddress || "",
        createdAt: input.createdAt || new Date().toISOString(),
        updatedAt: input.createdAt || new Date().toISOString(),
        socials: input.socials || [],
        snapshotID: input.snapshotID || ""
    }

    await docClient
        .put({
            TableName: `DAO-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item
        })
        .promise()

    return Item
}

const createChannel = async (input) => {
    const channelId = uuidv4()

    const Item = {
        id: channelId,
        name: input.name,
        daoID: input.daoID,
        createdAt: input.createdAt || new Date().toISOString(),
        updatedAt: input.createdAt || new Date().toISOString(),
    }

    await docClient
        .put({
            TableName: `Channel-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
        })
        .promise()

    return Item
}

module.exports = { createDAO, createChannel }
