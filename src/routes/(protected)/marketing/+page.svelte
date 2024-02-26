<script lang="ts">
	import Calender from '$lib/pages/Marketing/Calender/Calender.svelte';
	import Activity from '$lib/pages/Marketing/Activity/Activity.svelte';
	import SocialAccounts from '$lib/pages/Marketing/Social/SocialAccounts.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import ActiveListings from '$lib/pages/Shared/ActiveListings/ActiveListings.svelte';
	import SuggestedCampaigns from '$lib/pages/Marketing/SuggestedCampaigns/SuggestedCampaigns.svelte';
	import MyCampaigns from '$lib/pages/Marketing/MyCampaigns/MyCampaigns.svelte';
	import { $user as user } from '$store/user';

	$: accounts = [$user?.instagram, $user?.facebook, $user?.x];
</script>

{#if $user}
	<div class="relative h-full w-full pb-12">
		<h1 class="mb-8 text-[24px] font-semibold">Marketing</h1>
		<div class="flex w-full justify-between gap-x-6">
			{#if accounts.some((account) => !!account)}
				<SocialAccounts />
				<Activity />
			{:else}
				<Box bgColor="bg-[#151719]" width="!w-[150%]" height="h-[340px]" classes="p-6">
					<div class="flex w-full items-center justify-between">
						<p class="text-lg text-[#EFEFEF]">Connected accounts</p>
						<div
							class="flex h-[44px] w-[221px] items-center justify-center gap-x-2 rounded-[10px] bg-[#1D3335] px-4 py-2"
						>
							<div>
								<AddIcon />
							</div>
							<p class="whitespace-nowrap text-[15px] font-semibold">Connect new Account</p>
						</div>
					</div>
					<div class="flex h-4/5 w-full items-center justify-center">
						<p class="text-center text-xl font-semibold">No Connected Accounts</p>
					</div>
				</Box>
			{/if}
		</div>
		<div class="mb-16 mt-6 flex w-full justify-center">
			<Calender />
		</div>
		<div>
			<ActiveListings listings={$user.listings} />
		</div>
		<div class="mt-16">
			<SuggestedCampaigns />
		</div>
		<div class="mt-16">
			<MyCampaigns campaigns={$user.campaigns} />
		</div>
	</div>
{/if}
