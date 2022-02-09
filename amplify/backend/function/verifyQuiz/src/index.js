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
    getGate,
    getUser,
    getCompletedKeys,
    removePeopleFromKey,
    markGateAsCompleted
} = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
})

exports.handler = async (event, ctx, callback) => {
    try {
        const { userID, keyID, gateID, questions } = event.arguments

        // 1. get key
        const key = await getKey(keyID)

		// 2. get gate
		const gate = await getGate(key.gateID)

        // 2. get user
        const user = await getUser(userID)

		// 3. get gate status; if doesn't exist, create it
		let gateStatus = await getGateStatus(userID, key.gateID)
		if (!gateStatus) {
			gateStatus = await createGateStatus({
				userID,
				gateID
			})
		}

		let keysDone = await getCompletedKeys(userID, key.gateID)

        // 4. 
        let passed = 0
        let taskQuestions = key.task.questions

        questions.forEach(q => {
            let idx = q.questionIdx
            let answers = q.answers

            taskQuestions[idx].options.every((ans, idx) => {
                if (ans.correct && answers.includes(idx)) {
                    
                }

                return null
            })
        });

        if (passed >= key.task.passedAt) {
            // The user holds the token, so task completed
            const item = await createTaskStatus({
                userID,
                keyID,
                gateID,
                completed: true,
            })

            if (!key.unlimited && key.peopleLimit > 0) {
				await removePeopleFromKey(keyID)
			}

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
            error: 'NO_HOLD',
            msg: "User doesn't hold token",
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