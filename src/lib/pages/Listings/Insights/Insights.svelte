<script lang="ts">
	import CalenderIconWhite from '$lib/assets/svg/CalenderIconWhite.svelte';
	import InfoIconHover from '$lib/assets/svg/InfoIconHover.svelte';
	import PriceTagIcon from '$lib/assets/svg/PriceTagIcon.svelte';
	import RoutingIcon from '$lib/assets/svg/RoutingIcon.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import Map from '$lib/components/Map/Map.svelte';
	import PoiInfo from './PoiInfo.svelte';

	const hover = true;
	const bgColor = '';

	const boxStyleMap = {
		bgColor: 'bg-[#1E2225]',
		hover: true,
		height: 'h-[140px]',
		width: 'w-full',
		classes: 'py-4 px-5'
	};
</script>

<div class="bg-[#151719] rounded-[20px] w-full h-full p-8 flex flex-col">
	<div class="flex items-center gap-x-2 text-[#fff] font-semibold text-[24px]">
		<InfoIconHover />
		<p>Insights</p>
	</div>
	<div class="grid grid-cols-3 gap-x-8 pt-11">
		<Box {...boxStyleMap}>
			<p class="text-[#CFD0D5] text-sm leading-6">
				Based on the average days on market for homes in WESTVIEW SUB NO 01, which is 75.3 days, the
				fact that the most recent home sold in just 24 days indicates that the subject home has a
				potential advantage in terms of its desirability and appeal.
			</p>
		</Box>
		<Box {...boxStyleMap}>
			<p class="text-[#FFF] text-base font-semibold">Expected days on market</p>
			<div class="flex mt-4 gap-x-4 items-center">
				<div
					class="bg-[#1D3335] w-[54px] flex items-center justify-center h-[54px] rounded-full p-2"
				>
					<CalenderIconWhite />
				</div>
				<div class="flex items-baseline gap-x-2">
					<p class="text-4xl text-white font-bold">55</p>
					<p class="text-[#A0A1AB] text-sm font-medium">Average</p>
				</div>
			</div>
		</Box>
		<Box {...boxStyleMap}>
			<p class="text-[#FFF] text-base font-semibold">Price / sqft</p>
			<div class="flex mt-4 gap-x-4 items-center">
				<div
					class="bg-[#1D3335] w-[54px] flex items-center justify-center h-[54px] rounded-full p-2"
				>
					<PriceTagIcon />
				</div>
				<div class="flex items-baseline gap-x-2">
					<p class="text-4xl text-white font-bold">$1657</p>
					<p class="text-[#A0A1AB] text-sm font-medium">Average</p>
				</div>
			</div>
		</Box>
	</div>
	<div class="w-full h-full">
		<div class="flex items-center gap-x-2 text-[#fff] font-semibold text-[24px] mt-20">
			<RoutingIcon />
			<p>Nearby Points of Interest</p>
		</div>
		<div class="flex w-full h-full items-start mt-10 justify-between">
			<div class="w-2/5 gap-y-5 flex flex-col">
				<PoiInfo />
				<PoiInfo />
				<PoiInfo />
				<PoiInfo />
				<PoiInfo />
			</div>
			<div class="w-3/5 flex items-center justify-end">
				<div>
					<Map mapSize="w-[600px] h-[500px]" />
				</div>
			</div>
		</div>
	</div>
</div>
