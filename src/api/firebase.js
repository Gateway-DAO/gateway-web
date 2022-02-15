// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    connectStorageEmulator,
} from 'firebase/storage';
import {
    initializeAuth,
    browserLocalPersistence,
    connectAuthEmulator,
} from 'firebase/auth';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAmGWfQprCGFg1SVnJ2vDo9grt6UvlGSLo',
    authDomain: 'gateway-dao.firebaseapp.com',
    projectId: 'gateway-dao',
    storageBucket: 'gateway-dao.appspot.com',
    messagingSenderId: '236376430794',
    appId: '1:236376430794:web:d44b724e1e16f169ffbc33',
    measurementId: 'G-7RHKRGL9KX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
});
export const functions = getFunctions(app);
export const storage = getStorage(app);

if (process.env.REACT_APP_NODE_ENV === 'dev') {
    connectFirestoreEmulator(db, 'localhost', 8025);
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFunctionsEmulator(functions, 'localhost', 5001);
    connectStorageEmulator(storage, 'localhost', 9199);
}

export const uploadImage = async (uid, file) => {
    const id = uid;
    const metadata = {
        contentType: 'image/jpeg',
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'feeds/' + file.name + id);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                return downloadURL;
            });
        }
    );
};
