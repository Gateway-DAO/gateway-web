// AWS/Amplify
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import awsconfig from '../../aws-exports';
import { getAuthenticationNonce as DB_GET_NONCE } from '../../graphql/mutations';

Amplify.configure(awsconfig);

export const getNonce = async (wallet, opts = {}) => {
    const query = await API.graphql(
        graphqlOperation(DB_GET_NONCE, { wallet, ...opts })
    );

    return query;
};

export default getNonce;
