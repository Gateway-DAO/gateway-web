/* Amplify Params - DO NOT EDIT
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
const { createTaskStatus, getKey } = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID, meetingCode } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

        // 2. check if inserted meeting code is equal to the one on the DB
        const meetingCodeDB = key.task.code

        if (meetingCodeDB === meetingCode) {
            // 3. create a task status for the user
            const item = await createTaskStatus({
                userID,
                keyID,
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
            error: 'INVALID_CODE',
            msg: 'User inserted the wrong meeting code',
        }
    } catch (error) {
        console.log(error)
        return error
    }
}
