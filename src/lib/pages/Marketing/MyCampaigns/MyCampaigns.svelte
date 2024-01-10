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

<div class="w-full h-full bg-[#141718] max-w-[95vw] rounded-[10px] p-6">
	<div class="flex justify-between items-start">
		<div class="flex items-center gap-x-[6px] mb-6">
			<div>
				<MyCampaignIcon />
			</div>
			<p class="text-white text-2xl font-semibold">My Campaigns</p>
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
				class="w-full h-[357px] bg-[#171A1C] rounded-[10px] border border-white border-opacity-10 p-6"
			>
				<div class="flex w-full items-start justify-between">
					<p class="text-white text-lg font-medium leading-[21px]">My Custom Campaign title</p>
					<div class="flex items-center">
						<p class="text-sm font-bold mr-2">Active</p>
						<SlideToggle />
					</div>
				</div>
				<div class="mt-8">
					<p class="text-[#C6C7CD] text-sm font-normal leading-normal">Target Audience</p>
					<div class="w-full h-full py-[7px] px-4 bg-[#24282D] rounded-[10px] mt-2 flex gap-x-4">
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
					<p class="text-[#C6C7CD] text-sm font-normal leading-normal">Messages</p>
					<div class="w-full h-full py-3 px-4 bg-[#24282D] rounded-[10px] mt-2 flex gap-x-4">
						<p class="text-[15px]">
							Lorem ipsum dolor sit amet consectetur. Amet habitasse at aliquam imperdiet sit sit
							tempus. Enim purus lectus diam odio pharetra nisi et ullamcorper. Mauris egestas et at
							at arcu. Purus condimentum.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full h-full bg-[#171A1C] border border-white border-opacity-10 rounded-[10px] p-6"
			>
				<div class="flex w-full justify-between items-start">
					<p class="text-lg">Campaign 7 day activity</p>
					<Dropdown
						{showContent}
						classes="rounded-[10px] text-sm w-40 h-[38px] py-[10px] px-2 bg-[#1E2225] rounded-[10px] border border-white border-opacity-20 flex justify-between"
						label="Instagram"
						iconSize={16}
					/>
				</div>
				<Slider length={20} classes="gap-x-8">
					<div class="w-full h-[110px] mt-8 flex pb-4">
						<div class="flex flex-col gap-y-4 items-center w-fit">
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
					<div class="flex justify-start w-[88vw]">
						<Slider length={8} classes="">
							<SocialCard />
						</Slider>
					</div>
				{:else if selectedItem === 'Email'}
					<div>
						<EmailView />
					</div>
				{:else if selectedItem === 'Reel Ideas'}
					<div class="justify-start w-[88vw] flex">
						<Slider length={10}>
							<ReelsScript />
						</Slider>
					</div>
				{/if}
			</div>
		</Tabs>
	</div>
</div>
