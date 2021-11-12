"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySignedMessage = exports.getNonceToSign = void 0;
var functions = require("firebase-functions");
var corsLib = require("cors");
var ethers_1 = require("ethers");
var firebase_admin_1 = require("firebase-admin");
var admin = (0, firebase_admin_1.initializeApp)();
var cors = corsLib({
    origin: true,
});
var toHex = function (stringToConvert) {
    return stringToConvert
        .toString()
        .split('')
        .map(function (c) { return c.charCodeAt(0).toString(16).padStart(2, '0'); })
        .join('');
};
var generateRandomNonce = function () { return Math.round(Math.random() * 100000000); };
exports.getNonceToSign = functions.https.onCall(function (data, context) { return __awaiter(void 0, void 0, void 0, function () {
    var userDoc, existingNonce, generatedNonce, createdUser, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                return [4, admin
                        .firestore()
                        .collection('users')
                        .doc(data.address)
                        .get()];
            case 1:
                userDoc = _b.sent();
                if (!userDoc.exists) return [3, 2];
                existingNonce = (_a = userDoc.data()) === null || _a === void 0 ? void 0 : _a.nonce;
                return [2, { nonce: existingNonce }];
            case 2:
                generatedNonce = generateRandomNonce();
                return [4, admin.auth().createUser({
                        uid: data.address,
                    })];
            case 3:
                createdUser = _b.sent();
                return [4, admin
                        .firestore()
                        .collection('users')
                        .doc(createdUser.uid)
                        .set({
                        nonce: generatedNonce,
                    })];
            case 4:
                _b.sent();
                return [2, { nonce: generatedNonce }];
            case 5: return [3, 7];
            case 6:
                err_1 = _b.sent();
                console.log(err_1);
                throw new functions.https.HttpsError('internal', err_1.message);
            case 7: return [2];
        }
    });
}); });
exports.verifySignedMessage = functions.https.onCall(function (data, context) { return __awaiter(void 0, void 0, void 0, function () {
    var address, sig, userDocRef, userDoc, existingNonce, hash, pubKey, recoveredAddress, firebaseToken, err_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 9, , 10]);
                address = data.address;
                sig = data.signature;
                userDocRef = admin
                    .firestore()
                    .collection('users')
                    .doc(address);
                return [4, userDocRef.get()];
            case 1:
                userDoc = _b.sent();
                if (!userDoc.exists) return [3, 7];
                existingNonce = (_a = userDoc.data()) === null || _a === void 0 ? void 0 : _a.nonce;
                return [4, ethers_1.ethers.utils.keccak256(address)];
            case 2:
                hash = _b.sent();
                pubKey = ethers_1.ethers.utils.recoverPublicKey(ethers_1.ethers.utils.arrayify(ethers_1.ethers.utils.hashMessage(ethers_1.ethers.utils.arrayify(hash))), sig);
                recoveredAddress = ethers_1.ethers.utils.computeAddress(pubKey);
                if (!(recoveredAddress === address)) return [3, 5];
                return [4, userDocRef.update({
                        nonce: generateRandomNonce(),
                    })];
            case 3:
                _b.sent();
                return [4, admin
                        .auth()
                        .createCustomToken(address)];
            case 4:
                firebaseToken = _b.sent();
                return [2, { token: firebaseToken }];
            case 5: throw new functions.https.HttpsError('invalid-argument', "The signature couldn't be verified");
            case 6: return [3, 8];
            case 7: throw new functions.https.HttpsError('invalid-argument', 'User doc does not exist');
            case 8: return [3, 10];
            case 9:
                err_2 = _b.sent();
                console.log(err_2);
                throw new functions.https.HttpsError('internal', err_2);
            case 10: return [2];
        }
    });
}); });
