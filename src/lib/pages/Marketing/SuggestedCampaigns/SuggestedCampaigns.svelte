<script lang="ts">
	import CampaignsIcon from '$lib/assets/svg/CampaignsIcon.svelte';
	import CampaignBox from './CampaignBox.svelte';
</script>

<div class="w-full h-[440px] px-6 py-8 bg-[#141718] rounded-[10px]">
	<div class="flex items-center gap-x-4 mb-6">
		<CampaignsIcon />
		<p class="text-white text-2xl font-semibold">Suggested Campaigns</p>
	</div>
	<div class="grid grid-cols-3 gap-x-8">
		<CampaignBox />
		<CampaignBox />
		<CampaignBox />
	</div>
</div>
