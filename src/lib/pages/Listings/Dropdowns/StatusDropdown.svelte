<script lang="ts">
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';

	export let showContent: boolean;
</script>

<Dropdown classes="p-2 px-4 !bg-[#1A1B1E]" {showContent}>
	<div class="flex justify-between w-full">
		<div class="text-neutral-300 text-[15px] font-medium leading-normal text-left">Any Status</div>
		<div class="hover:scale-110 hover:cursor-pointer" on:click={() => (showContent = !showContent)}>
			{#if showContent}
				<ChevronUp />
			{:else}
				<ChevronDown />
			{/if}
		</div>
	</div>
</Dropdown>
