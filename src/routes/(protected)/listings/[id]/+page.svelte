<script lang="ts">
	import ComparableProperties from '$lib/pages/Listings/ComparableProperties/ComparableProperties.svelte';
	import ListingGmc from '$lib/pages/Listings/Gmc/ListingGmc.svelte';
	import Insights from '$lib/pages/Listings/Insights/Insights.svelte';
	import PropertyInfo from '$lib/pages/Listings/PropertyInfo/PropertyInfo.svelte';
	import type { Listing } from '$types/models';

	export let data: { listing: Listing };

	const { listing } = data;

	console.log('listings', listing);
</script>

{#if listing}
	<div>
		<div>
			<PropertyInfo {listing} />
		</div>
		<div class="mt-16">
			<ComparableProperties />
		</div>
		<div class="mt-16">
			<Insights />
		</div>
		<div class="mt-16">
			<ListingGmc />
		</div>
	</div>
{/if}
