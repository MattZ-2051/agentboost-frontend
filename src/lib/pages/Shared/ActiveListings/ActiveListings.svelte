<script lang="ts">
	import { goto } from '$app/navigation';
	import Box from '$lib/components/Box/Box.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import type { Listing } from '$types/models';
	import ActiveListingCard from '../ActiveListingCard/ActiveListingCard.svelte';

	export let listings: Listing[] | null | undefined;
</script>

<Box width="w-full" height="h-full" bgColor="bg-[#151719]" classes="p-6">
	<div class="flex items-center gap-x-4">
		<p class="text-[20px] font-semibold text-white">Active Listings</p>
	</div>
	<div class="flex justify-start">
		{#if listings && listings?.length > 0}
			<Slider length={listings.length}>
				<ActiveListingCard />
			</Slider>
		{:else}
			<div class="flex h-[544px] w-full flex-col items-center justify-center">
				<p class="pb-12 text-3xl font-semibold">No Active Listings</p>
				<Button
					label="Click Here to Get Started"
					bg="bg-[#151719]"
					variant="variant-app-primary"
					classes="!w-1/5 !h-16 !text-[18px]"
					onClick={() => goto('/listings')}
				/>
			</div>
		{/if}
	</div>
</Box>
