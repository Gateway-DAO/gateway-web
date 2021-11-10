const functions = require('firebase-functions')

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin')
admin.initializeApp()

/** Utility functions **/
const generateRandomNonce = () => parseInt(Math.random() * 1000000)

exports.generateRandomNonce = functions.https.onRequest((req, res) => {
    res.json({ nonce: generateRandomNonce() })
})

exports.createAccount = functions.https.onRequest(async (req, res) => {
    try {
        await admin.firestore().collection('users').doc(req.query.address).set({
            address: req.query.address,
            nonce: generateRandomNonce(),
            username: '',
        })

        res.status(200).json({
            msg: `New account created with ID ${req.query.address}`,
            success: true,
        })
    } catch (err) {
        res.status(400).json({
            msg: err.message,
            success: false,
        })
    }
})

exports.generateNonceForAccount = functions.https.onRequest(
    async (req, res) => {
        try {
            await admin
                .firestore()
                .collection('users')
                .doc(req.query.address)
                .update({
                    nonce: generateRandomNonce(),
                })

            res.status(200).json({
                msg: `New nonce generated for account ${req.query.address}`,
                success: true,
            })
        } catch (err) {
            res.status(400).json({
                msg: err.message,
                success: false,
            })
        }
    }
)
