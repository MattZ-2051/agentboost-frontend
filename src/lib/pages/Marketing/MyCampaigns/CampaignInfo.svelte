<script lang="ts">
	import type { Campaign } from '$types/models';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CloseIcon from '$lib/assets/svg/CloseIcon/CloseIconWhite.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import Graph from '$lib/components/Graph/Graph.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';

	export let campaign: Campaign;

	const chipClasses = 'flex items-center justify-center';

	$: showContent = false;
</script>

<div>
	<div class="mt-8 grid grid-cols-2 gap-x-5">
		<div
			class="h-[357px] w-full rounded-[10px] border border-white border-opacity-10 bg-[#171A1C] p-6"
		>
			<div class="flex w-full items-start justify-between">
				<p class="text-lg font-medium leading-[21px] text-white">My Custom Campaign title</p>
				<div class="flex items-center">
					<p class="mr-2 text-sm font-bold">Active</p>
					<SlideToggle />
				</div>
			</div>
			<div class="mt-8">
				<p class="text-sm font-normal leading-normal text-[#C6C7CD]">Target Audience</p>
				<div class="mt-2 flex h-full w-full gap-x-4 rounded-[10px] bg-[#24282D] px-4 py-[7px]">
					<Chip variant="variant-app-primary" classes={chipClasses}>
						<p>First Time Buyers</p>
						<span><CloseIcon width={10} height={10} /></span>
					</Chip>
					<Chip variant="variant-app-primary" classes={chipClasses}>
						<p>Luxury Sellers</p>
						<span><CloseIcon width={10} height={10} /></span>
					</Chip>
					<Chip variant="variant-app-primary" classes={chipClasses}>
						<p>Investors</p>
						<span><CloseIcon width={10} height={10} /></span>
					</Chip>
				</div>
			</div>
			<div class="mt-8">
				<p class="text-sm font-normal leading-normal text-[#C6C7CD]">Messages</p>
				<div class="mt-2 flex h-full w-full gap-x-4 rounded-[10px] bg-[#24282D] px-4 py-3">
					<p class="text-[15px]">
						Lorem ipsum dolor sit amet consectetur. Amet habitasse at aliquam imperdiet sit sit
						tempus. Enim purus lectus diam odio pharetra nisi et ullamcorper. Mauris egestas et at
						at arcu. Purus condimentum.
					</p>
				</div>
			</div>
		</div>
		<div
			class="h-full w-full rounded-[10px] border border-white border-opacity-10 bg-[#171A1C] p-6"
		>
			<div class="flex w-full items-start justify-between">
				<p class="text-lg">Campaign 7 day activity</p>
				<Dropdown
					{showContent}
					classes="rounded-[10px] text-sm w-40 h-[38px] py-[10px] px-2 bg-[#1E2225] rounded-[10px] border border-white border-opacity-20 flex justify-between"
					label="Instagram"
					iconSize={16}
				/>
			</div>
			<Slider length={20} classes="gap-x-8">
				<div class="mt-8 flex h-[110px] w-full pb-4">
					<div class="flex w-fit flex-col items-center gap-y-4">
						<Graph />
						<p class="text-xs text-[#6F767E]">11/06</p>
					</div>
				</div>
			</Slider>
		</div>
	</div>
</div>
