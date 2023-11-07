import { createEffect, createEvent, createStore } from 'effector';
import {
	getPropertyListingDescription,
	createListing,
	getListing,
	createListingCma
} from '$api/listings';
import { createListingGmc } from '$api/gmc';
import type { ApiError } from '$types/api';
import { getToastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';
import type { Listing, NewListing } from '$types/models';
import { goto } from '$app/navigation';
import { getUserProfileFx } from '$store/user';

const toastStore = getToastStore();
const updateNewListingData = createEvent<NewListing>();
const updateListingGmcs = createEvent<Listing['gmcs']>();
const updateListingCmas = createEvent<Listing>();

const updateListingData = createEvent<Listing>();
export const getListingFx = createEffect<typeof getListing, ApiError>(getListing);

export const getPropertyListingDescriptionFx = createEffect<
	typeof getPropertyListingDescription,
	ApiError
>(getPropertyListingDescription);

export const createListingFx = createEffect<typeof createListing, ApiError>(createListing);

export const createListingGmcFx = createEffect<typeof createListingGmc, ApiError>(createListingGmc);

export const createListingCmaFx = createEffect<typeof createListingCma, ApiError>(createListingCma);

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
	if (result.cma?.length === 0) {
		createListingCmaFx({
			listingId: result.id?.toString() || '0',
			address: result.address,
			radius: 2,
			status: 'Active'
		});
	}

	if (result.gmcs?.length === 0) {
		createListingGmcFx({
			listingId: result.id?.toString() || '0',
			address: result.formattedAddress,
			bed: result.bedrooms,
			bath: result.bathrooms,
			squareFt: result.bathrooms,
			propertyDescription: result.propertyDescription,
			location: 'location'
		});
	}

	updateListingData(result);
});

getListingFx.failData.watch((error) => {
	const message = error.response?.data?.message;
	const toast: ToastSettings = {
		message: message ? message : 'Listing not found',
		background: 'variant-filled-error'
	};
	toastStore.trigger(toast);
	goto('/home');
});

createListingFx.doneData.watch((result) => {
	const toast: ToastSettings = {
		message: `Listing for ${result.address} created!`,
		background: 'variant-filled-success'
	};
	toastStore.trigger(toast);
	updateListingData(result);
	getUserProfileFx();
	goto(`/listings/${result.id}`);
});

createListingFx.failData.watch((error) => {
	const message = error.response?.data?.message;
	const toast: ToastSettings = {
		message: message ? message : 'Signup failed',
		background: 'variant-filled-error'
	};
	toastStore.trigger(toast);
});

getPropertyListingDescriptionFx.doneData.watch((result) => {
	console.log('result', result);
	updateNewListingData({
		propertyDescription: result?.choices[0]?.content,
		zillowInfo: result.zillowInfo
	});
});

getPropertyListingDescriptionFx.failData.watch((error) => {
	const message = error.response?.data?.message;
	const toast: ToastSettings = {
		message: message ? message : 'Error generating Listing description',
		background: 'variant-filled-error'
	};
	toastStore.trigger(toast);
});

export const $newListing = createStore<NewListing | null>(null).on(
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
