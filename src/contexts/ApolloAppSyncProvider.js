import React from 'react';

// Apollo Settings
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    ApolloLink,
} from '@apollo/client/';

// AppSync
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import AppSyncConfig from '../aws-exports';

const client = new ApolloClient({
    link: ApolloLink.from([
        createAuthLink({
            url: AppSyncConfig.aws_appsync_graphqlEndpoint,
            region: AppSyncConfig.aws_appsync_region,
            auth: {
                type: AppSyncConfig.aws_appsync_authenticationType,
                apiKey: AppSyncConfig.aws_appsync_apiKey,
            },
        }),
        createHttpLink({ uri: AppSyncConfig.aws_appsync_graphqlEndpoint }),
    ]),
    cache: new InMemoryCache(),
});

const ApolloAppSyncProvider = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloAppSyncProvider;
