import { getListingFx } from '$store/listings/index.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const id = params.id;

	const listing = await getListingFx(id);

	return {
		listing
	};
}
