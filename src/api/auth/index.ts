import { post } from '..';
import type { AuthTokens } from '$types/api';
import type { AuthData } from './types';

export const login = async ({ email, password }: AuthData) => {
  const response = await post<{
    data: AuthTokens;
  }>('/auth/login', {
    email,
    password,
  });
  return response.data;
};

export const signup = async ({ email, password }: AuthData) => {
  const response = await post<{
    data: AuthTokens;
  }>('/auth/signup', {
    email,
    password,
  });
  return response.data;
};
export const logout = async ({ userId }: { userId: string }) => {
  const response = await post<{
    data: AuthTokens;
  }>('/auth/logout', {
    userId,
  });
  return response.data;
};

export const refreshTokens = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  const response = await post<{ data: AuthTokens }>('/auth/refresh', {
    refreshToken,
  });
  return response.data;
};
