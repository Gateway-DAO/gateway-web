import React from 'react';

// Apollo Settings
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    HttpLink
} from '@apollo/client/';


const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_HASURA_ENDPOINT,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        'x-hasura-admin-secret': process.env.REACT_APP_AUTH_TOKEN
      }
    }),
    cache: new InMemoryCache(),
  });

const ApolloAppSyncProvider = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloAppSyncProvider;
