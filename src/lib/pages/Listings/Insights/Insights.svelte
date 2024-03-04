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

<div class="flex h-full w-full flex-col rounded-[20px] bg-[#151719] p-8">
	<div class="flex items-center gap-x-2 text-[24px] font-semibold text-[#fff]">
		<InfoIconHover />
		<p>Insights</p>
	</div>
	<div class="grid grid-cols-3 gap-x-8 pt-11">
		<Box {...boxStyleMap}>
			<p class="text-sm leading-6 text-[#CFD0D5]">
				Based on the average days on market for homes in WESTVIEW SUB NO 01, which is 75.3 days, the
				fact that the most recent home sold in just 24 days indicates that the subject home has a
				potential advantage in terms of its desirability and appeal.
			</p>
		</Box>
		<Box {...boxStyleMap}>
			<p class="text-base font-semibold text-[#FFF]">Expected days on market</p>
			<div class="mt-4 flex items-center gap-x-4">
				<div
					class="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#1D3335] p-2"
				>
					<CalenderIconWhite />
				</div>
				<div class="flex items-baseline gap-x-2">
					<p class="text-4xl font-bold text-white">55</p>
					<p class="text-sm font-medium text-[#A0A1AB]">Average</p>
				</div>
			</div>
		</Box>
		<Box {...boxStyleMap}>
			<p class="text-base font-semibold text-[#FFF]">Price / sqft</p>
			<div class="mt-4 flex items-center gap-x-4">
				<div
					class="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#1D3335] p-2"
				>
					<PriceTagIcon />
				</div>
				<div class="flex items-baseline gap-x-2">
					<p class="text-4xl font-bold text-white">$1657</p>
					<p class="text-sm font-medium text-[#A0A1AB]">Average</p>
				</div>
			</div>
		</Box>
	</div>
	<div class="h-full w-full" id="poi">
		<div class="mt-20 flex items-center gap-x-2 text-[24px] font-semibold text-[#fff]">
			<RoutingIcon />
			<p>Nearby Points of Interest</p>
		</div>
		<div class="mt-10 flex h-full w-full items-start justify-between">
			<div class="flex w-2/5 flex-col gap-y-5">
				<PoiInfo />
				<PoiInfo />
				<PoiInfo />
				<PoiInfo />
				<PoiInfo />
			</div>
			<div class="flex w-3/5 items-center justify-end">
				<div>
					<Map mapSize="w-[600px] h-[500px]" />
				</div>
			</div>
		</div>
	</div>
</div>
