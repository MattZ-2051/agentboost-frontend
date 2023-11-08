import { get } from '$api';

export const getPropertyData = async ({ address }: { address: string }): Promise<any> => {
	const response = await get<{ data: any }>(`/realty/properties/${address}`);
	return response.data;
};
