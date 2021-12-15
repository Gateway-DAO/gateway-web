// AWS/Amplify
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsconfig from "../../aws-exports";
import { getDaoById, getDaoByName } from "../../graphql/queries";

Amplify.configure(awsconfig);

export const getDAOByID = async (id, opts = {}) => {
    const { data } = await API.graphql(graphqlOperation(getDaoById, { dao: id, ...opts }))
    return data.getDAOById.items[0]
}

export const getDAOByName = async (name, opts = {}) => {
    const { data } = await API.graphql(graphqlOperation(getDaoByName, { name, ...opts }))
    return data.getDAOByName.items[0]
}

export default getDAOByID