// AWS/Amplify
import Amplify, { API, graphqlOperation, Storage, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { createDao, createUser, createComment, createPost, createChannel, updateDao } from "../graphql/mutations";

// Firebase
import { db, storage } from '../api/firebase'
import { collection, doc, getDocs, query } from '@firebase/firestore'
import { getDownloadURL, ref } from "firebase/storage";

import { v4 as uuidv4 } from 'uuid'

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
    }
});

const importUser = async (user) => {
    return await API.graphql(graphqlOperation(createUser, { input: user }))
}

const importDAO = async (DAO) => {
    return await API.graphql(graphqlOperation(createDao, { input: DAO }))
}

const importChannel = async (channel) => {
    return await API.graphql(graphqlOperation(createChannel, { input: channel }))
}

const importPost = async (post) => {
    return await API.graphql(graphqlOperation(createPost, { input: post }))
}

const importComment = async (comment) => {
    return await API.graphql(graphqlOperation(createComment, { input: comment }))
}

export const runDAOMigration = async () => {
    try {
        // 1. get DAOs
        const daos = await getDocs(collection(db, "daos"))

        daos.forEach(async dao => {
            const data = dao.data()
            const socials = data.socials ? Object.keys(data.socials).map(social => {
                return { network: social, url: data.socials[social] };
            }) : null;

            const mutation = {
                id: uuidv4(),
                dao: dao.id,
                name: data.name,
                faq: data.faq,
                accomplishments: data.accomplishments,
                backgroundURL: data.backgroundURL,
                logoURL: data.logoURL,
                bounties: data.bounties,
                categories: data.categories,
                tags: data.tags,
                description: data.description,
                howToJoin: data.howToJoin,
                missionAndVision: data.missionAndVision,
                whatDoWeDo: data.WhatDoWeDo,
                tokenBenefits: data.tokenBenefits,
                upcomingHangouts: data.upcomingHangouts,
                tokenAddress: data.tokenAddress,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                ...(data.socials ? { socials } : {})
            }
            
            const moveDAO = importDAO(mutation)
            console.log(`Doing: ${dao.id}...`)
            moveDAO
                .then(() => {
                    // Create channels for DAO
                    ["general", "events", "nfts", "web3", "defi"].forEach(channel => {
                        importChannel({
                            id: uuidv4(),
                            name: channel,
                            daoID: mutation.id
                        })
                            .then(res => {
                                console.log(`Created channel ${channel} for DAO ${mutation.dao}`)
                            })
                            .catch(err => {
                                console.log(`There was an error migrating channel ${channel} on DAO ${mutation.dao}`)
                                console.log(err)
                            })
                    })
                })
                .catch(err => {
                    console.error(`There was an error migrating ${dao.id}`)
                    console.error(err)
                })
        })
    }
    catch (err) {
        console.error(`Something happened here! - ${err}`)
    }
}

export const runUserMigration = async () => {
    try {
        // 1. get users
        const users = await getDocs(collection(db, "users"))
        console.log(users.docs.length)
        users.forEach(async user => {
            const data = user.data()
            const socials = data.socials ? Object.keys(data.socials).map(social => {
                return { network: social, url: data.socials[social] };
            }) : null;

            let pfpKey = ""

            if (data.pfp) {
                try {
                    const pfp = await (await fetch(data.pfp)).blob()

                    const ext = {"image/jpeg": ".jpg", "image/png": ".png"}[pfp.type]

                    const { key } = await Storage.put(`users/${user.id}/profile${ext}`, pfp)

                    pfpKey = key
                    console.log(`key: ${pfpKey}`)
                }
                catch (err) {
                    console.log(`[STORAGE]: ${err}`)
                    console.log(user)
                }
            }

            const mutation = {
                id: uuidv4(),
                name: data.name,
                init: data.init,
                bio: data.bio,
                daos_ids: data.daos,
                nonce: data.nonce,
                username: data.username,
                wallet: user.id,
                pfp: pfpKey ? `https://${awsconfig.aws_user_files_s3_bucket}.s3.${awsconfig.aws_user_files_s3_bucket_region}.amazonaws.com/${pfpKey}` : "",
                ...(data.socials ? { socials } : {})
            }

            await Auth
                .signUp({
                    username: mutation.id,
                    password: 'password',
                    attributes: {
                        email: 'no-reply@mygateway.xyz'
                    }
                })

            const moveUser = importUser(mutation)
            console.log(`Doing: ${user.id}...`)
            moveUser
                .then(() => console.log(`"${user.id}" migrated!`))
                .catch(err => {
                    console.error(`There was an error migrating ${user.id}`)
                    console.error(err)
                })
        })
    }
    catch (err) {
        console.error(`Something happened here! - ${err}`)
    }
}