<script lang="ts">
	import CloseIcon from '$lib/assets/svg/CloseIcon.svelte';
	import type { ChipVariant } from '$types/components';
	export let title: string;
	export let variant: ChipVariant;
	export let onClick: (() => void) | undefined = undefined;
</script>

<span on:click={onClick} class={`chip ${variant}`} on:click={onClick}>
	{title}
	<span><CloseIcon width={12} height={12} /></span>
</span>

<style>
	.variant-app-primary {
		background: #1d2024;
		color: #cfd0d5;
		padding: 10px;
		display: flex;
		column-gap: 10px;
		width: fit-content;
		height: 34px;
		border-radius: 10px;
	}
</style>
