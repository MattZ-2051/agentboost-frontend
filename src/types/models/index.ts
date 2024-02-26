import type { AuthTokens } from '$types/api';

export type User = {
	id: string;
	email: string;
	authTokens: AuthTokens;
	brandDescription: string;
	profileImg: string;
	businessLogo: string;
	areaOfExpertise: string;
	fullName: string;
	brokerage: string;
	x: boolean;
	instagram: boolean;
	facebook: boolean;
	listings: Listing[];
	buyers: Buyer[];
	campaigns: Campaign[];
};

export type Campaign = {
	id: string;
	title: string;
	messages: string;
	targetAudience: string[];
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
	zillowImages: string[];
};

export type GMC = {
	id: number;
	caption: string;
	img?: string;
	listing: Listing;
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
	county: string | null;
	neighberhood: string | null;
	bathrooms: number;
	lotSize: string;
	livingArea: string;
	cma?: CMA[];
	gmcs?: GMC[];
	userId: string;
};

export type Buyer = {
	id?: number;
	address: string;
	propertyDescription: string;
	propertyInsight?: string;
	city: string;
	state: string;
	zipCode: string;
	formattedAddress: string;
	bedrooms: number;
	county: string | null;
	neighberhood: string | null;
	bathrooms: number;
	lotSize: string;
	livingArea: string;
	cma?: CMA[];
	gmcs?: GMC[];
	userId: string;
};

export type ZillowPropertyInfo = {
	zpid: number;
	imgSrc: string;
	zestimate: number;
	address: {
		city: string;
		state: string;
		neighberhood: string | null;
		streetAddress: string;
		zipcode: string;
	};
	county: string | null;
	description: string;
	price: number;
	bedrooms: number;
	bathrooms: number;
};

export type NewListing = {
	propertyDescription: string;
	zillowInfo: ZillowPropertyInfo;
};
