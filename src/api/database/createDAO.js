// AWS/Amplify
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { createDao } from "../../graphql/mutations";

Amplify.configure(awsconfig);

export const createDAO = async (input, opts = {}) => {
    const { data } = await API.graphql(graphqlOperation(createDao, { input, ...opts }))
    return data.createDAO.items[0]
}

export default createDAO