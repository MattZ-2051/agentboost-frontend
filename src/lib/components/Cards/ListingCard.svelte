<script lang="ts">
	import ShareIcon from '$lib/assets/svg/ShareIcon.svelte';
	import TrashIcon from '$lib/assets/svg/TrashIcon.svelte';
	import Button from '../Button/Button.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';
	import Dropdown from '../Dropdown/Dropdown.svelte';
	import { fade } from 'svelte/transition';
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';

	export let address: string;
	export let status: string;

	const items = ['Active', 'Inactive', 'Upcoming'];

	let activeTab = 0;
	$: showContent = false;
</script>

<div
	class="card !bg-[#171A1C] w-fit h-full p-4 rounded-[10px] shadow border border-gray-800 border-opacity-20"
>
	<div class="bg-[#25282D] p-3 rounded-[10px]">
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
	<Dropdown {showContent} classes="px-[18px] py-3 !h-[48px] bg-[#25282D]">
		<div class="flex justify-between w-full">
			<div class="text-neutral-300 text-[15px] font-medium leading-normal text-left">
				{status}
			</div>
			<div
				class="hover:scale-110 hover:cursor-pointer"
				on:click={() => (showContent = !showContent)}
			>
				{#if showContent}
					<ChevronUp />
				{:else}
					<ChevronDown />
				{/if}
			</div>
		</div>
		<div
			slot="content"
			class="flex-col flex h-full w-full"
			transition:fade={{ delay: 0, duration: 100 }}
		>
			{#each items as item, i}
				<div
					class={`flex items-center gap-x-2  border-neutral-700 py-[13px] h-full ${
						i === items.length - 1 ? '' : 'border-b'
					}`}
				>
					<div class="w-[18px] h-[18px] relative">
						<div
							class="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border border-gray-500 hover:cursor-pointer hover:scale-110"
							on:click={() => (activeTab = i)}
						/>
						{#if activeTab === i}
							<div
								class="w-3 h-3 left-[3px] top-[3px] absolute bg-gradient-to-br from-blue-500 via-blue-500 to-teal-300 rounded-full"
							/>
						{/if}
					</div>
					<p class="leading-normal text-[15px] text-neutral-300">
						{item}
					</p>
				</div>
			{/each}
		</div>
	</Dropdown>
	<div class="mt-4">
		<Button
			label="View Listing"
			variant="variant-app-primary"
			classes="!h-[48px]"
			bg={'bg-[#171A1C]'}
		/>
	</div>
</div>
