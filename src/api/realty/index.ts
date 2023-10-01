import { get } from '$api';

export const getPropertyData = async ({
  address,
}: {
  address: string;
}): Promise<any> => {
  const response = await get<{ data: any }>(`/realty/properties/${address}`);
  console.log('api res', response.data);
  return response.data;
};
