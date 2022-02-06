/* Amplify Params - DO NOT EDIT
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
const { default: axios } = require('axios')
const { createTaskStatus, getKey, getUser } = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID, gateID } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

		if (key.task.type === "SELF_VERIFY") {
			// The user interacted with the task, so task completed
			const item = await createTaskStatus({
				userID,
				keyID,
				gateID,
				completed: true,
			})

			return {
				__typename: 'TaskStatus',
				...item,
			}
		}

        return {
            __typename: 'Error',
            keyID,
            error: 'WRONG_TASK',
            msg: "This is not a self-verifying task",
        }
    } catch (error) {
        console.log(error)
        return error
    }
}