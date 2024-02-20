<script lang="ts">
	import InfoIconHover from '$lib/assets/svg/InfoIconHover.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import Map from '$lib/components/Map/Map.svelte';
	import AddressLocation from './AddressLocation.svelte';
	import RealtorInfo from './RealtorInfo.svelte';

	$: showContent = false;

	const items = ['15 minutes', '30 minutes', '45 minutes', '1 hour'];
</script>

<div class="flex h-full w-full flex-col rounded-[20px] bg-[#151719] p-6">
	<div>
		<div class="flex h-full w-full items-center gap-x-2">
			<InfoIconHover />
			<p class="text-2xl font-semibold leading-[normal] text-white">Showing Navigation</p>
		</div>
		<div class="mt-12 flex gap-x-8">
			<div class="w-2/5">
				<div class="flex items-center justify-between">
					<p class="text-sm font-semibold text-[#CFD0D5]">Select address</p>
					<p class="text-sm font-semibold text-primary-500">Select all</p>
				</div>
				<div class="mt-2 flex flex-col gap-y-4">
					<AddressLocation />
					<AddressLocation />
					<AddressLocation />
				</div>
				<div class="mt-8">
					<p class="text-[15px] font-semibold text-[#CFD0D5]">Choose Start Time</p>
					<div class="mt-2 flex items-center justify-between gap-x-4">
						<RadioDropdown
							{items}
							classes="w-[253px] h-[48px] px-[18px] py-[12px] flex justify-between"
							{showContent}
						/>
						<div>
							<Button
								variant="variant-app-primary"
								bg="bg-[#151719] !h-[48px] !w-[205px]"
								classes=""
								label="Begin Navigation"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="w-3/5">
				<Map mapSize="w-full h-[600px]" />
			</div>
		</div>
		<div class="mt-20 flex w-full items-center justify-between">
			<RealtorInfo />
			<RealtorInfo />
			<RealtorInfo />
		</div>
	</div>
</div>
