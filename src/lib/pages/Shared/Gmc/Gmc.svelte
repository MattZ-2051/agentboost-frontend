<script lang="ts">
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import EmailView from './EmailView/EmailView.svelte';
	import SocialCard from './SocialCard/SocialCard.svelte';
	import ReelsScript from './ReelsScript/ReelsScript.svelte';
	import type { TabItems } from '$types/components';
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
{/if}
