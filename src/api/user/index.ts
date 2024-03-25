import { get, patch, getWithoutHeader } from '..';
import type { User } from '$types/models';
import type { UpdateUserData, UpdateUserSocial } from './types';

export const getUserProfile = async () => {
	const response = await get<{ data: User }>('/users/profile');
	return response.data;
};

export const restoreUserSession = async (accessToken: string): Promise<User> => {
	const response = await getWithoutHeader<{ data: User }>('/users/profile', {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + accessToken
	});

	return response.data;
};

export const updateUserProfile = async (data: UpdateUserData): Promise<User> => {
	const response = await patch<{ data: User }>('/users/update', {
		...data
	});
	return response.data;
};

export const updateUserSocialAccount = async (data: UpdateUserSocial): Promise<void> => {
	await patch('/users/update/social', {
		...data
	});
	return;
};
