<script lang="ts">
	import MyCampaignIcon from '$lib/assets/svg/MyCampaignIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Graph from '$lib/components/Graph/Graph.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import SocialCard from '../../Shared/Gmc/SocialCard/SocialCard.svelte';
	import CloseIcon from '$lib/assets/svg/CloseIcon/CloseIconWhite.svelte';
	import EmailView from '$lib/pages/Shared/Gmc/EmailView/EmailView.svelte';
	import ReelsScript from '$lib/pages/Shared/Gmc/ReelsScript/ReelsScript.svelte';
	import type { TabItems } from '$types/components';

	const gmcTabs: TabItems = [
		{
			label: 'Social Media'
		},
		{
			label: 'Email'
		},
		{
			label: 'Reel Ideas'
		}
	];

	const customCampaignTabs = [
		{
			label: 'Custom Campaign 1'
		},
		{
			label: 'Custom Campaign 2'
		},
		{
			label: 'Custom Campaign 3'
		}
	];

	const socialCampaignTabs = [
		{
			label: 'Social Media'
		},
		{
			label: 'Email'
		},
		{
			label: 'Reel Ideas'
		}
	];

	const chipClasses = 'flex items-center justify-center';

	$: selectedItem = gmcTabs[0].label;
	$: showContent = false;
</script>

<div class="h-full w-full max-w-[95vw] rounded-[10px] bg-[#141718] p-6">
	<div class="flex items-start justify-between">
		<div class="mb-6 flex items-center gap-x-[6px]">
			<div>
				<MyCampaignIcon />
			</div>
			<p class="text-2xl font-semibold text-white">My Campaigns</p>
		</div>
		<div>
			<Button
				variant="variant-app-primary"
				label="Create New Campaign"
				bg="bg-[#141718]"
				classes="!w-[206px] !h-12"
			/>
		</div>
	</div>
	<div>
		<Tabs items={customCampaignTabs} classes="text-lg" />
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
	<div class="mt-[48px]">
		<Tabs items={gmcTabs} bind:selectedItem classes="text-lg">
			<div slot="content" class="">
				{#if selectedItem === 'Social Media'}
					<div class="flex w-[88vw] justify-start">
						<Slider length={8} classes="">
							<SocialCard />
						</Slider>
					</div>
				{:else if selectedItem === 'Email'}
					<div>
						<EmailView />
					</div>
				{:else if selectedItem === 'Reel Ideas'}
					<div class="flex w-[88vw] justify-start">
						<Slider length={10}>
							<ReelsScript />
						</Slider>
					</div>
				{/if}
			</div>
		</Tabs>
	</div>
</div>
