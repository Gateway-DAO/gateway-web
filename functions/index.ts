import * as functions from 'firebase-functions'
import * as corsLib from 'cors'
import { ethers } from 'ethers'
import * as admin from 'firebase-admin'

// The Firebase Admin SDK to access Firestore.
const app = admin.initializeApp()

const cors = corsLib({
    origin: true,
})

const toHex = (stringToConvert) => {
    return stringToConvert
        .toString()
        .split('')
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('')
}

/** Utility functions **/
const generateRandomNonce = () => Math.round(Math.random() * 100000000)

/*
export const getNonceToSign = functions.https.onRequest((request, response) =>
    cors(request, response, async () => {
        try {
            if (request.method !== 'POST') {
                return response.sendStatus(403)
            }
            if (!request.body.address) {
                return response.sendStatus(400)
            }

            // Get the user document for that address
            const userDoc = await admin
                .firestore()
                .collection('users')
                .doc(request.body.address)
                .get()

            if (userDoc.exists) {
                // The user document exists already, so just return the nonce
                const existingNonce = userDoc.data()?.nonce
                return response.status(200).json({ nonce: existingNonce })
            } else {
                // The user document does not exist, create it first
                const generatedNonce = generateRandomNonce()

                // Create an Auth user
                const createdUser = await admin.auth().createUser({
                    uid: request.body.address,
                })

                // Associate the nonce with that user
                await admin
                    .firestore()
                    .collection('users')
                    .doc(createdUser.uid)
                    .set({
                        nonce: generatedNonce,
                    })

                return response.status(200).json({ nonce: generatedNonce })
            }
        } catch (err) {
            console.log(err)
            return response.sendStatus(500)
        }
    })
)
*/

export const getNonceToSign = functions.https.onCall(async (data, context) => {
    try {
        // Get the user document for that address
        const userDoc = await app
            .firestore()
            .collection('users')
            .doc(data.address)
            .get()

        if (userDoc.exists) {
            // The user document exists already, so just return the nonce
            const existingNonce = userDoc.data()?.nonce
            return { nonce: existingNonce }
        } else {
            // The user document does not exist, create it first
            const generatedNonce = generateRandomNonce()

            // Create an Auth user
            const createdUser = await app.auth().createUser({
                uid: data.address,
            })

            // Associate the nonce with that user
            await app
                .firestore()
                .collection('users')
                .doc(createdUser.uid)
                .set({
                    nonce: generatedNonce,
                })

            return { nonce: generatedNonce }
        }
    } catch (err) {
        console.log(err)
        throw new functions.https.HttpsError('internal', err.message)
    }
})

/*
export const verifySignedMessage = functions.https.onRequest(
    (request, response) =>
        cors(request, response, async () => {
            try {
                if (request.method !== 'POST') {
                    return response.sendStatus(403)
                }
                if (!request.body.address || !request.body.signature) {
                    return response.sendStatus(400)
                }

                const address = request.body.address
                const sig = request.body.signature

                // Get the nonce for this address
                const userDocRef = admin
                    .firestore()
                    .collection('users')
                    .doc(address)

                const userDoc = await userDocRef.get()

                if (userDoc.exists) {
                    const existingNonce = userDoc.data()?.nonce

                    // Recover the address of the account used to create the given Ethereum signature.
                    const recoveredAddress = recoverPersonalSignature({
                        data: `0x${parseInt(existingNonce, 16)}`,
                        signature: sig,
                    })

                    // See if that matches the address the user is claiming the signature is from
                    if (recoveredAddress === address) {
                        // The signature was verified - update the nonce to prevent replay attacks
                        await userDocRef.update({
                            nonce: generateRandomNonce(),
                        })

                        // Create a custom token for the specified address
                        const firebaseToken = await admin
                            .auth()
                            .createCustomToken(address)

                        // Return the token
                        return response
                            .status(200)
                            .json({ token: firebaseToken })
                    } else {
                        // The signature could not be verified
                        return response.sendStatus(401)
                    }
                } else {
                    console.log('User doc does not exist')
                    return response.sendStatus(500)
                }
            } catch (err) {
                console.log(err)
                return response.sendStatus(500)
            }
        })
)
*/

export const verifySignedMessage = functions.https.onCall(
    async (data, context) => {
        try {
            const address = data.address
            const sig = data.signature

            // Get the nonce for this address
            const userDocRef = app
                .firestore()
                .collection('users')
                .doc(address)

            const userDoc = await userDocRef.get()

            if (userDoc.exists) {
                const existingNonce = userDoc.data()?.nonce

                const hash = await ethers.utils.keccak256(address)

                // Recover the address of the account used to create the given Ethereum signature.
                let pubKey = ethers.utils.recoverPublicKey(
                    ethers.utils.arrayify(
                        ethers.utils.hashMessage(ethers.utils.arrayify(hash))
                    ),
                    sig
                )
                let recoveredAddress = ethers.utils.computeAddress(pubKey)

                // See if that matches the address the user is claiming the signature is from
                if (recoveredAddress === address) {
                    // The signature was verified - update the nonce to prevent replay attacks
                    await userDocRef.update({
                        nonce: generateRandomNonce(),
                    })

                    // Create a custom token for the specified address
                    const firebaseToken = await app
                        .auth()
                        .createCustomToken(address)

                    // Return the token
                    return { token: firebaseToken }
                } else {
                    // The signature could not be verified
                    throw new functions.https.HttpsError(
                        'invalid-argument',
                        "The signature couldn't be verified"
                    )
                }
            } else {
                throw new functions.https.HttpsError(
                    'invalid-argument',
                    'User doc does not exist'
                )
            }
        } catch (err) {
            console.log(err)
            throw new functions.https.HttpsError('internal', err)
        }
    }
)
