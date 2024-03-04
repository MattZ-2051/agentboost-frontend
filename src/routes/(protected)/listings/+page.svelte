<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import ListingCard from '$lib/pages/Listings/Cards/ListingCard.svelte';
	import { getDrawerStore, getToastStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { $user as user } from '$store/user';
	import {
		createListingFx,
		$newListing as newListing,
		updateNewListingData
	} from '$store/listings';
	import PropertyInfoChips from '$lib/pages/Shared/PropertyInfoChips/PropertyInfoChips.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import type { Listing, NewListing } from '$types/models';
	import { errorMessages } from '$lib/constants/toastMessages';
	import Loader from '$lib/components/Loader/Loader.svelte';

	const drawerStore = getDrawerStore();
	const toastStore = getToastStore();

	const drawerSettings: DrawerSettings = {
		id: 'new-listing',
		bgDrawer: 'bg-[#171A1C]'
	};

	let listingFile: any;

	$: showStatus = false;
	$: showTypes = false;
	$: showStates = false;
	$: showMore = false;
	$: showGrid = false;
	$: creatingListing = false;
	$: listingFilePreview =
		$newListing && $newListing !== 'pending' && $newListing.zillowInfo.imgSrc
			? $newListing.zillowInfo.imgSrc
			: '';

	const handleProfileFileOnChange = (e: any) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		listingFile = image;

		reader.readAsDataURL(image);
		reader.onload = (e) => {
			listingFilePreview = e?.target?.result as string;
		};
	};

	const createListing = async () => {
		if ($newListing && $newListing !== 'pending' && $user) {
			creatingListing = true;
			const { zillowInfo, propertyDescription } = $newListing as NewListing;

			const listingToCreate: Listing = {
				latitude: zillowInfo.latitude,
				longitude: zillowInfo.longitude,
				bathrooms: zillowInfo.bathrooms,
				bedrooms: zillowInfo.bedrooms,
				streetAddress: zillowInfo.address.streetAddress,
				propertyDescription,
				city: zillowInfo.address.city,
				state: zillowInfo.address.state,
				neighberhood: zillowInfo.address.neighberhood,
				lotSize: zillowInfo.resoFacts.lotSize,
				zipCode: zillowInfo.address.zipcode,
				zpid: zillowInfo.zpid,
				price: zillowInfo.price,
				userId: $user.id,
				imgSrc: zillowInfo.imgSrc,
				zillowDescription: zillowInfo.description,
				squareFt: zillowInfo.squareFt,
				yearBuilt: zillowInfo.yearBuilt
			};
			try {
				await createListingFx({
					...listingToCreate
				});
				creatingListing = false;
				toastStore.trigger({ message: 'Listing Created', background: 'variant-filled-success' });
				await updateNewListingData(null);
			} catch {
				toastStore.trigger(errorMessages.support);
			}
		}
	};
	const tabItems = [{ label: 'Active' }, { label: 'Inactive' }, { label: 'Incoming' }];

	$: chipInfo =
		$newListing && $newListing !== 'pending'
			? {
					bedrooms: $newListing.zillowInfo.bedrooms,
					bathrooms: $newListing.zillowInfo.bathrooms,
					lotSize: $newListing.zillowInfo.resoFacts.lotSize,
					yearBuilt: $newListing.zillowInfo.yearBuilt,
					price: $newListing.zillowInfo.price
				}
			: undefined;

	$: newPropertyDescription =
		$newListing && $newListing !== 'pending' ? $newListing.propertyDescription : '';
</script>

<div class="relative h-full w-full pb-12">
	<div class="mb-4 flex items-start justify-between">
		<h1 class="text-[24px] font-semibold">My Listings</h1>
		<Button
			label="Create New Listing"
			variant="variant-app-primary"
			onClick={() => drawerStore.open(drawerSettings)}
			classes="!w-[179px] !h-[48px]"
			bg={'bg-[#010101]'}
		/>
	</div>
	{#if !$newListing && $newListing !== 'pending'}
		<div class="">
			<Tabs items={tabItems} />
		</div>
	{/if}
	{#if $user && $user.listings && $user?.listings.length > 0 && $newListing !== 'pending' && !$newListing && !creatingListing}
		<!-- <div class="flex w-full items-center justify-end gap-x-5 pt-8">
		<div class="h-[38px] w-[300px]">
			<SearchBar />
		</div>
		<div class="h-[38px] w-[160px]">
			<StatusDropdown showContent={showStatus} />
		</div>
		<div class="h-[38px] w-[160px]">
			<TypeDropdown showContent={showTypes} />
		</div>
		<div class="h-[38px] w-[160px]">
			<StatesDropdown showContent={showStates} />
		</div>
		<div class="h-[38px] w-[88px]">
			<MoreDropdown showContent={showMore} />
		</div>
		<div class="h-[38px] w-[38px]">
			<GridDropdown showContent={showGrid} />
		</div>
	</div> -->
		<div class="mt-8 flex h-full w-full flex-grow flex-wrap justify-start gap-x-12 gap-y-8">
			{#each $user.listings as listing}
				<ListingCard {listing} status="Active" />
			{/each}
		</div>
	{:else if $newListing === 'pending'}
		<div />
	{:else if creatingListing}
		<div class="flex h-full w-full items-center justify-center">
			<Loader size={600} />
		</div>
	{:else if $newListing && chipInfo}
		<Box width="w-full" height="h-full" bgColor="bg-[#151719]" classes="p-6">
			<div class="my-8 flex w-full justify-center text-center text-2xl text-[#EFEFEF]">
				<p>Something Looks Wrong? Edit your property info here before creating your Listing</p>
			</div>
			<div class="flex w-full flex-col gap-y-8">
				<div>
					<p class="text-2xl text-[#EFEFEF]">Property Description</p>
					<p class="mt-4 leading-relaxed">
						<Input
							label=""
							placeholder=""
							type="textarea"
							value={newPropertyDescription}
							variant="variant-app-primary"
							rows={20}
						/>
					</p>
				</div>
				<div class="w-full">
					<p class="text-2xl text-[#EFEFEF]">Property Info</p>
					<div class="mt-4 flex gap-x-4">
						<PropertyInfoChips propertyInfo={chipInfo} />
					</div>
					{#if listingFilePreview.length > 0}
						<div class="mt-4">
							<img
								src={listingFilePreview}
								alt=""
								class="h-[400px] w-[500px] rounded-[10px] object-cover"
							/>
						</div>
					{/if}
					<div class="mt-4">
						<input
							type="file"
							class=""
							id="listingFile"
							name="listingImg"
							accept="image/png, image/jpeg, image/jpg"
							bind:files={listingFile}
							on:change={handleProfileFileOnChange}
						/>
					</div>
					<div class="mt-16 flex w-full justify-center">
						<Button
							label="Create Listing"
							variant="variant-app-primary"
							onClick={createListing}
							classes="!w-1/2 !h-[48px]"
							bg={'bg-[#151719]'}
						/>
					</div>
				</div>
			</div>
		</Box>
	{:else}
		<div class="mt-12 flex h-[50vh] w-full items-center justify-center">
			<p class="text-4xl font-semibold">No Listings</p>
		</div>
	{/if}
</div>
