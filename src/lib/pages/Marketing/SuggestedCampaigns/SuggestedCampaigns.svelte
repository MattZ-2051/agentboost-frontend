<script lang="ts">
	import CampaignsIcon from '$lib/assets/svg/CampaignsIcon.svelte';
	import CampaignBox from './CampaignBox.svelte';
</script>

<div class="h-full w-full rounded-[10px] bg-[#141718] px-6 py-8">
	<div class="mb-6 flex items-center gap-x-[6px]">
		<CampaignsIcon />
		<p class="text-2xl font-semibold text-white">Suggested campaigns</p>
	</div>
	<div class="grid grid-cols-3 gap-x-8">
		<CampaignBox />
		<CampaignBox />
		<CampaignBox />
	</div>
</div>
