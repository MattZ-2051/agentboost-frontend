<script lang="ts">
	import { AppRail } from '@skeletonlabs/skeleton';
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import { page } from '$app/stores';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import { goto } from '$app/navigation';
	import { $user as user } from '$store/user';
	import Button from '$lib/components/Button/Button.svelte';

	const handleListingClick = (listingId: number | undefined) => {
		// modalStore.trigger(modal);
		if (listingId) goto(`/listings/${listingId}`);
	};
	$: pathName = $page.url.pathname;
</script>

<AppRail height="h-full" width="w-full" background="bg-opacity-50 bg-black">
	<div class="p-4">
		<div class="pt-4 flex justify-between w-full items-center">
			<Avatar />
			<h1>{$user?.email}</h1>
		</div>
		<hr />
		{#if pathName.includes('listings') && $user}
			<div class="h-64 flex flex-col justify-start items-stretch">
				<div class="">
					<p class="text-xl mt-4">My Listings</p>
					{#if $user.listings}
						{#each $user.listings as listing (listing.id)}
							<div class="flex flex-col gap-y-5 py-4">
								<Chip
									title={listing.address}
									variant="variant-filled"
									onClick={() => handleListingClick(listing.id)}
								/>
							</div>
						{/each}
					{/if}
				</div>
				<div class="">
					<Button
						label="Create New Listing"
						variant="variant-filled-secondary"
						onClick={async () => await goto('/listings')}
						classes="w-full text-sm mt-4 p-2"
					/>
				</div>
			</div>
		{/if}
		{#if pathName.includes('buyers')}
			<div class="mt-8">
				<p class="text-xl mt-4">My Buyers</p>
				<div class="flex flex-col gap-y-5 py-4" />
			</div>
		{/if}
		{#if pathName.includes('marketing')}
			<p class="text-xl mt-4">Connected Accounts</p>
			<div class="w-full flex items-center justify-center mt-8">
				<div class="">
					<SlideToggle label="Twitter" />
					<SlideToggle label="Instagram" />
					<SlideToggle label="Facebook" />
				</div>
			</div>
		{/if}
	</div>
</AppRail>
