import { useState } from 'react';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const useFileUpload = () => {
	const [imgLoading, setImgLoading] = useState(false);

	const uploadFile = async (fileName, file, config = {}) => {
		setImgLoading(true);
		await Storage.put(fileName, file, config);
		const url = await Storage.get(fileName, {
			level: config.level || 'public',
		});
		setImgLoading(false);
		return url.split('?')[0].toString();
	};

	return {
		uploadFile,
		imgLoading,
	};
};

export default useFileUpload;
