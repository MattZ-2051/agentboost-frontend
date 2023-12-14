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

<div class="bg-[#151719] rounded-[20px] w-full h-full py-12 px-8 flex flex-col">
	<div>
		<div class="flex items-center gap-x-2 w-full h-full">
			<InfoIconHover />
			<p class="text-white text-2xl font-semibold leading-[normal]">Showing Navigation</p>
		</div>
		<div class="mt-12 flex gap-x-8">
			<div class="w-2/5">
				<div class="flex justify-between items-center">
					<p class="text-[#CFD0D5] font-semibold text-sm">Select address</p>
					<p class="text-sm font-semibold text-primary-500">Select all</p>
				</div>
				<div class="flex flex-col gap-y-4 mt-2">
					<AddressLocation />
					<AddressLocation />
					<AddressLocation />
				</div>
				<div class="mt-8">
					<p class="text-[#CFD0D5] text-[15px] font-semibold">Choose Start Time</p>
					<div class="flex items-center justify-between gap-x-4 mt-2">
						<RadioDropdown
							label="Time"
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
