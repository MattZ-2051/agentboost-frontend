import { get, post } from '..';
import type { Listing, RealtyMoleData } from '$types/models';

export const getPropertyListingDescription = async ({
  address,
  keyInfo,
}: {
  address: string;
  keyInfo: string;
}): Promise<{
  choices: { content: string }[];
  realtyMoleData: RealtyMoleData[];
}> => {
  const response = await post<{
    data: { choices: { content: string }[]; realtyMoleData: RealtyMoleData[] };
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

export const createListingGmc = async ({
  address,
  bed,
  bath,
  squareFt,
  propertyDescription,
  location,
  listingId,
}: {
  address: string;
  bed: number;
  bath: number;
  squareFt: number;
  propertyDescription: string;
  location: string;
  listingId: string;
}) => {
  const response = await post<{ data: Listing }>(
    `/listings/generate-gmc/${listingId}`,
    {
      address,
      bed,
      bath,
      squareFt,
      propertyDescription,
      location,
    },
  );
  return response.data;
};
