<script lang="ts">
	import AreaIcon from '$lib/assets/svg/AreaIcon.svelte';
	import BathTubIcon from '$lib/assets/svg/BathTubIcon.svelte';
	import BedIcon from '$lib/assets/svg/BedIcon.svelte';
	import ChevronLeft from '$lib/assets/svg/Chevron/ChevronLeft.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import TaxIcon from '$lib/assets/svg/TaxIcon.svelte';
	import dummyImg from '$lib/assets/images/dummy-buyer-img.png';
	import Box from '$lib/components/Box/Box.svelte';
	import CopyIcon from '$lib/assets/svg/CopyIcon.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { Listing } from '$types/models';
	import PropertyInfoChips from '$lib/pages/Shared/PropertyInfoChips/PropertyInfoChips.svelte';
	import type { PropertyInfo } from '$lib/pages/Shared/PropertyInfoChips/types';
	import { numberWithCommas } from '$utils';

	const copyTextToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			getToastStore().trigger({
				message: 'Copied to clipboard!',
				background: 'bg-gradient-to-r from-[#3F82FF] via-[#3F82FF] to-[#4AF9EA]'
			});
		} catch (err) {
			throw new Error('failed to copy text to clipboard');
		}
	};

	export let listing: Listing;

	const { imgSrc, propertyDescription, yearBuilt, bedrooms, bathrooms, lotSize, price, squareFt } =
		listing;

	const propertyInfo: PropertyInfo = {
		yearBuilt,
		bedrooms,
		bathrooms,
		lotSize,
		price
	};
</script>

<div class="flex h-full w-full flex-col rounded-[20px] bg-[#151719] p-8">
	<div class="flex h-full w-full justify-between">
		<div class="flex w-2/5 flex-col">
			<div class="flex items-center gap-x-6">
				<ChevronLeft />
				<p class="text-2xl font-semibold leading-[normal] text-white">10044 W Springdale Ct</p>
			</div>
			<div class="mt-[30px] flex flex-col items-start gap-x-6">
				<p class="text-[20px] text-[#EFEFEF]">Property Info</p>
				<div class="mt-4 flex h-full w-full flex-row flex-wrap items-start gap-4">
					<PropertyInfoChips {propertyInfo} />
				</div>
			</div>
		</div>
		<div class="relative flex w-3/5 items-center justify-end">
			<div class="relative">
				<img class="h-[435px] w-[663px] rounded-xl object-cover" src={imgSrc} alt="" />
				<div
					class="absolute left-6 top-6 flex h-fit w-fit items-center justify-center rounded-[10px] bg-[#22272AB2] bg-opacity-70 p-2"
				>
					<div class="flex h-full w-full flex-col items-end justify-center">
						<p class="mb-1 text-[26px] text-[#EFEFEF]">$ {numberWithCommas(price)}</p>
						<p class="w-full text-end text-sm font-light text-[#CFD0D5]">$ 1,540 / sq ft</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-10">
		<Box bgColor="bg-[#1E2225]" width="w-full" height="h-full" classes="p-6">
			<div class="flex h-full w-full items-center justify-between">
				<p class="text-[20px] font-medium text-[#EFEFEF]">Property Description</p>
				<div on:click={() => copyTextToClipboard(propertyDescription)}>
					<CopyIcon />
				</div>
			</div>
			<div class="mt-4 text-[14px] leading-6 text-[#CFD0D5]">
				{propertyDescription}
			</div>
		</Box>
	</div>
</div>
