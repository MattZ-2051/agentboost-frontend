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
  cma?: JSON[];
  userId: string;
};

export type NewListing = {
  propertyDescription: string;
  realtyMoleData: RealtyMoleData;
};
