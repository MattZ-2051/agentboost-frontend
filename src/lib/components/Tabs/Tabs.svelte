<script lang="ts">
	import type { TabItems } from '$types/components';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let items: TabItems;

	const handleNav = async (url: string | undefined) => {
		url && (await goto(url));
	};

	onMount(async () => {});
</script>

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
				class="hover:text-primary-500 hover:cursor-pointer hover:border-b hover:border-b-primary-500 py-4 relative z-10"
			>
				<p>{item.label}</p>
			</div>
		{:else}
			<div
				class="hover:text-primary-500 hover:cursor-pointer hover:border-b hover:border-b-primary-500 py-4 relative z-10"
			>
				<p>{item.label}</p>
			</div>
		{/if}
	{/each}
	<div class="w-full bg-[#252A2D] absolute bottom-0 h-[1px]" />
</div>
