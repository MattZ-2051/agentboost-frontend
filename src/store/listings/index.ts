import { createEffect, createEvent, createStore } from 'effector';
import {
  getPropertyListingDescription,
  createListing,
  getListing,
} from '../../api/listings';
import type { ApiError } from '../../types/api';
import { toastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';
import type { Listing, NewListing } from '../../types/models';
import { goto } from '$app/navigation';

const updateNewListingData = createEvent<NewListing>();

const updateListingData = createEvent<Listing>();

export const getListingFx = createEffect<typeof getListing, ApiError>(
  getListing,
);

export const getPropertyListingDescriptionFx = createEffect<
  typeof getPropertyListingDescription,
  ApiError
>(getPropertyListingDescription);

export const createListingFx = createEffect<typeof createListing, ApiError>(
  createListing,
);

getListingFx.doneData.watch((result) => {
  updateListingData(result);
});

getListingFx.failData.watch((error) => {
  const message = error.response?.data?.message;
  const toast: ToastSettings = {
    message: message ? message : 'Listing not found',
    background: 'variant-filled-error',
  };
  toastStore.trigger(toast);
  goto('/home');
});

createListingFx.doneData.watch((result) => {
  const toast: ToastSettings = {
    message: `Listing for ${result.address} created!`,
    background: 'variant-filled-success',
  };
  toastStore.trigger(toast);
  goto(`/listings/${result.id}`);
});

createListingFx.failData.watch((error) => {
  const message = error.response?.data?.message;
  const toast: ToastSettings = {
    message: message ? message : 'Signup failed',
    background: 'variant-filled-error',
  };
  toastStore.trigger(toast);
});

getPropertyListingDescriptionFx.doneData.watch((result) => {
  updateNewListingData({
    propertyDescription: result?.choices[0]?.content,
    realtyMoleData: result.realtyMoleData[0],
  });
});

getPropertyListingDescriptionFx.failData.watch((error) => {
  const message = error.response?.data?.message;
  const toast: ToastSettings = {
    message: message ? message : 'Error generating Listing description',
    background: 'variant-filled-error',
  };
  toastStore.trigger(toast);
});

export const $newListing = createStore<NewListing | null>(null).on(
  updateNewListingData,
  (prevState, payload) => payload,
);

export const $listing = createStore<Listing | null>(null).on(
  updateListingData,
  (prevState, payload) => payload,
);
