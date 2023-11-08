import type { AxiosError } from 'axios';

export type ApiOptions = RequestInit & {
	params?: string | string[][] | Record<string, string> | URLSearchParams;
};

export type StorageTokenData = {
	tokenData: Record<string, string>;
	authTokens: AuthTokens;
};

export type AuthTokens = {
	access: string;
	refresh: string;
};

export type ApiError = AxiosError<{ message: string }>;
