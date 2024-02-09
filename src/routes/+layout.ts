import { restoreUserSessionFx, updateUser } from '$store/user/index.js';
import { checkStorage } from '$utils';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const data = checkStorage();
	if (data) {
    console.log("data", data)
		await updateUser({
			email: data.tokenData.email,
			id: data.tokenData.sub,
      fullName: data.tokenData.fullName,
			authTokens: data.authTokens
		});

		await restoreUserSessionFx(data.authTokens.access);
	}
	// } else {
	//   const redirect =
	//     window.location.pathname.includes('signup') ||
	//     window.location.pathname.includes('login') ||
	//     window.location.pathname.length === 1;
	//   if (!redirect) {
	//     window.location.pathname = '/';
	//   }
	// }
	return {};
}

export const ssr = false;
