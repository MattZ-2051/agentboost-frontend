<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import CloseIcon from '$lib/assets/svg/CloseIcon/CloseIconWhite.svelte';
	import HomeIcon from '$lib/assets/svg/HomeIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	$: showAddress2 = false;
	$: showAddress3 = false;

	const handleAdd = () => {
		if (showAddress2) {
			showAddress3 = true;
		} else {
			showAddress2 = true;
		}
	};
</script>

<div class="w-full p-6">
	<div class="flex justify-between items-center">
		<div class="flex items-center">
			<HomeIcon />
			<h1 class="ml-2">Create New Comparison</h1>
		</div>
		<div on:click={() => drawerStore.close()}>
			<CloseIcon />
		</div>
	</div>
	<div class="w-[332px] h-[0px] border border-[#2E3438] my-6" />
	<p class="text-base font-normal leading-normal">Here's how it works</p>
	<p class="text-opacity-60 text-white text-sm font-light leading-[1.75] pt-4">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>
	<div class="mt-8 flex flex-col gap-y-8">
		<Input
			label="Buyers Name"
			value=""
			type="text"
			placeholder="Buyer name here"
			classes="w-[332px] border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
		/>
		<Input
			label="Property Address 1"
			value=""
			type="text"
			placeholder="Buyer name here"
			classes="w-[332px] border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
		/>
		{#if showAddress2}
			<Input
				label="Property Address 2"
				value=""
				type="text"
				placeholder="Buyer name here"
				classes="w-[332px] border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
			/>
		{/if}
		{#if showAddress3}
			<Input
				label="Property Address 3"
				value=""
				type="text"
				placeholder="Buyer name here"
				classes="w-[332px] border-none h-12 px-[18px] py-3 !bg-[#25282D] rounded-[10px] !mt-2 placeholder-[#4E545F]"
			/>
		{/if}
		<div class="flex gap-x-2 justify-center w-full mb-12">
			<div on:click={handleAdd}>
				<AddIcon />
			</div>
			<p>Add New Address</p>
		</div>
		<Button
			label="Boost"
			variant="variant-app-primary"
			bg="!bg-[#171A1C]"
			classes="!w-[331px] !h-[48px]"
		/>
	</div>
</div>
