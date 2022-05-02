require('dotenv').config();

module.exports = {
    schema: [
        {
            'https://gateway-dao-api.hasura.app/v1/graphql': {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
                    'x-hasura-admin-secret': process.env.REACT_APP_AUTH_TOKEN,
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.gql'],
    overwrite: true,
    generates: {
        './src/graphql/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
