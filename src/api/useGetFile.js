import { useState } from 'react';

const BUCKET_NAME = process.env.IMAGES_BUCKET;

export const useGetFile = () => {
    const [imgLoading, setImgLoading] = useState(false);

    const getFile = (key, config = {}) => {
        return `https://${BUCKET_NAME}.s3-us-east-1.amazonaws.com/${key}`;
    };

    return {
        getFile,
        imgLoading,
    };
};

export default useGetFile;
