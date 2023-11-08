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

// export class Listing {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ nullable: false, type: 'int' })
//   zpid: number;

//   @Column({ nullable: false, type: 'int' })
//   price: number;

//   @Column({ nullable: false, type: 'varchar' })
//   imgSrc: string;

//   @Column({ nullable: false, type: 'varchar' })
//   city: string;

//   @Column({ nullable: false, type: 'varchar' })
//   state: string;

//   @Column({ nullable: false, type: 'varchar' })
//   zipCode: string;

//   @Column({ nullable: false, type: 'varchar' })
//   streetAddress: string;

//   @Column({ nullable: false, type: 'text' })
//   description: string;

//   @Column({ nullable: false, type: 'int' })
//   bedrooms: number;

//   @Column({ nullable: false, type: 'float' })
//   bathrooms: number;

//   @Column({ nullable: true, type: 'varchar', default: null })
//   county: string;

//   @Column({ nullable: true, type: 'varchar', default: null })
//   neighberhood: string;

//   @Column({ nullable: true, default: null, type: 'jsonb' })
//   cma: JSON;

//   @ManyToOne(() => User, (user) => user.listings, { nullable: false })
//   user: User;

//   @OneToMany(() => Gmc, (gmc) => gmc.listing, { nullable: true })
//   gmcs: Gmc[];
// }

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
