<script lang="ts">
	import ShareIcon from '$lib/assets/svg/ShareIcon.svelte';
	import TrashIcon from '$lib/assets/svg/TrashIcon.svelte';
	import Button from '../../../components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import dummyImg from '$lib/assets/images/dummy-listing-card-img.png';
	import { goto } from '$app/navigation';

	export let address: string;
	export let status: string;

	const items = ['Active', 'Inactive', 'Upcoming'];

	$: showContent = false;

	const handleButtonClick = async () => {
		await goto('/listings/1');
	};
</script>

<Card width="w-fit" height="h-full">
	<div class="rounded-[10px] bg-[#2E2F37] p-3">
		<img class="h-[233px] !w-[292px] rounded-[10px] object-cover" src={dummyImg} alt="" />
	</div>
	<div class="flex items-center justify-between pb-[24px] pt-[1.125rem]">
		<p class="text-base font-semibold leading-[15px]">{address}</p>
		<div class="flex gap-x-[14px]">
			<ShareIcon />
			<TrashIcon />
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
