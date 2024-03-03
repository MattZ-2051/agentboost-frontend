<script lang="ts">
	import ShareIcon from '$lib/assets/svg/ShareIcon.svelte';
	import TrashIcon from '$lib/assets/svg/TrashIcon.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import { goto } from '$app/navigation';
	import type { Listing } from '$types/models';
	import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
	import { errorMessages } from '$lib/constants/toastMessages';
	import { deleteListingFx } from '$store/listings';

	export let listing: Listing;
	export let status: string;

	const modalStore = getModalStore();
	const toastStore = getToastStore();
	const items = ['Active', 'Inactive', 'Upcoming'];
	const { imgSrc, streetAddress } = listing;

	$: showContent = false;

	const handleButtonClick = async () => {
		await goto(`/listings/${listing.id}`);
	};

	const handleModal = () => {
		modalStore.trigger({
			type: 'component',
			component: 'deleteListing',

			response: (r: boolean) => r && handleDeleteListing()
		});
	};
	const handleDeleteListing = () => {
		try {
			listing.id && deleteListingFx(listing.id);
			toastStore.trigger({
				message: 'Listing Successfully deleted',
				background: 'variant-filled-success'
			});
		} catch {
			toastStore.trigger(errorMessages.support);
		}
	};
</script>

<Card width="w-fit" height="h-full">
	<div class="rounded-[10px] bg-[#2E2F37] p-3">
		<img class="h-[233px] !w-[292px] rounded-[10px] object-cover" src={imgSrc} alt="" />
	</div>
	<div class="flex items-center justify-between pb-[24px] pt-[1.125rem]">
		<p class="text-base font-semibold leading-[15px]">{streetAddress}</p>
		<div class="flex gap-x-[14px]">
			<ShareIcon />
			<div on:click={handleModal}>
				<TrashIcon />
			</div>
		</div>
	</div>
	<RadioDropdown
		{items}
		classes="w-full h-[48px] px-[18px] py-[12px] flex justify-between"
		{showContent}
	/>
	<div class="mt-4">
		<Button
			label="View Listing"
			variant="variant-app-primary"
			classes="!h-[48px]"
			bg={'bg-[#171A1C]'}
			onClick={handleButtonClick}
		/>
	</div>
</Card>
