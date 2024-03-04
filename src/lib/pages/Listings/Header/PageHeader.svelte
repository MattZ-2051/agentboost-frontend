<script lang="ts">
	export let selected: Record<string, { selected: boolean; href: string }>;

	const handleClick = (item: string) => {
		for (const item in selected) {
			selected[item].selected = false;
		}

		selected[item].selected = true;
	};
</script>

<div class="flex h-full w-full items-center justify-center gap-x-6">
	<a
		on:click={() => handleClick('details')}
		href={selected.details.href}
		class={`${selected.details.selected ? '!text-[#49E8ED]' : ''}`}>Property details</a
	>
	<a
		on:click={() => handleClick('comp')}
		href={selected.comp.href}
		class={`${selected.comp.selected ? '!text-[#49E8ED]' : ''}`}>Comparable properties</a
	>
	<a
		on:click={() => handleClick('insights')}
		href={selected.insights.href}
		class={`${selected.insights.selected ? '!text-[#49E8ED]' : ''}`}>Insights</a
	>
	<a
		on:click={() => handleClick('poi')}
		href={selected.poi.href}
		class={`${selected.poi.selected ? '!text-[#49E8ED]' : ''}`}>Nearby POI</a
	>
	<a
		on:click={() => handleClick('marketing')}
		href={selected.marketing.href}
		class={`${selected.marketing.selected ? '!text-[#49E8ED]' : ''}`}>Marketing Content</a
	>
</div>

<style lang="postcss">
	a {
		color: #8e8e8e;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
	}

	a:hover {
		color: #49e8ed;
	}
</style>
