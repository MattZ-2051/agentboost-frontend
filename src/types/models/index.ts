import type { AuthTokens } from '$types/api';

export type User = {
	id: number;
	email: string;
	authTokens: AuthTokens;
	brandDescription: string;
	profileImg: string;
	phoneNumber: string;
	businessLogo: string;
	areaOfExpertise: string;
	fullName: string;
	brokerage: string;
	xId: string;
	instagramId: string;
	facebookId: string;
	listings: Listing[];
	buyers: Buyer[];
	campaigns: Campaign[];
};

export type Campaign = {
	id?: number;
	title: string;
	messages: string;
	active: boolean;
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
	calenderDate: string | null;
	listing: Listing;
};

export type Listing = {
	id?: number;
	zpid: number;
	latitude: number;
	status: string;
	longitude: number;
	imgSrc: string;
	price: number;
	squareFt: number;
	city: string;
	state: string;
	zipCode: string;
	streetAddress: string;
	zillowDescription: string;
	propertyDescription: string;
	nearbyPoi?: JSON;
	propertyInsightAvgFt?: number;
	propertyInsightAvgPrice?: number;
	lotSize: string;
	bedrooms: number;
	bathrooms: number;
	yearBuilt: number;
	county?: string;
	subdivision?: string;
	neighberhood?: string | null;
	userId: number;
	cma?: JSON;
	gmcs?: GMC[];
};

export type Buyer = {
	id?: number;
	zpid: number;
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
	latitude: number;
	longitude: number;
	bathrooms: number;
	squareFt: number;
	resoFacts: {
		lotSize: string;
	};
	yearBuilt: number;
};

export type NewListing = {
	propertyDescription: string;
	zillowInfo: ZillowPropertyInfo;
};
