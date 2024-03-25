export type UpdateUserData = {
	id: number;
	brandDescription?: string;
	profileImg?: string;
	businessLogo?: string;
	fullName?: string;
	brokerage?: string;
};

export type UpdateUserSocial = {
	id: number;
	socialId: string;
	social: 'facebook' | 'x' | 'instagram';
};
