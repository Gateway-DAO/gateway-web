const AWS = require('aws-sdk')

const axios = require('axios').default
const gql = require('graphql-tag')
const graphql = require('graphql')
const { print } = graphql

const listDAOs = (filter) => gql`
    query listDAOs {
        listDAOs(filter: { or: ${filter} })
    }
`

const resolvers = {
    User: {
        daos: async (ctx) => {
            const daos_ids = ctx.source.daos_ids || []

            const daos = daos_ids.map((id) => {
                return { id: id }
            })

            const req = await axios.post(
                ctx.request.headers.host,
                {
                    query: print(listDAOs(daos)),
                },
                {
                    headers: {
                        'x-api-key': ctx.request.headers['x-api-key'],
                    },
                }
            )

            console.log(req.data)
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
