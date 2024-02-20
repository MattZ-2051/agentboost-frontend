<script lang="ts">
	import Calender from '$lib/pages/Marketing/Calender/Calender.svelte';
	import Activity from '$lib/pages/Marketing/Activity/Activity.svelte';
	import SocialAccounts from '$lib/pages/Marketing/Social/SocialAccounts.svelte';
	import ActiveListings from '$lib/pages/Shared/ActiveListings/ActiveListings.svelte';
	import SuggestedCampaigns from '$lib/pages/Marketing/SuggestedCampaigns/SuggestedCampaigns.svelte';
	import MyCampaigns from '$lib/pages/Marketing/MyCampaigns/MyCampaigns.svelte';
</script>

<h1 class="mb-8 text-[24px] font-semibold">Marketing</h1>
<div class="flex w-full justify-between gap-x-6">
	<SocialAccounts />
	<Activity />
</div>
<div class="mb-16 mt-6 flex w-full justify-center">
	<Calender />
</div>
<div>
	<ActiveListings />
</div>
<div class="mt-16">
	<SuggestedCampaigns />
</div>
<div class="mt-16">
	<MyCampaigns />
</div>
