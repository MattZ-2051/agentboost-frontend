<script lang="ts">
	import CloseIcon from '$lib/assets/svg/CloseIcon/CloseIconWhite.svelte';
	import HomeIcon from '$lib/assets/svg/HomeIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import Loader from '$lib/components/Loader/Loader.svelte';
	import { errorMessages } from '$lib/constants/toastMessages';
	import { createListingDescriptionFx, updateNewListingData } from '$store/listings';
	import { getDrawerStore, getToastStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();

	let propertyAddress: string;
	let city: string;
	let state: string;
	let keyInfo: string = '';
	let createListingLoading: boolean = false;

	const handleCreateListing = async () => {
		await updateNewListingData('pending');
		if (!propertyAddress || propertyAddress.length === 0) {
			toastStore.trigger({
				message: 'Please provide a valid property address'
			});
			return;
		} else if (!city || city.length === 0) {
			toastStore.trigger({
				message: 'Please provide a valid property address'
			});
			return;
		} else if (!state || state.length === 0) {
			toastStore.trigger({
				message: 'Please provide a valid property address'
			});
			return;
		} else {
			createListingLoading = true;
			try {
				await createListingDescriptionFx({ address: propertyAddress, keyInfo });
				drawerStore.close();
			} catch (e) {
				toastStore.trigger(errorMessages.support);
			} finally {
				createListingLoading = false;
			}
		}
	};
</script>

<div class="h-screen w-full p-6">
	<div class="flex items-center justify-between">
		<div class="flex items-center">
			<HomeIcon />
			<h1 class="ml-2">Create New Listing</h1>
		</div>
		<div on:click={() => drawerStore.close()}>
			<CloseIcon />
		</div>
	</div>
	<div class="my-6 h-[0px] w-[332px] border border-[#2E3438]" />
	<p class="text-base font-normal leading-normal">Here's how it works</p>
	<p class="pt-4 text-sm font-light leading-[1.75] text-white text-opacity-60">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>
	<div class="mt-8 flex flex-col gap-y-8">
		<Input
			label="Property Address"
			bind:value={propertyAddress}
			type="text"
			required
			placeholder="Property Address Here"
			classes="w-[332px] border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
		/>
		<div class="flex w-full justify-between gap-x-4">
			<Input
				label="City"
				bind:value={city}
				type="text"
				placeholder="State"
				required
				classes="w-full border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
			/>
			<Input
				label="State"
				bind:value={state}
				type="text"
				required
				placeholder="City"
				classes="w-full border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
			/>
		</div>
		<Input
			label="Key Info"
			bind:value={keyInfo}
			type="textarea"
			placeholder="Key Info Here"
			classes="w-full border-none px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
		/>
		{#if createListingLoading}
			<div class="mt-8 flex h-full w-full justify-center">
				<Loader />
			</div>
		{:else}
			<Button
				label="Boost"
				onClick={handleCreateListing}
				variant="variant-app-primary"
				bg="!bg-[#171A1C]"
				classes="!w-[331px] !h-[48px] !mt-8"
			/>
		{/if}
	</div>
</div>
