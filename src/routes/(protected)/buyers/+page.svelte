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

<div class="flex w-full items-start justify-between">
	<h1 class="text-[24px] font-semibold">Buyers</h1>
	<Button
		label="Add buyer"
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
