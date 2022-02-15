import axios from 'axios';

const PINATA = {
    key: 'fc6144cc69bc1f4061b5',
    secret: 'f83edb3f5ac9cfff930880678ac72764af712779ce4ea8960883bb9f3dd95a99',
};

export const uploadFileToIPFS = async (form) => {
    const res = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS/',
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
        'https://api.pinata.cloud/pinning/pinJSONToIPFS/',
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
