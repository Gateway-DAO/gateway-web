import { useState } from 'react';
import axios from 'axios';

/**
 * It takes a file name, file, and type, converts the file to base64, and then uploads it to the cloud
 */
export const useFile = () => {
	const [imgLoading, setImgLoading] = useState(false);

	const uploadFile = async (file, path = '/') => {
		const formData = new FormData();
		formData.append('files', file);

		const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/storage/upload`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'x-path': path
			}
		})

		return res.data[0];
	};

	return {
		uploadFile,
		imgLoading,
	};
};

export default useFile;
