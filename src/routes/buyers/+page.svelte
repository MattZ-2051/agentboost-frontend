<script lang="ts">
	import BuyerCard from '$lib/pages/Buyers/BuyerCard.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'new-listing',
		bgDrawer: 'bg-[#171A1C]'
	};

	const createNewBuyer = () => {
		drawerStore.open(drawerSettings);

		// drawerStore.update((store) => {
		// 	store.open = !store.open;
		// 	store.meta = drawerSettings.meta;
		// 	return store;
		// });
	};
</script>

<div>
	<div class="h-[1px] bg-[#181818] w-full my-6" />
	<p class="text-white text-2xl font-semibold">Buyers</p>
	<div class="mt-12 grid grid-cols-3 gap-8">
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
		<BuyerCard />
	</div>
</div>
