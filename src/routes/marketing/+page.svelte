<script lang="ts">
	import Calender from '$lib/pages/Marketing/Calender/Calender.svelte';
	import Activity from '$lib/pages/Marketing/Activity/Activity.svelte';
	import SocialAccounts from '$lib/pages/Marketing/Social/SocialAccounts.svelte';
	import ActiveListings from '$lib/pages/Marketing/ActiveListings/ActiveListings.svelte';
	import SuggestedCampaigns from '$lib/pages/Marketing/SuggestedCampaigns/SuggestedCampaigns.svelte';
	import MyCampaigns from '$lib/pages/Marketing/MyCampaigns/MyCampaigns.svelte';
</script>

<h1 class="text-[24px] font-semibold mb-8">Marketing</h1>
<div class="flex justify-between w-full gap-x-6">
	<SocialAccounts />
	<Activity />
</div>
<div class="mt-6 w-full flex justify-center mb-16">
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
