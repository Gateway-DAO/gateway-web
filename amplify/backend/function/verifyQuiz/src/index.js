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
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
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

const AWS = require('aws-sdk')
const {
    createTaskStatus,
    getKey,
    getGateStatus,
    createGateStatus,
} = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID, gateID, questions } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

        // 2. get gate status; if doesn't exist, create it
        const gateStatus = await getGateStatus(userID, gateID)
        if (!gateStatus) {
            await createGateStatus({
                userID,
                gateID,
            })
        }

        return {
            __typename: 'Error',
            keyID,
            error: 'INVALID_CODE',
            msg: 'User inserted the wrong meeting code',
        }
    } catch (error) {
        const { keyID } = event.arguments

        console.log(error)

        return {
            __typename: 'Error',
            keyID,
            error: 'UNEXPECTED_ERROR',
            msg: error,
        }
    }
}
