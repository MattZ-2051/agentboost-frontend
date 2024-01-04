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
			class="absolute right-8 top-6 bg-[#22272ab3] rounded-[10px] px-2.5 py-[7px] w-[113px] h-[38px] flex items-center"
		>
			<p class="text-[13px] font-bold mr-2">Active</p>
			<SlideToggle />
		</div>
		<div class="bg-[#1E2225] p-3 rounded-[10px]">
			<img class="w-[292px] h-[233px] rounded-[10px] object-cover" src={dummyImg} alt="" />
		</div>
	</div>
	<div class="my-5 flex items-center gap-x-2">
		<LocationIconFilled />
		<p class="text-white text-base leading-[15px] font-semibold">10044 W Springdale Ct</p>
	</div>
	<div
		class="w-[265px] h-10 px-4 py-2 bg-[#25282D] text-[#CFD0D5] rounded-[10px] justify-between items-center flex"
	>
		<div class="flex items-center gap-x-4">
			<DollarIcon />
			<div class="text-[#CFD0D5] text-xl font-medium leading-normal">379,900</div>
		</div>
		<EditIcon />
	</div>
	<div class="mt-8 mb-4 flex gap-x-4">
		<RadioButton selected={true} label="Pending" />
		<RadioButton selected={false} label="Sold" />
	</div>
</Card>
