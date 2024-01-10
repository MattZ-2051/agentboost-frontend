<script lang="ts">
	``;
	import type { ChipVariant } from '$types/components';
	export let variant: ChipVariant;
	export let classes: string = '';
	export let onClick: (() => void) | undefined = undefined;
	export let hover: boolean = false;
</script>

<span on:click={onClick} class={`${hover ? 'chip' : ''} ${variant} ${classes}`} on:click={onClick}>
	<slot />
</span>

<style>
	.variant-app-primary {
		background: #1d2024;
		color: #cfd0d5 !important;
		padding: 10px;
		display: flex;
		column-gap: 10px;
		width: fit-content;
		height: 34px;
		font-size: 13px;
		border-radius: 10px;
	}
</style>
