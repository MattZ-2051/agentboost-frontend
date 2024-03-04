import { patch, post } from '..';
import type { Listing } from '$types/models';
import type { CreateListingGmc } from './types';

export const createListingGmc = async ({
	address,
	bed,
	bath,
	squareFt,
	propertyDescription,
	location,
	listingId,
	fullName,
	email,
	phoneNumber,
	brandDescription
}: CreateListingGmc) => {
	const response = await post<{ data: Listing }>(`/gmc/create`, {
		address,
		bed,
		bath,
		squareFt,
		propertyDescription,
		location,
		listingId,
		fullName,
		email,
		phoneNumber,
		brandDescription
	});
	return response.data;
};

export const addGmcToCalender = async ({
	startDate,
	listingId
}: {
	startDate: string;
	listingId: string;
}) => {
	const response = await patch<{ data: Listing }>('/addToCalender', {
		startDate,
		listingId
	});

	return response.data;
};
