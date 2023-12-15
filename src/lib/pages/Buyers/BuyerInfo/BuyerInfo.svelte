<script lang="ts">
	import ChevronLeft from '$lib/assets/svg/Chevron/ChevronLeft.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import BuyerInfoCard from './BuyerInfoCard.svelte';
</script>

<div class="bg-[#151719] rounded-[20px] w-full h-full py-4 px-8">
	<div class="flex items-center w-full justify-between">
		<div class="flex items-center gap-x-6">
			<ChevronLeft />
			<p class="text-white text-2xl font-semibold leading-[normal]">Buyer Name Here</p>
		</div>
		<div class="flex items-center gap-x-2">
			<div
				class="bg-[#1D3335] !w-[164px] h-12 text-white py-4 px-6 flex items-center justify-center rounded-[10px] text-[15px] font-semibold whitespace-nowrap"
			>
				View Full Profile
			</div>
			<Button
				classes="!h-12 !m-4 !text-[15px] !w-[145px]"
				bg="bg-[#151719]"
				variant="variant-app-primary"
				label="Add Property"
			/>
		</div>
	</div>
	<div class="pb-4 flex w-full justify-center">
		<Slider length={10} classes="gap-x-8 w-[85vw]">
			<div class="border-r border-[#22272A] pr-8">
				<BuyerInfoCard />
			</div>
		</Slider>
	</div>
</div>
