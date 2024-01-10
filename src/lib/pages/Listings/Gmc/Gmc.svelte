<script lang="ts">
	import GmcIcon from '$lib/assets/svg/GmcIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import SocialCard from '$lib/pages/Shared/Gmc/SocialCard/SocialCard.svelte';
	import ReelScript from '$lib/pages/Shared/Gmc/ReelsScript/ReelsScript.svelte';
	import type { TabItems } from '$types/components';

	import EmailView from '../../Shared/Gmc/EmailView/EmailView.svelte';

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

<div
	class="bg-[#151719] rounded-[20px] overflow-auto w-full h-full mb-12 p-6 flex flex-col max-w-[95vw]"
>
	<div class="flex w-full items-center justify-between">
		<div class="flex items-center gap-x-2">
			<GmcIcon />
			<p class="text-[#fff] font-semibold text-[24px]">Generate marketing content</p>
		</div>
		<Button
			label="Generate new content"
			variant="variant-app-primary"
			bg="bg-[#151719]"
			classes="!w-[210px] !h-12"
		/>
	</div>
	<div class="mt-[22px]">
		<Tabs items={gmcTabs} bind:selectedItem>
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
							<ReelScript />
						</Slider>
					</div>
				{/if}
			</div>
		</Tabs>
	</div>
</div>
