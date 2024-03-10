import { createCampaign } from '$api/campaigns';
import type { ApiError } from '$types/api';
import { createEffect } from 'effector';

export const createCampaignFx = createEffect<typeof createCampaign, ApiError>(createCampaign);

createCampaignFx.doneData.watch((result) => {
	console.log('campaign created', result);
});

createCampaignFx.failData.watch((error) => {
	console.log('error creating campaign', error);
});
