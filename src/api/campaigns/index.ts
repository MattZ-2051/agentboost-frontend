import { post } from '$api';
import type { Campaign } from '$types/models';

export const createCampaign = async (
	newCampaignData: Campaign,
	userId: number
): Promise<Campaign> => {
	const response = await post<{ data: any }>('/campaign/create', {
		...newCampaignData,
		userId
	});
	return response.data;
};
