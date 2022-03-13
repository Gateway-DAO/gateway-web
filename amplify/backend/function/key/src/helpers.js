const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const {
    createGateStatus,
    getGateStatus,
    getKey,
    getUser,
    getCompletedKeys,
    getGate,
} = require('/opt/helpers.js')

AWS.config.update({
    region: 'us-east-1',
});

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT;

const docClient = new AWS.DynamoDB.DocumentClient();

const createKey = async (input) => {
    const keyId = uuidv4();

    let Item = {
        id: input.id || keyId,
        gateID: input.gateID,
        information: input.information,
        token: input.token,
        tokenAmount: input.tokenAmount,
        keys: input.keys,
        peopleLimit: input.peopleLimit,
        unlimited: input.unlimited,
        createdAt: input.createdAt || new Date().toISOString(),
        updatedAt: input.createdAt || new Date().toISOString(),
    };

    switch (input.task.type) {
        case 'QUIZ':
            Item = {
                ...Item,
                task: {
                    __typename: 'Quiz',
                    ...input.task,
                },
            };
            break;
        case 'MEETING_CODE':
            Item = {
                ...Item,
                task: {
                    __typename: 'MeetingCode',
                    ...input.task,
                },
            };
            break;
        case 'TOKEN_HOLD':
            Item = {
                ...Item,
                task: {
                    __typename: 'TokenHold',
                    ...input.task,
                },
            };
            break;
        case 'SC_INTERACTION':
        case 'CONTRACT_INTERACTION':
            Item = {
                ...Item,
                task: {
                    __typename: 'ContractInteraction',
                    ...input.task,
                },
            };
            break;
        case 'SNAPSHOT':
            Item = {
                ...Item,
                task: {
                    __typename: 'SnapshotGovernance',
                    ...input.task,
                },
            };
            break;
        case 'MANUAL_TASK':
            Item = {
                ...Item,
                task: {
                    __typename: 'ManualTask',
                    ...input.task,
                },
            };
            break;
        case 'SELF_VERIFY':
            Item = {
                ...Item,
                task: {
                    __typename: 'SelfVerify',
                    ...input.task,
                },
            };
            break;
        case 'SNAPSHOT_GOVERNANCE':
            Item = {
                ...Item,
                task: {
                    __typename: 'SnapshotGovernance',
                    ...input.task,
                },
            };
            break;
        default:
    }

    await docClient
        .put({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
        })
        .promise();

    return Item;
};

const updateKey = async (input) => {
    let Item = {
        id: input.id,
        gateID: input.gateID,
        information: input.information,
        token: input.token,
        tokenAmount: input.tokenAmount,
        keys: input.keys,
        peopleLimit: input.peopleLimit,
        unlimited: input.unlimited,
        createdAt: input.createdAt || new Date().toISOString(),
        updatedAt: input.createdAt || new Date().toISOString(),
        task: input.task,
    };

    console.log(`Old Item: ${Item}`);

    switch (input.task.type) {
        case 'QUIZ':
            Item = {
                ...Item,
                task: {
                    __typename: 'Quiz',
                    ...input.task,
                },
            };
            break;
        case 'MEETING_CODE':
            Item = {
                ...Item,
                task: {
                    __typename: 'MeetingCode',
                    ...input.task,
                },
            };
            break;
        case 'TOKEN_HOLD':
            Item = {
                ...Item,
                task: {
                    __typename: 'TokenHold',
                    ...input.task,
                },
            };
            break;
        case 'SC_INTERACTION':
        case 'CONTRACT_INTERACTION':
            Item = {
                ...Item,
                task: {
                    __typename: 'ContractInteraction',
                    ...input.task,
                },
            };
            break;
        case 'SNAPSHOT':
            Item = {
                ...Item,
                task: {
                    __typename: 'SnapshotGovernance',
                    ...input.task,
                },
            };
            break;
        case 'MANUAL_TASK':
            Item = {
                ...Item,
                task: {
                    __typename: 'ManualTask',
                    ...input.task,
                },
            };
            break;
        case 'SELF_VERIFY':
            Item = {
                ...Item,
                task: {
                    __typename: 'SelfVerify',
                    ...input.task,
                },
            };
            break;
        case 'SNAPSHOT_GOVERNANCE':
            Item = {
                ...Item,
                task: {
                    __typename: 'SnapshotGovernance',
                    ...input.task,
                },
            };
            break;
        default:
    }

    const newItem = await docClient
        .put({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
        })
        .promise();

    console.log(`New Item: ${newItem}`);

    return Item;
};

