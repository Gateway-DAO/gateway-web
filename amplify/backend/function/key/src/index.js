/* Amplify Params - DO NOT EDIT
	API_GATEWAY_CREDENTIALTABLE_ARN
	API_GATEWAY_CREDENTIALTABLE_NAME
	API_GATEWAY_DAOTABLE_ARN
	API_GATEWAY_DAOTABLE_NAME
	API_GATEWAY_GATESTATUSTABLE_ARN
	API_GATEWAY_GATESTATUSTABLE_NAME
	API_GATEWAY_GATETABLE_ARN
	API_GATEWAY_GATETABLE_NAME
	API_GATEWAY_GRAPHQLAPIENDPOINTOUTPUT
	API_GATEWAY_GRAPHQLAPIIDOUTPUT
	API_GATEWAY_GRAPHQLAPIKEYOUTPUT
	API_GATEWAY_KEYTABLE_ARN
	API_GATEWAY_KEYTABLE_NAME
	API_GATEWAY_MANUALTASKSUBMISSIONTABLE_ARN
	API_GATEWAY_MANUALTASKSUBMISSIONTABLE_NAME
	API_GATEWAY_TASKSTATUSTABLE_ARN
	API_GATEWAY_TASKSTATUSTABLE_NAME
	API_GATEWAY_USERTABLE_ARN
	API_GATEWAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const {
    createKey,
    updateKey: update,
    verifyKey,
    getChain,
    getProvider,
    removePeopleFromKey,
    markGateAsCompleted,
    createTaskStatus,
} = require('./helpers');

const resolvers = {
    Mutation: {
        /**
         * Key update
         */
        changeKey: async (ctx) => {
            return update(ctx.arguments.input);
        },

        /**
         * Key creation
         */
        createQuiz: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createMeetingCode: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createTokenHold: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createSnapshotGovernance: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createSelfVerify: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createContractInteraction: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        createManualTask: async (ctx) => {
            return createKey(ctx.arguments.input);
        },

        /**
         * Key verification
         */
        verifyMeetingCode: async (ctx) => {
            return await verifyKey(ctx.arguments, async (opts) => {
                const {
                    userID,
                    keyID,
                    meetingCode,
                    key,
                    gate,
                    gateStatus,
                    keysDone,
                } = opts;

                const meetingCodeDB = key.task.code;

                if (meetingCodeDB === meetingCode) {
                    // 4. create a task status for the user
                    const item = await createTaskStatus({
                        userID,
                        keyID,
                        gateID: key.gateID,
                        completed: 'DONE',
                    });

                    let completedGate = false;

                    if (!key.unlimited && key.peopleLimit > 0) {
                        await removePeopleFromKey(keyID);
                    }

                    if (
                        keysDone + key.keys >= gate.keysNumber &&
                        gateStatus.status !== 'COMPLETED'
                    ) {
                        // Gate completed, update gate status
                        await markGateAsCompleted(gateStatus.id, userID, gate);
                        completedGate = true;
                    }

                    return {
                        __typename: 'TaskAndGateResponse',
                        ...item,
                        completedGate,
                    };
                }

                return {
                    __typename: 'Error',
                    keyID,
                    error: 'INVALID_CODE',
                    msg: 'User inserted the wrong meeting code',
                };
            });
        },

        verifyHoldAToken: async (ctx) => {
            return await verifyKey(ctx.arguments, async (opts) => {
                const { userID, keyID, key, gate, user, gateStatus, keysDone } =
                    opts;

                const chainID = key.task.chainID;
                const tokenAddress = key.task.address;
                const amount = key.task.amount;
                const wallet = user.wallet;

                const provider = getProvider(chainID);

                const contract = new ethers.Contract(
                    tokenAddress,
                    abi,
                    provider
                );
                const balance = await contract.balanceOf(wallet);

                if (balance > amount) {
                    // The user holds the token, so task completed
                    const item = await createTaskStatus({
                        userID,
                        keyID,
                        gateID: key.gateID,
                        completed: 'DONE',
                    });

                    let completedGate = false;

                    if (!key.unlimited && key.peopleLimit > 0) {
                        await removePeopleFromKey(keyID);
                    }

                    if (
                        keysDone + key.keys >= gate.keysNumber &&
                        gateStatus.status !== 'COMPLETED'
                    ) {
                        // Gate completed, update gate status
                        await markGateAsCompleted(gateStatus.id, userID, gate);
                        completedGate = true;
                    }

                    return {
                        __typename: 'TaskAndGateResponse',
                        ...item,
                        completedGate,
                    };
                }

                return {
                    __typename: 'Error',
                    keyID,
                    error: 'NO_HOLD',
                    msg: "User doesn't hold token",
                };
            });
        },

        verifyContractInteraction: async (ctx) => {
            return await verifyKey(ctx.arguments, async (opts) => {
                const { userID, keyID, key, gate, user, gateStatus, keysDone } =
                    opts;

                // 4. check if user has interacted with the contract
                const chainID = key.task.chainID;
                const scAddress = key.task.address;
                const method = key.task.methodName || '';
                const wallet = user.wallet;

                // 4.1. connect to BitQuery
                const ENDPOINT = 'https://graphql.bitquery.io/';
                const QUERY = `
                    query getContractInteraction($address: String, $scAddress: String${
                        method && ', $method: String'
                    }) {
                        ethereum(network: ${getChain(chainID)}) {
                        smartContractCalls(
                            caller: {is: $address}
                            smartContractAddress: {is: $scAddress}
                            ${method && 'smartContractMethod: {is: $method}'}
                        ) {
                            smartContractMethod {
                                name
                                }
                            }
                        }
                    }
                `;

                const VARIABLES = {
                    address: wallet,
                    scAddress: scAddress,
                    ...(method && { method: method }),
                };

                const res = await axios({
                    url: ENDPOINT,
                    method: 'POST',
                    data: {
                        query: QUERY,
                        variables: VARIABLES,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'X-API-KEY': 'BQYhbCMXDs70kF2zYnfZD43DjNYW8vIT',
                    },
                });

                console.log(JSON.stringify(res.data));

                const interactions = res.data.data.ethereum.smartContractCalls;

                if (interactions.length > 0) {
                    // The user interacted with the contract, so task completed
                    const item = await createTaskStatus({
                        userID,
                        keyID,
                        gateID: key.gateID,
                        completed: 'DONE',
                    });

                    let completedGate = false;

                    if (!key.unlimited && key.peopleLimit > 0) {
                        await removePeopleFromKey(keyID);
                    }

                    if (
                        keysDone + key.keys >= gate.keysNumber &&
                        gateStatus.status !== 'COMPLETED'
                    ) {
                        // Gate completed, update gate status
                        await markGateAsCompleted(gateStatus.id, userID, gate);
                        completedGate = true;
                    }

                    return {
                        __typename: 'TaskAndGateResponse',
                        ...item,
                        completedGate,
                    };
                }

                return {
                    __typename: 'Error',
                    keyID,
                    error: 'NO_INTERACTION',
                    msg: "User didn't interact with the given method",
                };
            });
        },

        verifySnapshot: async (ctx) => {
            return await verifyKey(ctx.arguments, async (opts) => {
                const { userID, keyID, key, gate, user, gateStatus, keysDone } =
                    opts;

                const type = key.task.snapshotType;
                const spaceID = key.task.spaceID;
                const proposal = key.task.proposal;
                const wallet = user.wallet;

                // 4.1. connect to Snapshot API
                const ENDPOINT = 'https://hub.snapshot.org/graphql';
                const QUERY_PROPOSAL = `
                    query Proposals($space: String!, $wallet: String!) {
                        proposals(
                            first: 20,
                            skip: 0,
                            where: {
                                space: $space,
                                author: $wallet
                            },
                            orderBy: "created",
                            orderDirection: desc
                        ) {
                            id
                            title
                            body
                            choices
                            start
                            end
                            snapshot
                            state
                            author
                            space {
                                id
                                name
                            }
                        }
                    }
                `;
                const QUERY_VOTE = `
                    query Votes($proposal: String!, $wallet: String!) {
                        votes (
                            first: 1000
                            where: {
                                proposal: $proposal,
                                voter: $wallet
                            }
                        ) {
                            id
                            voter
                            created
                            choice
                            space {
                                id
                            }
                        }
                    }
                `;

                const res = await axios.get(ENDPOINT, {
                    data: JSON.stringify({
                        query: type === 'VOTE' ? QUERY_VOTE : QUERY_PROPOSAL,
                        variables: JSON.stringify({
                            wallet,
                            ...(type === 'VOTE'
                                ? { proposal }
                                : { space: spaceID }),
                        }),
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Node',
                    },
                });

                const interactions =
                    type === 'VOTE'
                        ? res.data.data.votes
                        : res.data.data.proposals;

                console.log(interactions);

                if (interactions.length > 0) {
                    // The user interacted with the contract, so task completed
                    const item = await createTaskStatus({
                        userID,
                        keyID,
                        gateID: key.gateID,
                        completed: 'DONE',
                    });

                    let completedGate = false;

                    if (!key.unlimited && key.peopleLimit > 0) {
                        await removePeopleFromKey(keyID);
                    }

                    if (
                        keysDone + key.keys >= gate.keysNumber &&
                        gateStatus.status !== 'COMPLETED'
                    ) {
                        // Gate completed, update gate status
                        await markGateAsCompleted(gateStatus.id, userID, gate);
                        completedGate = true;
                    }

                    return {
                        __typename: 'TaskAndGateResponse',
                        ...item,
                        completedGate,
                    };
                }

                return {
                    __typename: 'Error',
                    keyID,
                    error: 'NO_INTERACTION',
                    msg: "User didn't interact with the given method",
                };
            });
        },

        verifySelfVerify: async (ctx) => {
            return await verifyKey(ctx.arguments, async (opts) => {
                const { userID, keyID, key, gate, gateStatus, keysDone } = opts;

                if (key.task.type === 'SELF_VERIFY') {
                    const item = await createTaskStatus({
                        userID,
                        keyID,
                        gateID: key.gateID,
                        completed: 'DONE',
                    });

                    let completedGate = false;

                    if (!key.unlimited && key.peopleLimit > 0) {
                        await removePeopleFromKey(keyID);
                    }

                    if (
                        keysDone + key.keys >= gate.keysNumber &&
                        gateStatus.status !== 'COMPLETED'
                    ) {
                        // Gate completed, update gate status
                        await markGateAsCompleted(gateStatus.id, userID, gate);
                        completedGate = true;
                    }

                    return {
                        __typename: 'TaskAndGateResponse',
                        ...item,
                        completedGate,
                    };
                }

                return {
                    __typename: 'Error',
                    keyID,
                    error: 'WRONG_TASK',
                    msg: 'This is not a self-verifying task',
                };
            });
        },

        verifyQuiz: async (ctx) => {
            return await verifyKey(ctx.arguments, async (opts) => {
                const {
                    userID,
                    keyID,
                    questions,
                    key,
                    gate,
                    gateStatus,
                    keysDone,
                } = opts;

                let passed = 0;
                let taskQuestions = key.task.questions;

                questions.forEach((q) => {
                    let qID = q.questionIdx;
                    let answers = q.answers;

                    const answeredRight = taskQuestions[qID].options.every(
                        (ans, idx) => {
                            return (
                                (ans.correct && answers.includes(idx)) ||
                                (!ans.correct && !answers.includes(idx))
                            );
                        }
                    );

                    if (answeredRight) {
                        passed += 1;
                    }
                });

                console.log(
                    `Passed: ${passed}/${key.task.passedAt} question(s)`
                );

                if (passed >= key.task.passedAt) {
                    // The user passed the quiz, so task completed
                    const item = await createTaskStatus({
                        userID,
                        keyID,
                        gateID: key.gateID,
                        completed: 'DONE',
                    });

                    let completedGate = false;

                    if (!key.unlimited && key.peopleLimit > 0) {
                        await removePeopleFromKey(keyID);
                    }

                    if (
                        keysDone + key.keys >= gate.keysNumber &&
                        gateStatus.status !== 'COMPLETED'
                    ) {
                        // Gate completed, update gate status
                        await markGateAsCompleted(gateStatus.id, userID, gate);
                        completedGate = true;
                    }

                    return {
                        __typename: 'TaskAndGateResponse',
                        ...item,
                        completedGate,
                    };
                }

                return {
                    __typename: 'Error',
                    keyID,
                    error: 'NOT_ENOUGH_RIGHTS',
                    msg: "You didn't pass the quiz",
                };
            });
        },
    },
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const typeHandler = resolvers[event.typeName];
    if (typeHandler) {
        const resolver = typeHandler[event.fieldName];
        if (resolver) {
            return await resolver(event);
        }
    }
    throw new Error('Resolver not found.');
};
