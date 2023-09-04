<script lang="ts">
  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/skeleton.css';

  import '../app.css';
  import AppShell from '../layout/AppShell/AppShell.svelte';
  import Sidebar from '../layout/Sidebar/Sidebar.svelte';
  import { Modal } from '@skeletonlabs/skeleton';
  import { Drawer } from '@skeletonlabs/skeleton';
  import { Toast } from '@skeletonlabs/skeleton';
  import Tabs from '$lib/components/Tabs/Tabs.svelte';
  import { page } from '$app/stores';
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  import { routes } from './routes';
  import { getUserProfileFx, $user as user } from '$store/user';

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  $: hideTabs =
    $page.url.pathname.includes('signup') ||
    $page.url.pathname.includes('login') ||
    $page.url.pathname.length === 1;
</script>

<div class="dark" data-theme="skeleton">
  <Toast position="t" />
  <Modal />
  <Drawer>
    <Sidebar />
  </Drawer>
  <AppShell>
    {#if !hideTabs}
      <Tabs items={routes} />
    {/if}
    <slot />
  </AppShell>
</div>
