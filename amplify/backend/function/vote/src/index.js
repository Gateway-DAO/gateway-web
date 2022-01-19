/* Amplify Params - DO NOT EDIT
	API_GATEWAY_COMMENTTABLE_ARN
	API_GATEWAY_COMMENTTABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_POSTTABLE_ARN
	API_GATEWAY_POSTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const votePost = async (event) => {
    const { postID, userID, type } = event.arguments
    const voteType = type === "UPVOTE" ? "upvotes" : "downvotes"
    const docClient = new AWS.DynamoDB.DocumentClient()
    const PostTableName = `Post-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`

    await docClient
        .update({
            TableName: PostTableName,
            ExpressionAttributeNames: {
                "#Y": voteType
            },
            ExpressionAttributeValues: {
                ":y": [userID],
                ":user": userID,
                ":empty": []
            },
            Key: {
                id: postID
            },
            ConditionExpression: `NOT contains(#Y, :user)`,
            UpdateExpression: "SET #Y = list_append(if_not_exists(#Y, :empty), :y)",
            ReturnValues: 'UPDATED_NEW'
        })
        .promise()

    const { Items: [post] = [] } = await docClient
        .query({
            TableName: PostTableName,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': postID,
            },
        })
        .promise()

    return post
}

const unvotePost = async (event) => {
    const { postID, userID, type } = event.arguments
    const voteType = type === "UPVOTE" ? "upvotes" : "downvotes"
    const docClient = new AWS.DynamoDB.DocumentClient()
    const PostTableName = `Post-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`

    const { Items: [oldPost] = [] } = await docClient
        .query({
            TableName: PostTableName,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': postID,
            },
        })
        .promise()

    const oldPostVotes = oldPost[voteType]

    const userIndex = oldPostVotes.findIndex(i => i === userID)

    await docClient
        .update({
            TableName: PostTableName,
            ExpressionAttributeNames: {
                "#Y": voteType
            },
            ExpressionAttributeValues: {
                ":user": userID
            },
            Key: {
                id: postID
            },
            ConditionExpression: `contains(#Y, :user)`,
            UpdateExpression: `REMOVE #Y[${userIndex}]`,
            ReturnValues: 'UPDATED_NEW'
        })
        .promise()

    const { Items: [post] = [] } = await docClient
        .query({
            TableName: PostTableName,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': postID,
            },
        })
        .promise()

    return post
}

const resolvers = {
    Mutation: {
        votePost: (event) => {
            return votePost(event)
        },
        unvotePost: (event) => {
            return unvotePost(event)
        },
    },
}

exports.handler = async function (event, context) {
    console.log(event)
    console.log(context)

    const typeHandler = resolvers[event.typeName]
    if (typeHandler) {
        const resolver = typeHandler[event.fieldName]
        if (resolver) {
            return await resolver(event)
        }
    }
    throw new Error('Resolver not found.')
}
