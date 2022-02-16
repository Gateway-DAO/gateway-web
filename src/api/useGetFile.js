import { useState } from 'react';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const useGetFile = () => {
    const [imgLoading, setImgLoading] = useState(false);

    const getFile = async (key, config = {}) => {
        setImgLoading(true);
        const url = await Storage.get(key, {
            level: config.level || 'public',
        });
        setImgLoading(false);
        return url.split('?')[0].toString();
    };

    return {
        getFile,
        imgLoading,
    };
};

export default useGetFile;
