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

<div class={`${classes} text-[#C6C7CD] rounded-[10px] relative bg-[#25282D]`}>
	<p class="font-medium leading-normal text-left whitespace-nowrap">
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
			class={`${dropdownClasses} absolute top-[3.5rem] right-0 z-20 bg-[#25282D] w-full h-fit px-[18px] py-3 rounded-[10px] dropdown`}
		>
			<div class="flex-col flex h-full w-full" transition:fade={{ delay: 0, duration: 100 }}>
				{#each items as item, i}
					<div
						class={`flex items-center gap-x-2  border-neutral-700 py-[13px] h-full ${
							i === items.length - 1 ? '' : 'border-b'
						}`}
					>
						<div class="w-[18px] h-[18px] relative">
							<div
								class="w-[18px] h-[18px] left-0 top-0 absolute rounded-full border border-gray-500 hover:cursor-pointer hover:scale-110"
								on:click={() => handleClick(i)}
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
		</div>
	{/if}
</div>

<style lang="postcss">
	.dropdown {
		box-shadow: 15px 15px 20px 0px rgba(0, 0, 0, 0.6);
	}
</style>
