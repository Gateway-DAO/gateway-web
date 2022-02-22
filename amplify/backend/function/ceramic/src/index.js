/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["privateKey"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["privateKey"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { CeramicClient } = require('@ceramicnetwork/http-client');
const { TileDocument } = require('@ceramicnetwork/stream-tile');
const { DID } = require('dids');
const { Ed25519Provider } = require('key-did-provider-ed25519');
const { getResolver } = require('key-did-resolver');

const AWS = require('aws-sdk');

const ceramic = new CeramicClient();

// `seed` must be a 32-byte long Uint8Array
const authenticateCeramic = async (seed, ceramic) => {
    const provider = new Ed25519Provider(seed);
    const did = new DID({ provider, resolver: getResolver() });

    // Authenticate the DID with the provider
    await did.authenticate();

    // The Ceramic client can create and update streams using the authenticated DID
    ceramic.did = did;
};

const strToUint8Array = (s) => {
    let result = [];

    for (let i = 0; i < s.length; i += 2) {
        result.push(parseInt(s.substring(i, i + 2), 16));
    }

    let uintArray = Uint8Array.from(result);

    return uintArray;
};

AWS.config.update({
    region: 'us-east-1',
});

const resolvers = {
    Mutation: {
        streamToCeramic: async (ctx) => {
            try {
                const { data, node } = ctx.arguments;

                const ceramic = new CeramicClient(
                    node || 'https://ceramic-clay.3boxlabs.com'
                );

                const { Parameters } = await new AWS.SSM()
                    .getParameters({
                        Names: ['privateKey'].map(
                            (secretName) => process.env[secretName]
                        ),
                        WithDecryption: true,
                    })
                    .promise();

                const privateKey = Parameters[0].Value;

                const seed = strToUint8Array(privateKey);
                await authenticateCeramic(seed, ceramic);

                // The following call will fail if the Ceramic instance does not have an authenticated DID
                const doc = await TileDocument.create(ceramic, data);

                return {
                    __typename: 'StreamCeramic',
                    streamed: true,
                    streamID: doc.id.toString(),
                    data: doc.content,
                };
            } catch (err) {
                return {
                    __typename: 'CeramicError',
                    error: true,
                    msg: err,
                };
            }
        },
    },
    Query: {
        fetchFromCeramic: async (ctx) => {
            const { streamID, node } = ctx.arguments;

            try {
                // Initialize Ceramic client
                const ceramic = new CeramicClient(
                    node || 'https://ceramic-clay.3boxlabs.com'
                );

                // Fetch data from Ceramic by StreamID
                const stream = await ceramic.loadStream(streamID);

                const obj = {
                    __typename: 'FetchCeramic',
                    streamID: stream.id.toString(),
                    data: stream.content,
                };

                return obj;
            } catch (err) {
                return {
                    __typename: 'CeramicError',
                    error: true,
                    msg: err,
                };
            }
        },
    },
};

exports.handler = async (event) => {
    const typeHandler = resolvers[event.typeName];
    if (typeHandler) {
        const resolver = typeHandler[event.fieldName];
        if (resolver) {
            return await resolver(event);
        }
    }
    throw new Error('Resolver not found.');
};
