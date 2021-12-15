// AWS/Amplify
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { updateDao } from "../../graphql/mutations";

Amplify.configure(awsconfig);

export const updateDAOByID = async (id, input, opts = {}) => {
    const { data } = await API.graphql(graphqlOperation(updateDao, { condition: { dao: { eq: id } }, input, ...opts }))
    return data.updateDao.items[0]
}

export const updateDAOByName = async (name, input, opts = {}) => {
    const { data } = await API.graphql(graphqlOperation(updateDao, { condition: { name: { eq: name } }, input, ...opts }))
    return data.updateDao.items[0]
}

export default updateDAOByID