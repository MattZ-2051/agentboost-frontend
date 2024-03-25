import { get } from '../';

export const twitterLogin = async () => {
	await get('/twitter/login');
};
