<script lang="ts">
	import InfoIconHover from '$lib/assets/svg/InfoIconHover.svelte';
	import Map from '$lib/components/Map/Map.svelte';
	import AddressLocation from './AddressLocation.svelte';
</script>

<div class="bg-[#151719] rounded-[20px] w-full h-full py-12 px-8">
	<div class="flex items-center gap-x-2 w-full h-full">
		<InfoIconHover />
		<p class="text-white text-2xl font-semibold leading-[normal]">Showing Navigation</p>
	</div>
	<div class="mt-12 flex gap-x-8">
		<div class="w-1/3">
			<div class="flex justify-between items-center">
				<p class="text-[#CFD0D5] font-semibold text-sm">Select address</p>
				<p class="text-sm font-semibold text-primary-500">Select all</p>
			</div>
			<AddressLocation />
		</div>
		<div class="w-2/3">
			<Map mapSize="w-full h-[600px]" />
		</div>
	</div>
</div>
