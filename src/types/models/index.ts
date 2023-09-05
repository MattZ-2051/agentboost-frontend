import type { AuthTokens } from '$types/api';

export type User = {
  email: string;
  authTokens: AuthTokens;
  id: string;
  brandDescription?: string;
  areaOfExpertise?: string;
  listings?: Listing[] | null;
};

export type RealtyMoleData = {
  addressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  formattedAddress: string;
  bedrooms: number;
  county?: string;
  legalDescription?: string;
  squareFootage: number;
  subdivision?: string;
  yearBuilt: number;
  bathrooms: number;
  lotSize: number;
  propertyType: string;
  lastSaleDate?: string;
  features: JSON;
  propertyTaxes?: JSON;
  owner?: JSON;
};

type CMA = {
  addressLine1: string;
  bathrooms: number;
  bedrooms: number;
  city: string;
  county: string;
  createdDate: string;
  daysOnMarket: number;
  formattedAddress: string;
  id: string;
  lastSeen: string;
  latitude: number;
  listedDate: string;
  longitude: number;
  lotSize: number;
  price: number;
  propertyType: string;
  removedDate: string | null;
  squareFootage: number;
  state: string;
  status: string;
  yearBuilt: number;
  zipCode: string;
};

export type Listing = {
  id?: number;
  address: string;
  propertyDescription: string;
  propertyInsight?: string;
  city: string;
  state: string;
  zipCode: string;
  formattedAddress: string;
  bedrooms: number;
  county?: string;
  legalDescription?: string;
  squareFootage: number;
  subdivision?: string;
  yearBuilt: number;
  bathrooms: number;
  lotSize: number;
  propertyType: string;
  lastSaleDate?: string;
  features: JSON;
  propertyTaxes?: JSON;
  owner?: JSON;
  cma?: CMA[];
  userId: string;
};

export type NewListing = {
  propertyDescription: string;
  realtyMoleData: RealtyMoleData;
};
