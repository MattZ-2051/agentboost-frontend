<script lang="ts">
	import Box from '$lib/components/Box/Box.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import ActiveListingCard from '../ActiveListingCard/ActiveListingCard.svelte';
</script>

<Box width="max-w-[95vw]" height="h-full" bgColor="bg-[#151719]" classes="p-6">
	<div class="flex items-center gap-x-4">
		<p class="text-[20px] font-semibold text-white">Active Listings</p>
	</div>
	<div class="flex justify-start">
		<Slider length={10}>
			<ActiveListingCard />
		</Slider>
	</div>
</Box>
