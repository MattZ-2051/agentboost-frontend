<script lang="ts">
	import type { TabItems } from '$types/components';
	import { goto } from '$app/navigation';

	export let items: TabItems;
	export let selectedItem: string = items[0].label;
	export let classes: string = '';

	const handleNav = async (url: string | undefined) => {
		url && (await goto(url));
	};

	const handleTabSelect = (item: string) => {
		selectedItem = item;
	};
</script>

<div class="flex h-full w-full flex-col">
	<div class="relative flex gap-x-8 text-base">
		{#each items as item, index}
			{#if item.href}
				<!-- <TabAnchor
        bind:group={tabSet}
        href={item.href}
        name={item.name}
        value={index}
        active="text-black"
        selected={tabSet === index}
      >
        <span class="text-2xl">{item.label}</span>
      </TabAnchor> -->
				<div
					on:click={() => handleNav(item.href)}
					class={`${classes} relative z-10 border-b border-b-transparent pb-4 text-[#8E8E8E] hover:cursor-pointer hover:border-b hover:border-b-primary-500 hover:text-primary-500`}
				>
					<p>{item.label}</p>
				</div>
			{:else}
				<div
					class={`${classes} ${
						selectedItem === item.label ? 'border-b !border-b-primary-500 !text-primary-500' : ''
					} relative z-10 border-b border-b-transparent pb-4 text-[#8E8E8E] hover:cursor-pointer hover:border-b hover:border-b-primary-500 hover:text-primary-500`}
					on:click={() => handleTabSelect(item.label)}
				>
					<p>{item.label}</p>
				</div>
			{/if}
		{/each}
	</div>
	<div class="h-[1px] w-full bg-[#252A2D]" />
	<div>
		<slot name="content" />
	</div>
</div>
