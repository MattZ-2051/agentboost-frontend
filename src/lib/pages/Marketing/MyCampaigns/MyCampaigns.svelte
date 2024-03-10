<script lang="ts">
	import MyCampaignIcon from '$lib/assets/svg/MyCampaignIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import { type ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { Campaign } from '$types/models';
	import CampaignInfo from './CampaignInfo.svelte';
	import Gmc from '$lib/pages/Shared/Gmc/Gmc.svelte';

	export let campaigns: Campaign[];

	let customCampaignTabs = campaigns.map((item) => ({ label: item.title }));

	const modalStore = getModalStore();
	const handleCreateNewCampaign = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'newCampaign',
			title: 'Create New Campaign',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	};
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
				onClick={handleCreateNewCampaign}
			/>
		</div>
	</div>
	<div>
		{#if customCampaignTabs.length > 0 && campaigns.length > 0}
			<Tabs items={customCampaignTabs} classes="text-lg">
				<div slot="content">
					<CampaignInfo campaign={campaigns[0]} />
				</div>
			</Tabs>
		{/if}
		<div class="flex h-[400px] w-full items-center justify-center">
			<p class="text-2xl font-semibold">Create New Campaigns to see Activity</p>
		</div>
	</div>
	<div class="mt-[48px]">
		<!-- TODO add GMC from store -->
		<Gmc gmcs={[]} />
	</div>
</div>
