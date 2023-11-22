<script lang>
	import Button from '$lib/components/Button/Button.svelte';
	import SearchBar from '$lib/components/SearchBar/SearchBar.svelte';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import ListingCard from '$lib/components/Cards/ListingCard.svelte';
	import StatusDropdown from '$lib/pages/Listings/Dropdowns/StatusDropdown.svelte';
	import GridDropdown from '$lib/pages/Listings/Dropdowns/GridDropdown.svelte';
	import TypeDropdown from '$lib/pages/Listings/Dropdowns/TypeDropdown.svelte';
	import StatesDropdown from '$lib/pages/Listings/Dropdowns/StatesDropdown.svelte';
	import MoreDropdown from '$lib/pages/Listings/Dropdowns/MoreDropdown.svelte';

	$: showStatus = false;
	$: showTypes = false;
	$: showStates = false;
	$: showMore = false;
	$: showGrid = false;
	const tabItems = [{ label: 'Active' }, { label: 'Inactive' }, { label: 'Incoming' }];
</script>

<div class="w-full h-full relative">
	<div class="headerContainer border-t flex justify-between items-center py-6">
		<h1 class="text-2xl font-semibold">My Listings</h1>
		<Button
			label="Create New Listing"
			variant="variant-app-primary"
			classes="!w-[179px] !h-[48px]"
			bg={'bg-surface-500'}
		/>
	</div>
	<div class="">
		<Tabs items={tabItems} />
	</div>

	<div class="pt-8 flex justify-center items-center w-full gap-x-5">
		<div class="w-[300px] h-[38px]">
			<SearchBar />
		</div>
		<div class="w-[160px] h-[38px]">
			<StatusDropdown showContent={showStatus} />
		</div>
		<div class="w-[160px] h-[38px]">
			<TypeDropdown showContent={showTypes} />
		</div>
		<div class="w-[160px] h-[38px]">
			<StatesDropdown showContent={showStates} />
		</div>
		<div class="w-[88px] h-[38px]">
			<MoreDropdown showContent={showMore} />
		</div>
		<div class="w-[38px] h-[38px]">
			<GridDropdown showContent={showGrid} />
		</div>
	</div>
	<div
		class="flex flex-grow flex-wrap justify-center gap-y-8 gap-x-12 mt-8 w-full overflow-y-auto mb-40"
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

<style>
	.headerContainer {
		border-color: #181818;
	}
</style>
