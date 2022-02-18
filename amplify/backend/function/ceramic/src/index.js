/* Amplify Params - DO NOT EDIT
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { CeramicClient } = require('@ceramicnetwork/http-client')
const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

const docClient = new AWS.DynamoDB.DocumentClient()

const resolvers = {
    Mutation: {
        streamToCeramic: async (ctx) => {
            /* 
            const { data, node } = ctx.source

            const ceramic = new CeramicClient(node || "http://ceramic-node.mygateway.xyz:7007")

            return 
            */
        },
    },
    Query: {
        fetchFromCeramic: async (ctx) => {
            const { streamID, node } = ctx.source

            try {
                // Initialize Ceramic client
                const ceramic = new CeramicClient(node || "http://ceramic-node.mygateway.xyz:7007")

                // Fetch data from Ceramic by StreamID
                const stream = await ceramic.loadStream(streamID)

                const obj = {
                    streamID: stream.id,
                    data: stream.content
                }

                return obj
            }
            catch (err) {
                return {
                    error: true,
                    msg: err
                }
            }
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
