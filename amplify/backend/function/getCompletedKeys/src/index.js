/* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GATESTATUSTABLE_ARN
	API_GATEWAY_GATESTATUSTABLE_NAME
	API_GATEWAY_GATETABLE_ARN
	API_GATEWAY_GATETABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_KEYTABLE_ARN
	API_GATEWAY_KEYTABLE_NAME
	API_GATEWAY_TASKSTATUSTABLE_ARN
	API_GATEWAY_TASKSTATUSTABLE_NAME
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const resolvers = {
    GateStatus: {
        completedKeys: async (ctx) => {
            const tasks = ctx.source.tasks || []

            if (tasks.length === 0) {
                return 0
            }

            return tasks
                .map((ts) => ts.key.keys)
                .reduce((sum, el) => sum + el, 0)
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
