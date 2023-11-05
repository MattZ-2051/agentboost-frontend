<script lang="ts">
  import { AppShell } from '@skeletonlabs/skeleton';
  import Sidebar from '../Sidebar/Sidebar.svelte';
  import Header from '../Header/Header/Header.svelte';
  import type { ComponentEvents } from 'svelte';
  import { page } from '$app/stores';
  import LandingHeader from '../Header/LandingHeader/LandingHeader.svelte';
  import LandingFooter from '../Footer/LandingFooter.svelte';

  function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
    // console.log(event.currentTarget.scrollTop);
  }

  $: hideSidebar =
    $page.url.pathname.includes('home') ||
    $page.url.pathname.includes('signup') ||
    $page.url.pathname.includes('login') ||
    $page.url.pathname.length === 1;
  $: isLanding = $page.url.pathname.length === 1;
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
    </AppShell>
  </div>
{:else if isLanding}
  <AppShell on:scroll={scrollHandler} regionPage="h-full">
    <LandingHeader />
    <div class="h-full">
      <slot />
    </div>
    <svelte:fragment slot="footer"><LandingFooter /></svelte:fragment>
  </AppShell>
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
