// AWS/Amplify
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import awsconfig from '../../aws-exports';
import { deleteDao } from '../../graphql/mutations';

Amplify.configure(awsconfig);

export const deleteDAO = async (id, opts = {}) => {
    const { data } = await API.graphql(
        graphqlOperation(deleteDao, { input: { id }, ...opts })
    );
    return data.deleteDAO.items[0];
};

export default deleteDAO;
