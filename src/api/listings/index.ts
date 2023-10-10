import { get, post } from '..';
import type {
  Listing,
  RealtyMoleData,
  ZillowPropertyInfo,
} from '$types/models';

export const getPropertyListingDescription = async ({
  address,
  keyInfo,
}: {
  address: string;
  keyInfo: string;
}): Promise<{
  choices: { content: string }[];
  zillowInfo: ZillowPropertyInfo;
}> => {
  const response = await post<{
    data: { choices: { content: string }[]; zillowInfo: ZillowPropertyInfo };
  }>('/listings/descriptionfromAddress', {
    address,
    keyInfo,
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

export const createListingCma = async ({
  listingId,
  address,
  radius,
  status,
}: {
  listingId: string;
  address: string;
  radius: number;
  status?: 'Active' | 'Inactive';
}) => {
  const response = await post<{ data: Listing }>(
    `/listings/generate-cma/${listingId}`,
    { address, radius, status },
  );
  return response.data;
};

export const getListing = async (id: string): Promise<Listing> => {
  const response = await get<{ data: Listing }>(`/listings/${id}`);
  return response.data;
};
