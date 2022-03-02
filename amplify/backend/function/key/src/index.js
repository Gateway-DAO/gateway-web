/* Amplify Params - DO NOT EDIT
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_KEYTABLE_ARN
	API_GATEWAY_KEYTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { createKey, updateKey: update } = require('./helpers');

const resolvers = {
    Mutation: {
        changeKey: async (ctx) => {
            return update(ctx.arguments.input);
        },

        // Key creation
        createQuiz: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createMeetingCode: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createTokenHold: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createSnapshotGovernance: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createSelfVerify: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createContractInteraction: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createManualTask: async (ctx) => {
            return createKey(ctx.arguments.input);
        },
    },
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
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
