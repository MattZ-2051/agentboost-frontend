<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
	import DollarIcon from '$lib/assets/svg/DollarIcon.svelte';
	import EditIcon from '$lib/assets/svg/EditIcon.svelte';
	import RadioButton from '$lib/components/RadioButton/RadioButton.svelte';
	import LocationIconFilled from '$lib/assets/svg/Location/LocationIconFilled.svelte';
	import dummyImg from '$lib/assets/images/dummy-listing-img.png';
</script>

<Card width="w-[297px]" height="h-full">
	<div class="relative">
		<div
			class="absolute right-8 top-6 flex h-[38px] w-[113px] items-center rounded-[10px] bg-[#22272ab3] px-2.5 py-[7px]"
		>
			<p class="mr-2 text-[13px] font-bold">Active</p>
			<SlideToggle />
		</div>
		<div class="rounded-[10px] bg-[#1E2225] p-3">
			<img class="h-[233px] w-[292px] rounded-[10px] object-cover" src={dummyImg} alt="" />
		</div>
	</div>
	<div class="my-5 flex items-center gap-x-2">
		<LocationIconFilled />
		<p class="text-base font-semibold leading-[15px] text-white">10044 W Springdale Ct</p>
	</div>
	<div
		class="flex h-10 w-[265px] items-center justify-between rounded-[10px] bg-[#25282D] px-4 py-2 text-[#CFD0D5]"
	>
		<div class="flex items-center gap-x-4">
			<DollarIcon />
			<div class="text-xl font-medium leading-normal text-[#CFD0D5]">379,900</div>
		</div>
		<EditIcon />
	</div>
	<div class="mb-4 mt-8 flex gap-x-4">
		<RadioButton selected={true} label="Pending" />
		<RadioButton selected={false} label="Sold" />
	</div>
</Card>
