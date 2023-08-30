import { get, patch } from '..';
import type { User } from '../../types/models';
import type { UpdateUserData } from './types';

export const getUserProfile = async () => {
  const response = await get<{ data: User }>('/users/profile');
  return response.data;
};

export const updateUserProfile = async (data: UpdateUserData) => {
  const response = await patch<{ data: User }>('/users/update', {
    ...data,
  });
  return response.data;
};
