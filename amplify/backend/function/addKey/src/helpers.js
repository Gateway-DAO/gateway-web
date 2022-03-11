const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const docClient = new AWS.DynamoDB.DocumentClient()

const createKey = async (input) => {
    const keyId = uuidv4()

    let Item = {
        id: input.id || keyId,
        gateID: input.gateID,
        information: input.information,
        token: input.token,
        tokenAmount: input.tokenAmount,
        keys: input.keys,
        peopleLimit: input.peopleLimit,
        unlimited: input.unlimited,
        createdAt: input.createdAt || new Date().toISOString(),
        updatedAt: input.createdAt || new Date().toISOString(),
    }

    switch (input.task.type) {
        case "QUIZ":
            Item = {
                ...Item,
                task: {
                    "__typename": "Quiz",
                    ...input.task
                }
            }
            break
        case "MEETING_CODE":
            Item = {
                ...Item,
                task: {
                    "__typename": "MeetingCode",
                    ...input.task
                }
            }
            break
        case "TOKEN_HOLD":
            Item = {
                ...Item,
                task: {
                    "__typename": "TokenHold",
                    ...input.task
                }
            }
            break
        case "SC_INTERACTION":
        case "CONTRACT_INTERACTION":
            Item = {
                ...Item,
                task: {
                    "__typename": "ContractInteraction",
                    ...input.task
                }
            }
            break
        case "SNAPSHOT":
            Item = {
                ...Item,
                task: {
                    "__typename": "SnapshotGovernance",
                    ...input.task
                }
            }
            break
        case "MANUAL_TASK":
            Item = {
                ...Item,
                task: {
                    "__typename": "ManualTask",
                    ...input.task
                }
            }
            break
        case "SELF_VERIFY":
            Item = {
                ...Item,
                task: {
                    "__typename": "SelfVerify",
                    ...input.task
                }
            }
            break
        case "SNAPSHOT_GOVERNANCE":
            Item = {
                ...Item,
                task: {
                    "__typename": "SnapshotGovernance",
                    ...input.task
                }
            }
            break
        default:
    }

    await docClient
        .put({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item
        })
        .promise()

    return Item
}

module.exports = { createKey }
