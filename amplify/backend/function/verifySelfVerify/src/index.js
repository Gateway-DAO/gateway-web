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

const AWS = require('aws-sdk')
const {
    createTaskStatus,
    getKey,
    getGateStatus,
    createGateStatus,
    markGateAsCompleted,
    getGate,
    getCompletedKeys,
    removePeopleFromKey,
} = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

        if (key.peopleLimit <= 0 && !key.unlimited) {
            return {
                __typename: 'Error',
                keyID,
                error: 'NO_MORE_SLOTS',
                msg: "This task can no longer be completed.",
            }
        }

        // 2. get gate
        const gate = await getGate(key.gateID)

        // 3. get gate status; if doesn't exist, create it
        let gateStatus = await getGateStatus(userID, key.gateID)
        if (!gateStatus) {
            gateStatus = await createGateStatus({
                userID,
                gateID: key.gateID,
            })
        }

        let keysDone = await getCompletedKeys(userID, key.gateID)

        if (key.task.type === 'SELF_VERIFY') {
            const item = await createTaskStatus({
                userID,
                keyID,
                gateID: key.gateID,
                completed: true,
            })

            let completedGate = false

            if (!key.unlimited && key.peopleLimit > 0) {
                await removePeopleFromKey(keyID)
            }

            if (
                keysDone + key.keys >= gate.keysNumber &&
                gateStatus.status !== 'COMPLETED'
            ) {
                // Gate completed, update gate status
                await markGateAsCompleted(gateStatus.id)
                completedGate = true
            }

            return {
                __typename: 'TaskAndGateResponse',
                ...item,
                completedGate,
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
