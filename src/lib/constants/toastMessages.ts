import type { ToastSettings } from '@skeletonlabs/skeleton';

export const errorMessages: Record<string, ToastSettings> = {
	terms: {
		message: 'Please read and accept the terms of service.',
		background: 'variant-filled-error'
	},
	support: {
		message: 'Something went wrong please try again or contact support@agentboost.ai',
		background: 'variant-filled-error'
	}
};
