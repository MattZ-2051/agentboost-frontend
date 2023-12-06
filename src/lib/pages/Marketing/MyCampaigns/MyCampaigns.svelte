<script lang="ts">
	import MyCampaignIcon from '$lib/assets/svg/MyCampaignIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Graph from '$lib/components/Graph/Graph.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';
	import LittleChevronDown from '$lib/assets/svg/Chevron/LittleChevronDown.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import SocialCard from './SocialCard.svelte';

	$: showContent = false;

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
</script>

<div class="w-full h-full bg-[#141718] max-w-[95vw] rounded-[10px] px-6 py-8">
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-x-4 mb-6">
			<MyCampaignIcon />
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
		<div class="mt-8 grid grid-cols-2 gap-x-8">
			<div class="w-full h-[357px] bg-[#171A1C] rounded-[10px] border border-gray-800 p-6">
				<div class="flex w-full items-center justify-between">
					<p class="text-white text-lg font-medium leading-[21px]">My Custom Campaign title</p>
					<div class="flex items-center">
						<p class="text-sm font-bold mr-2">Active</p>
						<SlideToggle />
					</div>
				</div>
				<div class="mt-8">
					<p class="text-[#C6C7CD] text-sm font-normal leading-normal">Target Audience</p>
					<div class="w-full h-full py-[7px] px-4 bg-[#24282D] rounded-[10px] mt-2 flex gap-x-4">
						<Chip variant="variant-app-primary" title="First time buyers" />
						<Chip variant="variant-app-primary" title="Luxury Sellers" />
						<Chip variant="variant-app-primary" title="Investors" />
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
			<div class="w-full h-full bg-[#171A1C] border-gray-800 border rounded-[10px] px-6 py-8">
				<div class="flex w-full justify-between">
					<p class="text-lg">Campaign 7 day activity</p>
					<Dropdown {showContent} classes="rounded-[10px] !w-fit">
						<div
							class="w-40 h-[38px] p-2.5 bg-[#1E2225] rounded-[10px] border border-white border-opacity-20 flex justify-between"
						>
							<p class="text-xs text-[#CFDOD5]">Instagram</p>
							{#if showContent}
								<ChevronUp width={16} height={16} />
							{:else}
								<ChevronDown width={16} height={16} />
							{/if}
						</div>
					</Dropdown>
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
	<div class="mt-8">
		<Tabs items={socialCampaignTabs} classes="text-lg" />
		<div class="w-full flex justify-start">
			<Slider length={8} classes="">
				<SocialCard />
			</Slider>
		</div>
	</div>
</div>
