/* Amplify Params - DO NOT EDIT
	API_GATEWAY_CHANNELTABLE_ARN
	API_GATEWAY_CHANNELTABLE_NAME
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk')
const { createDAO, createChannel } = require('./helpers')

AWS.config.update({
    region: 'us-east-1',
})

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT

exports.handler = async (event, ctx, callback) => {
    try {
        const { input } = event.arguments

        const dao = await createDAO(input);

        const channelList = ["general", "questions", "governance"]
        
        const channels = channelList.map(channel => {
            return createChannel({
                name: channel,
                daoID: dao.id
            })
        })

        await Promise.all(channels)

        return dao
    } catch (error) {
        console.log(error)
        return error
    }
}