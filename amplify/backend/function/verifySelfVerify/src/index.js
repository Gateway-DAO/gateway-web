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
const { default: axios } = require('axios')
const {
    createTaskStatus,
    getKey,
    getGateStatus,
    createGateStatus,
    markGateAsCompleted,
    getGate,
    getCompletedKeys

} = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID, gateID } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

		// 2. get gate
		const gate = await getGate(key.gateID)

		// 3. get gate status; if doesn't exist, create it
		let gateStatus = await getGateStatus(userID, key.gateID)
		if (!gateStatus) {
			gateStatus = await createGateStatus({
				userID,
				gateID
			})
		}

		let keysDone = await getCompletedKeys(userID, key.gateID)

        if (key.task.type === 'SELF_VERIFY') {
            // The user interacted with the task, so task completed
            const item = await createTaskStatus({
                userID,
                keyID,
                gateID,
                completed: true,
            })

            if (keysDone + key.keys >= gate.keysNumber) {
				// Gate completed, update gate status
				await markGateAsCompleted(gateStatus.id)
			}

            return {
                __typename: 'TaskStatus',
                ...item,
            }
        }

        return {
            __typename: 'Error',
            keyID,
            error: 'WRONG_TASK',
            msg: 'This is not a self-verifying task',
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
