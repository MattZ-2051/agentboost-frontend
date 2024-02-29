import { postForm } from '$api';

export const uploadFileToBucket = async (data: FormData): Promise<string> => {
	const response = await postForm('/google/bucket/upload', data);
	return response.data;
};
