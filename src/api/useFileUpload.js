import { useState } from 'react';
import { convertToBase64 } from '../utils/functions';

const AWS = require('aws-sdk');
const BUCKET_NAME = process.env.IMAGES_BUCKET;
const s3 = new AWS.S3({});
 
const config = {
    bucketName: 'myBucket',
    // dirName: 'media',
    region: 'us-east-1',
    // accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
    // secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
}

export const useFileUpload = () => {
	const [imgLoading, setImgLoading] = useState(false);

	const uploadFile = async (fileName, file, type) => {
		const base64File = await convertToBase64(file);

		const params = {
			Bucket: `${BUCKET_NAME}/images`,
			Key: fileName,
			Body: base64File,
			ContentType: type
		};

		setImgLoading(true);
		const data = await s3.upload(params).promise();
		setImgLoading(false);
		return data.location;
	};

	return {
		uploadFile,
		imgLoading,
	};
};

export default useFileUpload;
