<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	export let value: number | undefined = undefined;
	export let width: string;
	export let color: string;
	export let stroke: number = 120;
</script>

<ProgressRadial {value} {stroke} {width} meter={color} font={0} track="stroke-[#272B30]">
	{#if value}{value}{/if}</ProgressRadial
>
