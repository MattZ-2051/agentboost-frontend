<script lang="ts">
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';
	import { fade } from 'svelte/transition';

	export let showContent: boolean = false;
	export let classes: string;
	export let items: string[];
	export let iconSize: number = 24;
	export let dropdownClasses: string = '';

	$: activeTab = 0;
	$: activeItem = items[0];
	const handleClick = (tabIndex: number) => {
		activeTab = tabIndex;
		activeItem = items[tabIndex];
		showContent = false;
	};
</script>

<div class={`${classes} relative rounded-[10px] bg-[#25282D] text-[#C6C7CD]`}>
	<p class="whitespace-nowrap text-left font-medium leading-normal">
		{activeItem}
	</p>
	<div class="hover:scale-110 hover:cursor-pointer" on:click={() => (showContent = !showContent)}>
		{#if showContent}
			<ChevronUp width={iconSize} height={iconSize} />
		{:else}
			<ChevronDown width={iconSize} height={iconSize} />
		{/if}
	</div>
	{#if showContent}
		<div
			class={`${dropdownClasses} dropdown absolute right-0 top-[3.5rem] z-20 h-fit w-full rounded-[10px] bg-[#25282D] px-[18px] py-3`}
		>
			<div class="flex h-full w-full flex-col" transition:fade={{ delay: 0, duration: 100 }}>
				{#each items as item, i}
					<div
						class={`flex h-full items-center  gap-x-2 border-neutral-700 py-[13px] ${
							i === items.length - 1 ? '' : 'border-b'
						}`}
					>
						<div class="relative h-[18px] w-[18px]">
							<div
								class="absolute left-0 top-0 h-[18px] w-[18px] rounded-full border border-gray-500 hover:scale-110 hover:cursor-pointer"
								on:click={() => handleClick(i)}
							/>
							{#if activeTab === i}
								<div
									class="absolute left-[3px] top-[3px] h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-teal-300"
								/>
							{/if}
						</div>
						<p class="text-[15px] leading-normal text-neutral-300">
							{item}
						</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.dropdown {
		box-shadow: 15px 15px 20px 0px rgba(0, 0, 0, 0.6);
	}
</style>