const verifyKey = async (args, callback) => {
    try {
        const { userID, keyID } = args

        // 1. get key
        const key = await getKey(keyID)

        if (key.peopleLimit <= 0 && !key.unlimited) {
            return {
                __typename: 'Error',
                keyID,
                error: 'NO_MORE_SLOTS',
                msg: "This task can no longer be completed.",
            }
        }

        // 2. get gate
        const gate = await getGate(key.gateID)

        // 2. get user
        const user = await getUser(userID)

        // 3. get gate status; if doesn't exist, create it
        let gateStatus = await getGateStatus(userID, key.gateID)
        if (!gateStatus) {
            gateStatus = await createGateStatus({
                userID,
                gateID: key.gateID,
            })
        }

        let keysDone = await getCompletedKeys(userID, key.gateID)

        return await callback({
            ...args,
            key,
            gate,
            user,
            gateStatus,
            keysDone
        })
    } catch (error) {
        const { keyID } = args

        return {
            __typename: 'Error',
            keyID,
            error: 'UNEXPECTED_ERROR',
            msg: error,
        }
    }
}

const getChain = (chainID) => {
    switch (chainID) {
        case 1:
            return 'ethereum';
        case 44787:
            return 'celo_alfajores';
        case 62320:
            return 'celo_baklava';
        case 42220:
            return 'celo_rc1';
        case 56:
            return 'bsc';
        case 97:
            return 'bsc_testnet';
        case 5:
            return 'goerli';
        case 137:
            return 'matic';
        case 106:
            return 'velas';
        case 8217:
            return 'klaytn';
        case 43114:
            return 'avalanche';
        default:
            return 'ethereum';
    }
}

const getProvider = (chainID) => {
    switch (chainID) {
        case 1:
            // Mainnet Ethereum
            return new ethers.providers.JsonRpcProvider(
                'https://mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 3:
            // Ropsten
            return new ethers.providers.JsonRpcProvider(
                'https://ropsten.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 4:
            // Rinkeby
            return new ethers.providers.JsonRpcProvider(
                'https://rinkeby.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 5:
            // Görli
            return new ethers.providers.JsonRpcProvider(
                'https://goerli.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 6:
            // Kovan
            return new ethers.providers.JsonRpcProvider(
                'https://kovan.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 10:
            // Mainnet Optimistic
            return new ethers.providers.JsonRpcProvider(
                'https://optimism-mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 56:
            // Mainnet BSC
            return new ethers.providers.JsonRpcProvider(
                'https://speedy-nodes-nyc.moralis.io/dfb3897464f2fdbbfd1b4a83/bsc/mainnet'
            );
        case 69:
            // Optimistic Kovan
            return new ethers.providers.JsonRpcProvider(
                'https://optimism-kovan.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 97:
            // BSC Testnet
            return new ethers.providers.JsonRpcProvider(
                'https://speedy-nodes-nyc.moralis.io/dfb3897464f2fdbbfd1b4a83/bsc/testnet'
            );
        case 137:
            // Mainnet Polygon
            return new ethers.providers.JsonRpcProvider(
                'https://polygon-mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 42161:
            // Mainnet Arbitrum
            return new ethers.providers.JsonRpcProvider(
                'https://arbitrum-mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 80001:
            // Polygon Mumbai
            return new ethers.providers.JsonRpcProvider(
                'https://polygon-mumbai.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        case 421611:
            // Arbitrum Rinkeby
            return new ethers.providers.JsonRpcProvider(
                'https://arbitrum-rinkeby.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
        default:
            return new ethers.providers.JsonRpcProvider(
                'https://mainnet.infura.io/v3/19128174ace8471f88c08ca304b087e9'
            );
    }
}

module.exports = { createKey, updateKey, verifyKey, getChain, getProvider };
