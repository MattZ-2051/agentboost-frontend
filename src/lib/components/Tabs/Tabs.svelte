<script lang="ts">
  import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  import type { TabItems } from '$types/components';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  let tabSet: number;

  export let items: TabItems;

  const handleNav = async (url: string | undefined) => {
    url && (await goto(url));
  };

  onMount(async () => {
    const prevTab = $page.url.pathname.split('/')[1];

    for (let i = 0; i < items.length; i++) {
      if (items[i].name === prevTab) {
        tabSet = i;
      }
    }
  });
</script>

<TabGroup
  justify="justify-between"
  active="text-secondary-400"
  padding="py-4 px-20"
>
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
      <Tab
        on:click={() => handleNav(item.href)}
        bind:group={tabSet}
        name={item.name}
        value={index}
      >
        <span class="text-xl">{item.label}</span></Tab
      >
    {:else}
      <Tab bind:group={tabSet} name={item.name} value={index}>
        <span class="text-xl">{item.label}</span></Tab
      >
    {/if}
  {/each}
</TabGroup>
