// AWS/Amplify
import Amplify, { API, graphqlOperation } from "aws-amplify";

import awsconfig from "../aws-exports";
import { createDao, createUser } from "../graphql/mutations";

// Firebase
import { db } from '../api/firebase'
import { collection, doc, getDocs, query } from '@firebase/firestore'

import { v4 as uuidv4 } from 'uuid'

Amplify.configure(awsconfig);

const importUser = async (user) => {
    return await API.graphql(graphqlOperation(createUser, { input: user }))
}

const importDAO = async (DAO) => {
    return await API.graphql(graphqlOperation(createDao, { input: DAO }))
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
                .then(() => console.log(`"${dao.id}" migrated!`))
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