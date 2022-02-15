// AWS/Amplify
import Amplify, { API, graphqlOperation, Storage, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import {
    createDao,
    createUser,
    createChannel,
    updateUser as UPDATE_USER,
    createBounty,
    createTokenBenefit,
} from '../graphql/mutations';
import { getUserByAddress } from '../graphql/queries';

// Firebase
import { db } from '../api/firebase';
import { collection, getDocs, query, orderBy } from '@firebase/firestore';

import { v4 as uuidv4 } from 'uuid';

Amplify.configure({
    Auth: {
        identityPoolId: awsconfig.aws_cognito_identity_pool_id, //REQUIRED - Amazon Cognito Identity Pool ID
        region: awsconfig.aws_cognito_region, // REQUIRED - Amazon Cognito Region
        userPoolId: awsconfig.aws_user_pools_id, //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: awsconfig.aws_user_pools_web_client_id, //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        bucket: awsconfig.aws_user_files_s3_bucket, //REQUIRED -  Amazon S3 bucket
        region: awsconfig.aws_user_files_s3_bucket_region, //OPTIONAL -  Amazon service region
    },
});

const importUser = async (user) => {
    return await API.graphql(graphqlOperation(createUser, { input: user }));
};

const getUser = async (wallet) => {
    return await API.graphql(graphqlOperation(getUserByAddress, { wallet }));
};

const updateUser = async (user) => {
    return await API.graphql(graphqlOperation(UPDATE_USER, { input: user }));
};

const importDAO = async (DAO) => {
    return await API.graphql(graphqlOperation(createDao, { input: DAO }));
};

const importChannel = async (channel) => {
    return await API.graphql(
        graphqlOperation(createChannel, { input: channel })
    );
};

const importBounty = async (bounty) => {
    return await API.graphql(graphqlOperation(createBounty, { input: bounty }));
};

const importTokenBenefit = async (tb) => {
    return await API.graphql(
        graphqlOperation(createTokenBenefit, { input: tb })
    );
};

export const runDAOMigration = async () => {
    try {
        // 1. get DAOs
        const daos = await getDocs(collection(db, 'daos'));

        daos.forEach(async (dao) => {
            const data = dao.data();
            const socials = data.socials
                ? Object.keys(data.socials).map((social) => {
                      return { network: social, url: data.socials[social] };
                  })
                : null;

            const mutation = {
                id: uuidv4(),
                dao: dao.id,
                name: data.name,
                faq: data.faq,
                accomplishments: data.accomplishments,
                backgroundURL: data.backgroundURL,
                logoURL: data.logoURL,
                categories: data.categories,
                tags: data.tags,
                description: data.description,
                howToJoin: data.howToJoin,
                missionAndVision: data.missionAndVision,
                whatDoWeDo: data.WhatDoWeDo,
                upcomingHangouts: data.upcomingHangouts,
                tokenAddress: data.tokenAddress,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                ...(data.socials ? { socials } : {}),
            };

            const moveDAO = importDAO(mutation);
            console.log(`Doing: ${dao.id}...`);
            moveDAO
                .then(() => {
                    // Create channels for DAO
                    ['general', 'events', 'nfts', 'web3', 'defi'].forEach(
                        (channel) => {
                            importChannel({
                                id: uuidv4(),
                                name: channel,
                                daoID: mutation.id,
                            })
                                .then((res) => {
                                    console.log(
                                        `Created channel ${channel} for DAO ${mutation.dao}`
                                    );
                                })
                                .catch((err) => {
                                    console.log(
                                        `There was an error migrating channel ${channel} on DAO ${mutation.dao}`
                                    );
                                    console.log(err);
                                });
                        }
                    );

                    data.bounties.forEach((bounty) => {
                        importBounty({
                            id: uuidv4(),
                            daoID: mutation.id,
                            ...bounty,
                        })
                            .then((res) => {
                                console.log(
                                    `Created bounty for DAO ${mutation.dao}`
                                );
                            })
                            .catch((err) => {
                                console.log(
                                    `There was an error migrating bounty on DAO ${mutation.dao}`
                                );
                                console.log(err);
                            });
                    });

                    data.tokenBenefits.forEach((tb) => {
                        importTokenBenefit({
                            id: uuidv4(),
                            daoID: mutation.id,
                            ...tb,
                        })
                            .then((res) => {
                                console.log(
                                    `Created TB for DAO ${mutation.dao}`
                                );
                            })
                            .catch((err) => {
                                console.log(
                                    `There was an error migrating TB on DAO ${mutation.dao}`
                                );
                                console.log(err);
                            });
                    });
                })
                .catch((err) => {
                    console.error(`There was an error migrating ${dao.id}`);
                    console.error(err);
                });
        });
    } catch (err) {
        console.error(`Something happened here! - ${err}`);
    }
};

export const runUserMigration = async () => {
    try {
        // 1. get users
        const users = await getDocs(collection(db, 'users'));
        console.log(users.docs.length);
        const promises = users.docs.map(async (user) => {
            const data = user.data();
            const socials = data.socials
                ? Object.keys(data.socials).map((social) => {
                      return { network: social, url: data.socials[social] };
                  })
                : null;

            let pfpURL = '';

            if (data.pfp) {
                try {
                    const pfp = await (await fetch(data.pfp)).blob();

                    const ext = { 'image/jpeg': '.jpg', 'image/png': '.png' }[
                        pfp.type
                    ];

                    await Storage.put(
                        `users/${user.id}/profile${ext}`,
                        pfp,
                        {}
                    );

                    const url = await Storage.get(
                        `users/${user.id}/profile${ext}`,
                        {
                            level: 'public',
                        }
                    );

                    pfpURL = url.split('?')[0].toString();
                } catch (err) {
                    console.log(`[STORAGE]: ${err}`);
                    console.log(user);
                }
            }

            const mutation = {
                id: uuidv4(),
                name: data.name,
                init: data.init,
                bio: data.bio,
                daos_ids: data.daos,
                username: data.username,
                wallet: user.id,
                pfp: pfpURL,
                nonce: Math.floor(Math.random() * 1000000),
                ...(data.socials ? { socials } : {}),
            };

            await Auth.signUp({
                username: mutation.id,
                password: 'password',
                attributes: {
                    email: 'no-reply@mygateway.xyz',
                },
            });

            const moveUser = importUser(mutation);
            console.log(`Doing: ${user.id}...`);
            moveUser
                .then(() => console.log(`"${user.id}" migrated!`))
                .catch((err) => {
                    console.error(`There was an error migrating ${user.id}`);
                    console.error(err);
                });
        });

        await Promise.all(promises);
    } catch (err) {
        console.error(`Something happened here! - ${err}`);
    }
};

export const runUserPFPMigration = async () => {
    try {
        // 1. get users
        const users = await getDocs(
            query(collection(db, 'users'), orderBy('pfp'))
        );
        users.forEach(async (user) => {
            const data = user.data();
            const AWSUser = (await getUser(user.id)).data.getUserByAddress
                .items[0];

            let pfpKey = '';

            if (data.pfp) {
                try {
                    const pfp = await (await fetch(data.pfp)).blob();

                    const ext = { 'image/jpeg': '.jpg', 'image/png': '.png' }[
                        pfp.type
                    ];

                    const { key } = await Storage.put(
                        `users/${AWSUser.id}/profile${ext}`,
                        pfp
                    );

                    pfpKey = key;
                    console.log(`key: ${pfpKey}`);
                } catch (err) {
                    console.log(`[STORAGE]: ${err}`);
                    console.log(user);
                }
            }

            let pfp = pfpKey
                ? (await Storage.get(pfpKey)).split('?')[0].toString()
                : '';

            const mutation = {
                id: AWSUser.id,
                pfp,
            };

            const moveUser = updateUser(mutation);
            console.log(`Updating: ${AWSUser.wallet}...`);
            moveUser
                .then(() => console.log(`"${AWSUser.wallet}" pfp updated!`))
                .catch((err) => {
                    console.error(
                        `There was an error migrating ${AWSUser.wallet}`
                    );
                    console.error(err);
                });
        });
    } catch (err) {
        console.error(`Something happened here! - ${err}`);
    }
};
