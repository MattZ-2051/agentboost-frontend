<script lang="ts">
	import BedIcon from '$lib/assets/svg/BedIcon.svelte';
	import BathTubIcon from '$lib/assets/svg/BathTubIcon.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';

	import type { PropertyInfo } from './types';
	import EngineerIcon from '$lib/assets/svg/EngineerIcon.svelte';
	import LotSizeIcon from '$lib/assets/svg/LotSizeIcon.svelte';
	import PriceTagIcon from '$lib/assets/svg/PriceTagIcon.svelte';
	import DollarIcon from '$lib/assets/svg/DollarIcon.svelte';

	export let propertyInfo: PropertyInfo;

	const chipMap: { value: number | string; icon: any }[] = [
		{ value: `Bedrooms ${propertyInfo.bedrooms}`, icon: 'bedIcon' },
		{
			value: `Year Built ${propertyInfo.yearBuilt}`,
			icon: 'yearBuilt'
		},
		{
			value: `Bathrooms ${propertyInfo.bathrooms}`,
			icon: 'bathrooms'
		},
		{
			value: `${propertyInfo.lotSize}`,
			icon: 'lotSize'
		},
		{
			value: `${propertyInfo.price}`,
			icon: 'price'
		}
	];
</script>

{#each chipMap as item}
	<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]" hover={true}>
		<div class="flex w-full items-center justify-center gap-x-2">
			{#if item.icon === 'bedIcon'}
				<BedIcon />
			{:else if item.icon === 'yearBuilt'}
				<EngineerIcon />
			{:else if item.icon === 'bathrooms'}
				<BathTubIcon />
			{:else if item.icon === 'lotSize'}
				<LotSizeIcon />
			{:else if item.icon === 'price'}
				<DollarIcon />
			{/if}
			<p>{item.value}</p>
		</div>
	</Chip>
{/each}
