import { getUserProfileFx, updateUser } from '../store/user/index.js';
import { checkStorage } from '../utils/index.js';
/** @type {import('./$types').LayoutLoad} */
export async function load() {
  const data = checkStorage();
  if (data) {
    updateUser({
      email: data.tokenData.email,
      id: data.tokenData.id,
      authTokens: data.authTokens,
    });
    getUserProfileFx();
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
