<script lang="ts">
	import BuyersIconHover from '$lib/assets/svg/BuyersIconHover.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import ActiveListingCard from './ActiveListingCard.svelte';
</script>

<div class="h-full bg-[#141718] rounded-[20px] py-8 px-6 w-full max-w-[95vw]">
	<div class="w-full">
		<div class="flex gap-x-4 items-center">
			<BuyersIconHover width={24} height={24} />
			<p class="text-white text-2xl font-semibold">Active Listings</p>
		</div>
	</div>
	<div class="flex justify-start">
		<Slider length={10}>
			<ActiveListingCard />
		</Slider>
	</div>
</div>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0.25rem !important;
		height: 0.25rem !important;
	}

	.scrollbar::-webkit-scrollbar-track {
		background: #22272a !important;
	}

	.scrollbar::-webkit-scrollbar-thumb {
		color: #22272a !important;
		background-color: #48e8ed !important;
	}
</style>
