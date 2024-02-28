import { post } from '$api';

export const uploadFileToBucket = async ({
	file,
	filePath
}: {
	file: File;
	filePath: string;
}): Promise<any> => {
	const response = await post<{ data: any }>('/google/bucket/upload', {
		file,
		filePath
	});
	return response.data;
};
