<script lang="ts">
	import Calender from '$lib/pages/Marketing/Calender/Calender.svelte';
	import Activity from '$lib/pages/Listings/Activity/Activity.svelte';
	import SocialAccounts from '$lib/pages/Listings/SocialAccounts/SocialAccounts.svelte';
</script>

<h1 class="text-[24px] font-semibold mb-8">Marketing</h1>
<div class="flex justify-between w-full gap-x-6">
	<SocialAccounts />
	<Activity />
</div>
<div class="mt-6 w-full flex justify-center">
	<Calender />
</div>
