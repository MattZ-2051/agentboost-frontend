<script lang="ts">
	import GmcIcon from '$lib/assets/svg/GmcIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import SocialCard from '$lib/pages/Marketing/MyCampaigns/SocialCard.svelte';
	import type { TabItems } from '$types/components';
	import EmailView from './EmailView/EmailView.svelte';

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

	$: selectedItem = gmcTabs[0].label;
</script>

<div class="bg-[#151719] rounded-[20px] overflow-auto w-full h-full p-8 flex flex-col max-w-[95vw]">
	<div class="flex w-full items-center justify-between">
		<div class="flex items-center gap-x-2 text-[#fff] font-semibold text-[24px]">
			<GmcIcon />
			<p>Generate marketing content</p>
		</div>
		<Button
			label="Generate new content"
			variant="variant-app-primary"
			bg="bg-[#151719]"
			classes="!w-[210px] !h-12"
		/>
	</div>
	<div class="mt-4">
		<Tabs items={gmcTabs} bind:selectedItem>
			<div slot="content" class="h-[80vh]">
				{#if selectedItem === 'Social Media'}
					<div class="w-full justify-start">
						<Slider length={8} classes="">
							<SocialCard />
						</Slider>
					</div>
				{:else if selectedItem === 'Email'}
					<div>
						<EmailView />
					</div>
				{/if}
			</div>
		</Tabs>
	</div>
</div>
