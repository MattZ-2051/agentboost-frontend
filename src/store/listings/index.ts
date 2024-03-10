import { createEffect, createEvent, createStore } from 'effector';
import {
	createListingDescription,
	createListing,
	getListing,
	createListingCma,
	deleteListing
} from '$api/listings';
import { createListingGmc } from '$api/gmc';
import type { ApiError } from '$types/api';
import type { Listing, NewListing } from '$types/models';
import { $user, getUserProfileFx } from '$store/user';
import { goto } from '$app/navigation';

export const updateNewListingData = createEvent<NewListing | 'pending' | null>();
const updateListingGmcs = createEvent<Listing['gmcs']>();
const updateListingCmas = createEvent<Listing>();

const updateListingData = createEvent<Listing>();
export const getListingFx = createEffect<typeof getListing, ApiError>(getListing);

export const createListingDescriptionFx = createEffect<typeof createListingDescription, ApiError>(
	createListingDescription
);

export const createListingFx = createEffect<typeof createListing, ApiError>(createListing);

export const createListingGmcFx = createEffect<typeof createListingGmc, ApiError>(createListingGmc);

export const createListingCmaFx = createEffect<typeof createListingCma, ApiError>(createListingCma);

export const deleteListingFx = createEffect<typeof deleteListing, ApiError>(deleteListing);

deleteListingFx.doneData.watch(async () => {
	await getUserProfileFx();
});
createListingGmcFx.doneData.watch((result) => {
	updateListingGmcs(result.gmcs);
});

createListingGmcFx.failData.watch((error) => {
	console.log('lising gmc error', error);
});

createListingCmaFx.doneData.watch((result) => {
	updateListingCmas(result);
});

createListingCmaFx.failData.watch((error) => {
	console.log('listing cma fail', error);
});

getListingFx.doneData.watch((result) => {
	const user = $user.getState();

	if (result.cma) {
		createListingCmaFx({
			listingId: result.id?.toString() || '0',
			address: result.streetAddress,
			radius: 2,
			status: 'Active'
		});
	}

	if (result.gmcs?.length === 0 && user) {
		// createListingGmcFx({
		// 	listingId: result.id?.toString() || '0',
		// 	address: result.streetAddress,
		// 	bed: result.bedrooms,
		// 	bath: result.bathrooms,
		// 	squareFt: result.squareFt,
		// 	propertyDescription: result.propertyDescription,
		// 	location: 'location',
		// 	email: user.email,
		// 	phoneNumber: user.phoneNumber,
		// 	brandDescription: user.brandDescription,
		// 	fullName: user.fullName
		// });
	}

	updateListingData(result);
});

getListingFx.failData.watch(() => {
	// goto('/home');
});

createListingFx.doneData.watch(async (result) => {
	await updateListingData(result);
	await getUserProfileFx();
	await goto(`/listings/${result.id}`);
});

createListingFx.failData.watch(() => {});

createListingDescriptionFx.doneData.watch((result) => {
	updateNewListingData({
		propertyDescription: result.text,
		zillowInfo: result.zillowInfo
	});
});

createListingDescriptionFx.failData.watch(() => {});

export const $newListing = createStore<NewListing | null | 'pending'>(null).on(
	updateNewListingData,
	(prevState, payload) => payload
);

export const $listing = createStore<Listing | null>(null)
	.on(updateListingData, (prevState, payload) => payload)
	.on(updateListingGmcs, (prevState, payload) => {
		return prevState && payload && { ...prevState, gmcs: payload };
	})
	.on(updateListingCmas, (prevState, payload) => {
		return prevState && payload && { ...prevState, cma: payload.cma };
	});
