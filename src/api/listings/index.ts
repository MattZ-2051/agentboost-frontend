import { get, post } from '..';
import type { Listing, ZillowPropertyInfo } from '$types/models';

export const createListingDescription = async ({
	address,
	keyInfo
}: {
	address: string;
	keyInfo: string;
}): Promise<{
	text: string;
	zillowInfo: ZillowPropertyInfo;
}> => {
	const response = await post<{
		data: { text: string; zillowInfo: ZillowPropertyInfo };
	}>('/listings/create/property-description', {
		address,
		keyInfo
	});
	return response.data;
};

export const createListing = async (newListingData: Listing): Promise<Listing> => {
	const response = await post<{ data: Listing }>('/listings/create', {
		...newListingData
	});
	return response.data;
};

export const createListingCma = async ({
	listingId,
	address,
	radius,
	status
}: {
	listingId: string;
	address: string;
	radius: number;
	status?: 'Active' | 'Inactive';
}) => {
	const response = await post<{ data: Listing }>(`/listings/generate-cma/${listingId}`, {
		address,
		radius,
		status
	});
	return response.data;
};

export const getListing = async (id: string): Promise<Listing> => {
	const response = await get<{ data: Listing }>(`/listings/${id}`);
	return response.data;
};
