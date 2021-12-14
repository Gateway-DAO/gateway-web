const AWS = require('aws-sdk')

const axios = require('axios').default
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const listDAOs = (filter) => {
    return gql`
        query listDAOs {
            listDAOs(filter: {or: ${filter || JSON.stringify({})}}) {
                items {
                    id
                    accomplishments
                    backgroundURL
                    bounties {
                    categories
                    description
                    directions
                    endDate
                    headline
                    level
                    links
                    postDate
                    reward
                    }
                    categories
                    createdAt
                    dao
                    description
                    faq {
                    answer
                    question
                    }
                    howToJoin
                    logoURL
                    missionAndVision
                    name
                    socials {
                    network
                    url
                    }
                    tags
                    tokenAddress
                    tokenBenefits {
                    amount
                    description
                    title
                    token
                    }
                    upcomingHangouts
                    whatDoWeDo
                }
            }
        }
    `
}

const resolvers = {
    User: {
        daos: async (ctx) => {
            const daos_ids = ctx.source.daos_ids || []

            const daos = daos_ids.map((id) => {
                return `{ dao: { eq: "${id}" } }`
            })

            const req = await axios.post(
                `http://${ctx.request.headers.host}/graphql`,
                {
                    query: print(listDAOs(daos)),
                },
                {
                    headers: {
                        'x-api-key': ctx.request.headers['x-api-key'],
                    },
                }
            )

            return req.data.data.listDAOs || []
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
