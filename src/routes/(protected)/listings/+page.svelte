<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import SearchBar from '$lib/components/SearchBar/SearchBar.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import ListingCard from '$lib/pages/Listings/Cards/ListingCard.svelte';
	import StatusDropdown from '$lib/pages/Listings/Dropdowns/StatusDropdown.svelte';
	import GridDropdown from '$lib/pages/Listings/Dropdowns/GridDropdown.svelte';
	import TypeDropdown from '$lib/pages/Listings/Dropdowns/TypeDropdown.svelte';
	import StatesDropdown from '$lib/pages/Listings/Dropdowns/StatesDropdown.svelte';
	import MoreDropdown from '$lib/pages/Listings/Dropdowns/MoreDropdown.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	$: showStatus = false;
	$: showTypes = false;
	$: showStates = false;
	$: showMore = false;
	$: showGrid = false;

	const drawerStore = getDrawerStore();
	const drawerSettings: DrawerSettings = {
		id: 'new-listing',
		bgDrawer: 'bg-[#171A1C]'
	};
	const createNewListing = () => {
		drawerStore.open(drawerSettings);

		// drawerStore.update((store) => {
		// 	store.open = !store.open;
		// 	store.meta = drawerSettings.meta;
		// 	return store;
		// });
	};
	const tabItems = [{ label: 'Active' }, { label: 'Inactive' }, { label: 'Incoming' }];
</script>

<div class="relative h-full w-full">
	<div class="mb-4 flex items-start justify-between">
		<h1 class="text-[24px] font-semibold">My Listings</h1>
		<Button
			label="Create New Listing"
			variant="variant-app-primary"
			onClick={createNewListing}
			classes="!w-[179px] !h-[48px]"
			bg={'bg-surface-500'}
		/>
	</div>
	<div class="">
		<Tabs items={tabItems} />
	</div>
	<div class="flex w-full items-center justify-end gap-x-5 pt-8">
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
	</div>
	<div
		class="mb-40 mt-8 flex w-full flex-grow flex-wrap justify-start gap-x-12 gap-y-8 overflow-y-auto"
	>
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
		<ListingCard address="10044 W Springdale Ct" status="Active" />
	</div>
</div>
