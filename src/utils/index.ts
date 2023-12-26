import type { AuthTokens, StorageTokenData } from '$types/api';
import jwt_decode from 'jwt-decode';
export const decodeJwtToken = (token: string): Record<string, string> => {
	return jwt_decode(token);
};

export const checkStorage = (): StorageTokenData | null => {
	if (!localStorage) return null;

	const tokenExist = !!localStorage.getItem('authTokens');
	if (tokenExist) {
		const authTokens = JSON.parse(localStorage.getItem('authTokens') as string);
		const tokenData = decodeJwtToken(authTokens?.access);
		return { tokenData, authTokens };
	} else {
		return null;
	}
};

export const handleUserTokenData = (token: AuthTokens) => {
	const tokenData = decodeJwtToken(token.access);

	localStorage.setItem(
		'authTokens',
		JSON.stringify({ access: token.access, refresh: token.refresh })
	);
	return tokenData;
};

export const hexToRgba = (hex: string) => {
	let c: any;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.3)';
	}
	throw new Error('Bad Hex');
};
