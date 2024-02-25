import { loginFx } from '$store/user/index.js';

/** @type {import('./$types').LayoutLoad} */
export async function load({ url }) {
	const email = url.searchParams.get('user-email');
	if (email) {
		// await login({ email, password: '' });
		await loginFx({ email, password: 'google' });
	} else {
		window.location.pathname = '/signup';
	}

	return {};
}

export const ssr = false;
