import { patch, post } from '..';
import type { AuthTokens } from '$types/api';
import type { AuthData } from './types';

export const login = async ({ email, password }: AuthData) => {
	const response = await post<{
		data: AuthTokens;
	}>('/auth/login', {
		email,
		password
	});
	return response.data;
};

export const signup = async ({ email, password, fullName }: AuthData) => {
	const response = await post<{
		data: AuthTokens;
	}>('/auth/signup', {
		email,
		password,
		fullName
	});
	return response.data;
};

export const logout = async ({ userId }: { userId: string }) => {
	const response = await post<{
		data: AuthTokens;
	}>('/auth/logout', {
		userId
	});
	return response.data;
};

const baseURL = import.meta.env?.VITE_API_URL;

export const googleSignin = async () => {
	//TODO: Replace with api url env variable
	window.open(`${baseURL}/auth/google-login`, '_self');
};

export const refreshTokens = async ({ refreshToken }: { refreshToken: string }) => {
	const response = await post<{ data: AuthTokens }>('/auth/refresh', {
		refreshToken
	});
	return response.data;
};

export const resetPassword = async ({
	email,
	currentPassword,
	newPassword
}: {
	email: string;
	currentPassword: string;
	newPassword: string;
}) => {
	const response = await patch<{
		data: void;
	}>('/auth/password/reset', {
		email,
		currentPassword,
		newPassword
	});

	return response.data;
};
