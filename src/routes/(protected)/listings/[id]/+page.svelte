<script lang="ts">
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';
	import ComparableProperties from '$lib/pages/Listings/ComparableProperties/ComparableProperties.svelte';
	import ListingGmc from '$lib/pages/Listings/Gmc/ListingGmc.svelte';
	import Insights from '$lib/pages/Listings/Insights/Insights.svelte';
	import PropertyInfo from '$lib/pages/Listings/PropertyInfo/PropertyInfo.svelte';
	import type { Listing } from '$types/models';

	export let data: { listing: Listing };

	const { listing } = data;

	$: showSrollToTop = true;

	console.log('listings', listing);
</script>

{#if listing}
	<div>
		<div id="details">
			<PropertyInfo {listing} />
		</div>
		<div class="mt-16" id="comp">
			<ComparableProperties />
		</div>
		<div class="mt-16" id="insights">
			<Insights />
		</div>
		<div class="mt-16" id="marketing">
			<ListingGmc gmcs={listing.gmcs} />
		</div>
	</div>
	<div class="absolute bottom-0 mb-10 flex w-[95%] justify-end">
		{#if showSrollToTop}
			<a href="#details" class="flex items-center gap-x-4">
				Back to top
				<ChevronUp width={32} height={32} />
			</a>
		{/if}
	</div>
{/if}

<style lang="postcss">
	a {
		color: #8e8e8e;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
	}

	a:hover {
		color: #49e8ed;
	}
</style>
