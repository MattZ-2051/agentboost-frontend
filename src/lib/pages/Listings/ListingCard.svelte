<script lang="ts">
	import ShareIcon from '$lib/assets/svg/ShareIcon.svelte';
	import TrashIcon from '$lib/assets/svg/TrashIcon.svelte';
	import Button from '../../components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';

	export let address: string;

	const items = ['Active', 'Inactive', 'Upcoming'];

	$: showContent = false;
</script>

<Card width="w-[297px]" height="h-full">
	<div class="bg-[#1E2225] p-3 rounded-[10px]">
		<img
			class="w-[292px] h-[233px] rounded-[10px]"
			src="https://via.placeholder.com/292x233"
			alt=""
		/>
	</div>
	<div class="flex justify-between items-center pt-[1.125rem] pb-[24px]">
		<p class="text-base leading-[15px]">{address}</p>
		<div class="flex gap-x-[14px]">
			<ShareIcon />
			<TrashIcon />
		</div>
	</div>
	<RadioDropdown
		label="Active"
		{items}
		classes="w-full h-[48px] px-[18px] py-[12px]"
		{showContent}
	/>
	<div class="mt-4">
		<Button
			label="View Listing"
			variant="variant-app-primary"
			classes="!h-[48px]"
			bg={'bg-[#171A1C]'}
		/>
	</div>
</Card>
