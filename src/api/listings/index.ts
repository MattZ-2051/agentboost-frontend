import { get, post } from '..';
import type { Listing, RealtyMoleData } from '../../types/models';

export const getPropertyListingDescription = async ({
  address,
  keyInfo,
  agentProfile,
}: {
  address: string;
  keyInfo: string;
  agentProfile: string;
}): Promise<{
  choices: { content: string }[];
  realtyMoleData: RealtyMoleData;
}> => {
  const response = await post<{
    data: { choices: { content: string }[]; realtyMoleData: RealtyMoleData };
  }>('/listings/descriptionfromAddress', {
    address,
    keyInfo,
    agentProfile,
  });
  return response.data;
};

export const createListing = async (
  newListingData: Listing,
): Promise<Listing> => {
  const response = await post<{ data: Listing }>('/listings/create', {
    ...newListingData,
  });
  return response.data;
};

export const getListing = async (id: string): Promise<Listing> => {
  const response = await get<{ data: Listing }>(`/listings/${id}`);
  return response.data;
};
