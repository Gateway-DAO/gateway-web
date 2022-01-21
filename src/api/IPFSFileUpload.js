import axios from 'axios'

const PINATA = {
    key: '11d3a4e57b44e21eb0e7',
    secret: 'c7f24d20465fcab4e236b157038eadef14d58e20fdac1a847d091fd170b5dfe9',
}

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
    )

    return res.data.IpfsHash
}
