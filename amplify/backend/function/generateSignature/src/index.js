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
const Web3 = require('web3');
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
});

const generateSignature = async (message) => {
    const { Parameters } = await new AWS.SSM()
        .getParameters({
            Names: ['privateKey'].map((secretName) => process.env[secretName]),
            WithDecryption: true,
        })
        .promise();

    const PRIVATE = Parameters[0].Value;

    const NODE = new Web3(
        new Web3.providers.HttpProvider(
            'https://mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
        )
    );

    const hash = NODE.utils.soliditySha3(message);
    const signature = NODE.eth.accounts.sign(hash, PRIVATE);

    console.log(signature);

    return signature;
};

const resolvers = {
    Mutation: {
        generateSignature: async (ctx) => {
            try {
                const signature = await generateSignature(ctx.arguments.message)
                return {
                    __typename: "Signature",
                    ...signature
                }
            } catch (err) {
                return {
                    __typename: "SignatureError",
                    error: "An unexpected error occurred",
                    msg: err
                }
            }
        },
        
        // For giving permissions to mint
        generatedNonceSignature: async (ctx) => {
            try {
                /**
                 * Generates a random nonce with 10^10-digit number.
                 * This large generation avoids getting repeated nonces, with a 1/(10^10) probability of getting repeated numbers.
                 */
                const nonce = Math.floor(Math.random() * Math.pow(10, 10)).toString();
                
                const signature = await generateSignature(nonce)

                return {
                    __typename: "Signature",
                    nonce,
                    ...signature
                }
            } catch (err) {
                return {
                    __typename: "SignatureError",
                    error: "An unexpected error occurred",
                    msg: err
                }
            }
        }
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
