import { post } from '..';
import type { Listing } from '$types/models';

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
  const response = await post<{ data: Listing }>(`/gmc/create`, {
    address,
    bed,
    bath,
    squareFt,
    propertyDescription,
    location,
    listingId,
  });
  return response.data;
};
