const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const { streamToCeramic: stream } = require('/opt/ceramic.js');

AWS.config.update({
    region: 'us-east-1',
});

const API_GATEWAY_GRAPHQL = process.env.API_GATEWAY_GRAPHQLAPIIDOUTPUT;

const docClient = new AWS.DynamoDB.DocumentClient();

/**
 * Given a chainID, return the corresponding blockchain name
 * @param chainID - The chain ID of the network you want to connect to.
 * @returns The `getChain` function returns the `chainID` of the network.
 */
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
};

/**
 * It returns a provider object that can be used to interact with the Ethereum blockchain
 * @param chainID - The Ethereum network to connect to.
 * @returns An instance of the ethers.providers.JsonRpcProvider class.
 */
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
};

/**
 * Get a key from the database
 * @param id - The id of the key you want to get.
 * @returns The `getKey` function returns a `Promise` that resolves to a `Key` object.
 */
const getKey = async (id) => {
    const { Items: [key] = [] } = await docClient
        .query({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise();

    return key;
};

/**
 * Get a gate by its id
 * @param id - The id of the gate to get.
 * @returns The gate object.
 */
const getGate = async (id) => {
    const { Items: [gate] = [] } = await docClient
        .query({
            TableName: `Gate-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise();

    return gate;
};

/**
 * If the key has limited people and at least one person, decrement the number of people
 * in the key
 * @param keyID - The ID of the key to remove people from.
 * @returns The updated key.
 */
const removePeopleFromKey = async (keyID) => {
    const { Items: [key] = [] } = await docClient
        .update({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Key: {
                id: keyID,
            },
            ConditionExpression: `#unlimited = :false AND #people >= :zero`,
            UpdateExpression: 'SET #people = #people - :decrement',
            ExpressionAttributeValues: {
                ':decrement': 1,
                ':false': false,
                ':zero': 0,
            },
            ExpressionAttributeNames: {
                '#people': 'peopleLimit',
                '#unlimited': 'unlimited',
            },
            ReturnValues: 'UPDATED_NEW',
        })
        .promise();

    return key;
};

/**
 * Get a user by id
 * @param id - The id of the user to get.
 * @returns The user object.
 */
const getUser = async (id) => {
    const { Items: [user] = [] } = await docClient
        .query({
            TableName: `User-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id,
            },
        })
        .promise();

    return user;
};

/**
 * Get the status of a gate
 * @param userID - The userID of the user who owns the gate.
 * @param gateID - The ID of the gate that the user is trying to access.
 * @returns The status of the gate.
 */
const getGateStatus = async (userID, gateID) => {
    const { Items: [status] = [] } = await docClient
        .scan({
            TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            FilterExpression: '#gateID = :id and #userID = :userID',
            ExpressionAttributeNames: {
                '#gateID': 'gateID',
                '#userID': 'userID',
            },
            ExpressionAttributeValues: {
                ':id': gateID,
                ':userID': userID,
            },
        })
        .promise();

    return status;
};

/**
 * Get the task status associated with an user
 * @param userID - The userID of the user who owns the gate.
 * @param gateID - The ID of the gate that the user is trying to access.
 * @returns The status of the gate.
 */
const getTaskStatus = async (userID, gateID) => {
    const { Items: status } = await docClient
        .scan({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            FilterExpression: '#gateID = :id and #userID = :userID',
            ExpressionAttributeNames: {
                '#gateID': 'gateID',
                '#userID': 'userID',
            },
            ExpressionAttributeValues: {
                ':id': gateID,
                ':userID': userID,
            },
        })
        .promise();

    return status;
};

/**
 * Mark a gate as completed and issues a credential.
 * @param gsID - The ID of the gate status to mark as completed.
 * @returns The status of the gate.
 */
const markGateAsCompleted = async (gsID, userID, gate) => {
    try {
        // Mark gate as completed
        const { Items: [status] = [] } = await docClient
            .update({
                TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
                Key: {
                    id: gsID,
                },
                ConditionExpression: `#st <> :completed`,
                UpdateExpression: 'set #st = :completed',
                ExpressionAttributeValues: {
                    ':completed': 'COMPLETED',
                },
                ExpressionAttributeNames: {
                    '#st': 'status',
                },
                ReturnValues: 'UPDATED_NEW',
            })
            .promise();

        // Get task status
        const taskStatus = await getTaskStatus(userID, gate.id);
        const pow = await Promise.all(
            taskStatus.map(async (ts) => {
                const key = await getKey(ts.keyID);

                return {
                    information: key.information,
                    task: key.task,
                };
            })
        );

        // Issue credential
        let Item = {
            id: uuidv4(),
            targetID: userID,
            organizationID: gate.daoID,
            gate: {
                name: gate.name,
                type: gate.nftType
            },
            name: gate.badge.name,
            description: gate.description,
            image: gate.badge.ipfsURL,
            skills: gate.skills || [],
            knowledges: gate.knowledge || [],
            attitudes: gate.attitudes || [],
            ceramicStream: 'ceramic://',
            pow,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        console.log(Item);

        await docClient
            .put({
                TableName: `Credential-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
                Item,
                ConditionExpression: 'attribute_not_exists(id)'
            })
            .promise();

        return status;
    } catch (err) {
        console.log(`Error: ${err}`);
        throw err;
    }
};

/**
 * Create a new task status
 * @param input - The input object that contains the data to be inserted into the table.
 * @returns The item that was created.
 */
const createTaskStatus = async (input) => {
    const taskID = uuidv4();

    const Item = {
        id: input.id || taskID,
        userID: input.userID || '',
        keyID: input.keyID || '',
        gateID: input.gateID || '',
        completed: input.completed || false,
    };

    await docClient
        .put({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)',
        })
        .promise();

    return Item;
};

/**
 * Create a new gate status
 * @param input - The input object that contains the data to be created.
 * @returns The item that was created.
 */
const createGateStatus = async (input) => {
    const gateStatusID = uuidv4();

    const Item = {
        id: input.id || gateStatusID,
        userID: input.userID || '',
        gateID: input.gateID || '',
        status: input.status || 'IN_PROGRESS',
    };

    await docClient
        .put({
            TableName: `GateStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
            ConditionExpression: 'attribute_not_exists(id)',
        })
        .promise();

    return Item;
};

/**
 * It returns the number of completed keys for a user
 * @param userID - The userID of the user who is requesting the keys.
 * @param gateID - The ID of the gate that the user is trying to access.
 * @returns The number of completed keys.
 */
const getCompletedKeys = async (userID, gateID) => {
    const { Items } = await docClient
        .scan({
            TableName: `TaskStatus-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            FilterExpression: 'gateID = :gateID and userID = :userID',
            ExpressionAttributeValues: {
                ':gateID': gateID,
                ':userID': userID,
            },
        })
        .promise();

    const tasks = Items || [];

    if (tasks.length === 0) {
        return 0;
    }

    let keys = tasks.map(async (ts) => {
        const { Items: [key] = [] } = await docClient
            .query({
                TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
                KeyConditionExpression: 'id = :keyID',
                ExpressionAttributeValues: {
                    ':keyID': ts.keyID,
                },
            })
            .promise();

        console.log(key.keys);

        return key.keys;
    });

    keys = await Promise.all(keys);

    return keys.reduce((sum, el) => sum + el, 0);
};

/**
 * It creates a new key
 * @param input - The input object that contains the information to create a key.
 * @returns The item that was created.
 */
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

/**
 * Update the key in the database
 * @param input - The input object that was passed to the mutation.
 * @returns The updated key.
 */
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
        updatedAt: new Date().toISOString(),
        task: input.task,
        createdAt: input.createdAt || new Date().toISOString(),
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

    console.log(Item);

    await docClient.delete({
        TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
        Key: {
            id: input.id
        }
    })

    await docClient
        .put({
            TableName: `Key-${API_GATEWAY_GRAPHQL}-${process.env.ENV}`,
            Item,
        })
        .promise();

    return Item;
};

/**
 * Given a userID and a keyID, verify that the user can complete the task
 * @param args - the arguments passed on the GraphQL mutation.
 * @param callback - a function that takes in the above parameters and returns a result.
 * @returns a `Promise` that resolves to an object containing the key verification solution.
 */
const verifyKey = async (args, callback) => {
    try {
        const { userID, keyID } = args;

        // 1. get key
        const key = await getKey(keyID);

        if (key.peopleLimit <= 0 && !key.unlimited) {
            return {
                __typename: 'Error',
                keyID,
                error: 'NO_MORE_SLOTS',
                msg: 'This task can no longer be completed.',
            };
        }

        // 2. get gate
        const gate = await getGate(key.gateID);

        // 2. get user
        const user = await getUser(userID);

        // 3. get gate status; if doesn't exist, create it
        let gateStatus = await getGateStatus(userID, key.gateID);
        if (!gateStatus) {
            gateStatus = await createGateStatus({
                userID,
                gateID: key.gateID,
            });
        }

        let keysDone = await getCompletedKeys(userID, key.gateID);

        return await callback({
            ...args,
            key,
            gate,
            user,
            gateStatus,
            keysDone,
        });
    } catch (error) {
        const { keyID } = args;

        console.log(error);

        return {
            __typename: 'Error',
            keyID,
            error: 'UNEXPECTED_ERROR',
            msg: error,
        };
    }
};

module.exports = {
    createKey,
    updateKey,
    createTaskStatus,
    markGateAsCompleted,
    verifyKey,
    getChain,
    getProvider,
    getCompletedKeys,
    removePeopleFromKey,
};
