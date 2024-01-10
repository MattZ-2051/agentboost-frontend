<script lang="ts">
	import Box from '$lib/components/Box/Box.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import ActiveListingCard from '../ActiveListingCard/ActiveListingCard.svelte';
</script>

<Box width="w-full" height="h-full" bgColor="bg-[#151719]" classes="max-w-[95vw] p-6">
	<div class="w-full">
		<div class="flex gap-x-4 items-center">
			<p class="text-white text-[20px] font-semibold">Active Listings</p>
		</div>
	</div>
	<div class="flex justify-start">
		<Slider length={10}>
			<ActiveListingCard />
		</Slider>
	</div>
</Box>
