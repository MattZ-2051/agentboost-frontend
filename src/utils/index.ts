import type { AuthTokens, StorageTokenData } from '$types/api';
import { getToastStore } from '@skeletonlabs/skeleton';
import { jwtDecode } from 'jwt-decode';
export const decodeJwtToken = (token: string): Record<string, string> => {
	return jwtDecode(token);
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

export const numberWithCommas = (x: number): string => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.8)';
	}
	throw new Error('Bad Hex');
};

export const getCurrentWeek = () => {
	const currentdate: any = new Date();
	const oneJan: any = new Date(currentdate.getFullYear(), 0, 1);
	const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
	const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
	return result;
};

export const copyTextToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text);
		getToastStore().trigger({ message: 'Copied to clipboard!' });
	} catch (err) {
		throw new Error('failed to copy text to clipboard');
	}
};

/** Dispatch event on click outside of node */
export const clickOutside = (node: any) => {
	const handleClick = (event: any) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
