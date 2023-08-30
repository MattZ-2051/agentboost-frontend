<script lang="ts">
  import { AppShell } from '@skeletonlabs/skeleton';
  import Sidebar from '../Sidebar/Sidebar.svelte';
  import Header from '../Header/Header.svelte';
  import type { ComponentEvents } from 'svelte';
  import { page } from '$app/stores';

  function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
    // console.log(event.currentTarget.scrollTop);
  }

  $: hideSidebar =
    $page.url.pathname.includes('home') ||
    $page.url.pathname.includes('signup') ||
    $page.url.pathname.includes('login') ||
    $page.url.pathname.length === 1;
</script>

{#if !hideSidebar}
  <div class="h-screen">
    <AppShell
      on:scroll={scrollHandler}
      slotSidebarLeft="w-0 lg:w-64"
      regionPage="h-full"
    >
      <svelte:fragment slot="header">
        <Header />
      </svelte:fragment>
      <svelte:fragment slot="sidebarLeft">
        <div id="sidebar-left" class="h-full">
          <Sidebar />
        </div>
      </svelte:fragment>
      <div class="p-12 h-full">
        <slot />
      </div>
      <!-- <svelte:fragment slot="footer"><Footer /></svelte:fragment> -->
    </AppShell>
  </div>
{:else}
  <AppShell on:scroll={scrollHandler} slotSidebarLeft="w-0 lg:w-64">
    <svelte:fragment slot="header">
      <Header />
    </svelte:fragment>
    <div class="p-12 h-full">
      <slot />
    </div>
  </AppShell>
{/if}
