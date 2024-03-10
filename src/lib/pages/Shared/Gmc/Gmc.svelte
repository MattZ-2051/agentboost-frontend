<script lang="ts">
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import EmailView from './EmailView/EmailView.svelte';
	import SocialCard from './SocialCard/SocialCard.svelte';
	import ReelsScript from './ReelsScript/ReelsScript.svelte';
	import type { TabItems } from '$lib/components/Tabs/types';
	import type { GMC } from '$types/models';

	export let gmcs: GMC[];

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

{#if gmcs.length === 0}
	<!-- <div class="flex h-[400px] w-full items-center justify-center">
		<p class="text-2xl font-semibold text-white">No Generated Marketing Content</p>
	</div> -->
{:else}
	<Tabs items={gmcTabs} bind:selectedItem classes="text-lg">
		<div slot="content" class="">
			{#if selectedItem === 'Social Media'}
				<div class="flex w-[88vw] justify-start">
					<div
						class={`slider flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth pb-10 pt-6`}
					>
						{#each gmcs as gmc, i}
							<div class="shrink-0 snap-center">
								<SocialCard
									cardData={{
										caption: gmc.caption,
										imgSrc: gmc.img || '',
										calenderDate: gmc.calenderDate
									}}
								/>
							</div>
						{/each}
					</div>
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
{/if}

<style lang="postcss">
	.slider::-webkit-scrollbar {
		width: 0.25rem !important;
		height: 0.25rem !important;
	}

	.slider::-webkit-scrollbar-track {
		background: #22272a !important;
	}

	.slider::-webkit-scrollbar-thumb {
		color: #48e8ed !important;
		background-color: #48e8ed !important;
	}
</style>
