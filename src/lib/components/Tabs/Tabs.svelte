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
		console.log('selectedItem', selectedItem);
	};
</script>

<div class="flex flex-col w-full h-full">
	<div class="flex gap-x-8 relative text-base">
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
					class={`${classes} hover:text-primary-500 border-b border-b-transparent hover:cursor-pointer hover:border-b hover:border-b-primary-500 pb-4 relative z-10 text-[#8E8E8E]`}
				>
					<p>{item.label}</p>
				</div>
			{:else}
				<div
					class={`${classes} ${
						selectedItem === item.label ? '!text-primary-500 border-b !border-b-primary-500' : ''
					} hover:text-primary-500 border-b border-b-transparent hover:cursor-pointer hover:border-b hover:border-b-primary-500 pb-4 relative z-10 text-[#8E8E8E]`}
					on:click={() => handleTabSelect(item.label)}
				>
					<p>{item.label}</p>
				</div>
			{/if}
		{/each}
	</div>
	<div class="w-full bg-[#252A2D] h-[1px]" />
	<div>
		<slot name="content" />
	</div>
</div>
