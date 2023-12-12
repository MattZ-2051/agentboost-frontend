<script lang="ts">
	``;
	import type { ChipVariant } from '$types/components';
	export let variant: ChipVariant;
	export let classes: string = '';
	export let onClick: (() => void) | undefined = undefined;
</script>

<span on:click={onClick} class={`chip ${variant} ${classes}`} on:click={onClick}>
	<slot />
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
