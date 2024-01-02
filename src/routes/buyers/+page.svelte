<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import BuyerCard from '$lib/pages/Buyers/Cards/BuyerCard.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'new-buyer',
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
	<div class="flex justify-between w-full items-center">
		<p class="text-white text-2xl font-semibold">Buyers</p>
		<Button
			label="Add Buyer"
			bg="bg-[#010101]"
			variant="variant-app-primary"
			classes="!h-12 !w-32"
			onClick={createNewBuyer}
		/>
	</div>
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
