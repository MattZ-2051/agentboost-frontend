import { login, logout, resetPassword, signup } from '$api/auth';
import { getUserProfile, restoreUserSession, updateUserProfile } from '$api/user';
import { createEffect, createEvent, createStore } from 'effector';
import { decodeJwtToken, handleUserTokenData } from '$utils';
import type { User } from '$types/models';
import type { ApiError } from '$types/api';
import { goto } from '$app/navigation';

export const updateUser = createEvent<User | null>();

export const getUserProfileFx = createEffect<typeof getUserProfile, ApiError>(getUserProfile);
export const updateUserProfileFx = createEffect<typeof updateUserProfile, ApiError>(
	updateUserProfile
);
export const restoreUserSessionFx = createEffect<typeof restoreUserSession, ApiError>(
	restoreUserSession
);
export const loginFx = createEffect<typeof login, ApiError>(login);
export const signUpFx = createEffect<typeof signup, ApiError>(signup);
export const logoutFx = createEffect<typeof logout, ApiError>(logout);
export const resetPasswordFx = createEffect<typeof resetPassword, ApiError>(resetPassword);

restoreUserSessionFx.doneData.watch((result) => {
	updateUser(result);
});

restoreUserSessionFx.failData.watch((error) => {
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
getUserProfileFx.doneData.watch((result) => {
	updateUser(result);
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
	const newUserData: User = {
		id: jwtData.sub,
		email: jwtData.email,
		fullName: jwtData.fullName,
		profileImg: '',
		businessLogo: '',
		authTokens: result,
		brokerage: '',
		brandDescription: '',
		areaOfExpertise: '',
		x: false,
		instagram: false,
		facebook: false,
		campaigns: [],
		listings: [],
		buyers: []
	};
	updateUser(newUserData);
	await goto('/dashboard');
});

signUpFx.failData.watch((error) => {
	return error;
});

loginFx.doneData.watch(async (result) => {
	handleUserTokenData(result);
	const jwtData = decodeJwtToken(result.access);
	const newUserData: User = {
		id: jwtData.sub,
		email: jwtData.email,
		fullName: jwtData.fullName,
		profileImg: '',
		businessLogo: '',
		authTokens: result,
		brandDescription: '',
		brokerage: '',
		areaOfExpertise: '',
		x: false,
		instagram: false,
		facebook: false,
		campaigns: [],
		listings: [],
		buyers: []
	};
	updateUser(newUserData);
	await goto('/dashboard');
});

loginFx.failData.watch((error) => {
	return error;
});

logoutFx.doneData.watch(async () => {
	updateUser(null);
	if (localStorage) localStorage.removeItem('authTokens');
	await goto('/');
});

logoutFx.failData.watch(() => {});

updateUserProfileFx.doneData.watch((response) => {
	updateUser(response);
});

updateUserProfileFx.failData.watch((error) => {
	console.log('error in profile update', error);
	return error;
});

export const $user = createStore<User | null>(null).on(updateUser, (prevState, payload) => {
	return payload ? { ...prevState, ...payload } : null;
});
