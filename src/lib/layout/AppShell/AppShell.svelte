<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../Header/Header/Header.svelte';
	import type { ComponentEvents } from 'svelte';
	import { page } from '$app/stores';
	import LandingHeader from '../Header/LandingHeader/LandingHeader.svelte';
	import LandingFooter from '../Footer/LandingFooter.svelte';
	import Sidebar from '../Sidebar/Sidebar.svelte';

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

<AppShell
	slotHeader="sticky"
	on:scroll={scrollHandler}
	regionPage="h-full"
	slotSidebarLeft="w-0 lg:w-0"
>
	<LandingHeader />
	<!-- <svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="h-full bg-blue-500 p-4">
			<Sidebar />
		</div>
	</svelte:fragment> -->
	<div class="h-full">
		<slot />
	</div>
	<LandingFooter />
</AppShell>
<!-- {:else} -->
<!-- <AppShell on:scroll={scrollHandler} slotSidebarLeft="w-0 ">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<div class="p-12 h-full">
		<slot />
	</div>
</AppShell> -->
