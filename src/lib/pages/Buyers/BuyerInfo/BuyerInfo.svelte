<script lang="ts">
	import ChevronLeft from '$lib/assets/svg/Chevron/ChevronLeft.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import BuyerInfoCard from './BuyerInfoCard.svelte';
</script>

<div class="h-full w-full rounded-[20px] bg-[#151719] p-6">
	<div class="flex w-full items-start justify-between">
		<div class="flex items-center gap-x-6">
			<div class="hover:scale-110 hover:cursor-pointer">
				<ChevronLeft />
			</div>
			<p class="pt-2 text-2xl font-semibold leading-[normal] text-white">Zach Wren's Home screen</p>
		</div>
		<div class="flex items-start gap-x-6">
			<div
				class="flex h-12 !w-[164px] items-center justify-center whitespace-nowrap rounded-[10px] bg-[#1D3335] px-6 py-4 text-[15px] font-semibold text-white hover:cursor-pointer hover:bg-opacity-80"
			>
				View Full Profile
			</div>
			<Button
				classes="!h-12 !text-[15px] !w-[145px]"
				bg="bg-[#151719]"
				variant="variant-app-primary"
				label="Add Property"
			/>
		</div>
	</div>
	<div class="flex w-full justify-start pb-4">
		<Slider length={10} classes="gap-x-8 !w-[90vw]">
			<div class="border-r border-[#22272A] pr-8">
				<BuyerInfoCard />
			</div>
		</Slider>
	</div>
</div>
