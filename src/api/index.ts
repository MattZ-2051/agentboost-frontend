import axios from 'axios';
import { $user } from '$store/user';

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const baseURL = import.meta.env?.VITE_API_URL;

const axiosInstance = axios.create({
	baseURL
});

const getHeaders = () => {
	return $user.getState()?.authTokens
		? {
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + $user.getState()?.authTokens?.access?.toString()
				}
			}
		: {};
};

const getFormHeaders = () => {
	return $user.getState()?.authTokens
		? {
				headers: {
					Authorization: 'Bearer ' + $user.getState()?.authTokens?.access?.toString()
				}
			}
		: {};
};
export const getWithoutHeader = async <T>(path: string, headers: any): Promise<T> => {
	return await axiosInstance.get(path, {
		headers
	});
};

export const get = async <T>(path: string, params?: Record<string, string>): Promise<T> => {
	return await axiosInstance.get(path, { params, ...getHeaders() });
};

export const postForm = async (path: string, data: any): Promise<{ data: string }> => {
	const response = await fetch(`${baseURL}${path}`, {
		method: 'POST',
		body: data,
		...getFormHeaders()
	});
	return await response.json();
};
export const post = async <T>(path: string, data: any): Promise<T> => {
	return await axiosInstance.post(path, data, { ...getHeaders() });
};

export const patch = async <T>(path: string, data?: any): Promise<T> => {
	return await axiosInstance.patch(path, data, { ...getHeaders() });
};

export const del = async <T>(path: string): Promise<T> => {
	return await axiosInstance.delete(path, getHeaders());
};
