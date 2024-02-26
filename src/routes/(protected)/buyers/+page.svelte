<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import BuyerCard from '$lib/pages/Buyers/Cards/BuyerCard.svelte';
	import { $user as user } from '$store/user';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'new-buyer',
		bgDrawer: 'bg-[#171A1C]'
	};

	const createNewBuyer = () => {
		drawerStore.open(drawerSettings);
	};
</script>

{#if $user}
	<div class="relative w-full pb-12">
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
		{#if $user.buyers && $user.buyers.length > 0}
			<div class="mt-12 grid h-full w-full grid-cols-3 gap-8">
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
		{:else}
			<div class="mt-12 flex h-[50vh] w-full items-center justify-center">
				<p class="text-4xl font-semibold">No Buyers</p>
			</div>
		{/if}
	</div>
{/if}
