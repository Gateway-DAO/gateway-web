import axios from 'axios';

const PINATA = {
    key: process.env.REACT_APP_PINATA_KEY,
    secret: process.env.REACT_APP_PINATA_SECRET
};

export const uploadFileToIPFS = async (form) => {
    const res = await axios.post(
        'https://gateway-dao.mypinata.cloud/pinning/pinFileToIPFS/',
        form,
        {
            headers: {
                //'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                pinata_api_key: PINATA.key,
                pinata_secret_api_key: PINATA.secret,
            },
        }
    );

    return res.data.IpfsHash;
};

export const uploadMetadataToIPFS = async (obj) => {
    const res = await axios.post(
        'https://gateway-dao.mypinata.cloud/pinning/pinJSONToIPFS/',
        obj,
        {
            headers: {
                //'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                pinata_api_key: PINATA.key,
                pinata_secret_api_key: PINATA.secret,
            },
        }
    );

    return res.data.IpfsHash;
};
