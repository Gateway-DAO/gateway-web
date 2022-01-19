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

const axios = require('axios').default
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const listDAOs = (filter) => {
    return gql`
        query ListDAOs {
            listDAOs(filter: {or: ${filter || JSON.stringify({})}}) {
                items {
                    id
                    dao
                    name
                    faq {
                        question
                        answer
                    }
                    accomplishments
                    snapshotID
                    backgroundURL
                    youtubeURL
                    logoURL
                    bounties {
                        headline
                        description
                        level
                        categories
                        reward
                        directions
                        links
                        endDate
                        postDate
                    }
                    categories
                    tags
                    description
                    howToJoin
                    missionAndVision
                    whatDoWeDo
                    tokenBenefits {
                        amount
                        description
                        title
                        token
                    }
                    upcomingHangouts
                    tokenAddress
                    whitelistedAddresses
                    socials {
                        network
                        url
                    }
                    chains
                    channels {
                        nextToken
                    }
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    `
}

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

            /*
            const daos = "[" + daos_ids.map((id) => {
                return `{ dao: { eq: "${id}" } }`
            }).toString() + "]"
            
            console.log(print(listDAOs(daos)))

            const req = await axios.post(
                process.env.API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT,
                {
                    query: print(listDAOs(daos)),
                },
                {
                    headers: {
                        'x-api-key':
                            process.env.API_GATEWAY_GRAPHQLAPIKEYOUTPUT,
                    },
                }
            )

            return req.data.data.listDAOs.items || []
            */

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
