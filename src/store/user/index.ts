import { login, logout, signup } from '$api/auth';
import { getUserProfile, updateUserProfile } from '$api/user';
import { createEffect, createEvent, createStore } from 'effector';
import { decodeJwtToken, handleUserTokenData } from '$utils';
import type { User } from '$types/models';
import type { ApiError } from '$types/api';
import { toastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';
import { goto } from '$app/navigation';

export const updateUser = createEvent<User | null>();
export const loginFx = createEffect<typeof login, ApiError>(login);
export const signUpFx = createEffect<typeof signup, ApiError>(signup);
export const logoutFx = createEffect<typeof logout, ApiError>(logout);
export const getUserProfileFx = createEffect<typeof getUserProfile, ApiError>(
  getUserProfile,
);
export const updateUserProfileFx = createEffect<
  typeof updateUserProfile,
  ApiError
>(updateUserProfile);

getUserProfileFx.doneData.watch((result) => {
  updateUser(result);
  console.log('here', result);
});

getUserProfileFx.failData.watch((error) => {
  const statusCode = error?.response?.status;
  if (statusCode === 401) {
    // refreshTokens({
    //   refreshToken: user.getState()?.authTokens?.refresh || '',
    // });
    localStorage.removeItem('authTokens');
  } else {
    localStorage.removeItem('authTokens');
  }
});

signUpFx.doneData.watch(async (result) => {
  handleUserTokenData(result);
  const jwtData = decodeJwtToken(result.access);
  updateUser({
    id: jwtData.sub,
    email: jwtData.email,
    authTokens: result,
  });
  const toast: ToastSettings = {
    message: `Successfully signup up with email ${jwtData.email}`,
    background: 'variant-filled-success',
  };
  toastStore.trigger(toast);
  await goto('/home');
});

signUpFx.failData.watch((error) => {
  const message = error.response?.data?.message;
  const toast: ToastSettings = {
    message: message ? message : 'Signup failed',
    background: 'variant-filled-error',
  };
  toastStore.trigger(toast);
});

loginFx.doneData.watch(async (result) => {
  handleUserTokenData(result);
  const jwtData = decodeJwtToken(result.access);
  updateUser({
    id: jwtData.sub,
    email: jwtData.email,
    authTokens: result,
  });
  await goto('/home');
  const toast: ToastSettings = {
    message: `Successfully Logged In! Welcome back ${jwtData.email}`,
    background: 'variant-filled-success',
  };
  toastStore.trigger(toast);
});

loginFx.failData.watch((error) => {
  const message = error.response?.data?.message;
  const toast: ToastSettings = {
    message: message ? message : 'Login failed',
    background: 'variant-filled-error',
  };
  toastStore.trigger(toast);
});

logoutFx.doneData.watch(async () => {
  updateUser(null);
  localStorage.removeItem('authTokens');
  await goto('/');
  const toast: ToastSettings = {
    message: 'Successfully logged out',
    background: 'variant-filled-success',
  };
  toastStore.trigger(toast);
});

logoutFx.failData.watch((error) => {
  const message = error.response?.data?.message;
  const toast: ToastSettings = {
    message: message ? message : 'Logout failed',
    background: 'variant-filled-error',
  };
  toastStore.trigger(toast);
});

updateUserProfileFx.doneData.watch((response) => {
  console.log('profile updated', response);
});

updateUserProfileFx.failData.watch((error) => {
  console.log('error in profile update', error);
});

export const $user = createStore<User | null>(null).on(
  updateUser,
  (prevState, payload) => {
    if (payload) return { ...prevState, ...payload };
  },
);
