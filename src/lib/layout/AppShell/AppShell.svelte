<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { ComponentEvents } from 'svelte';
	import LandingHeader from '../Header/LandingHeader/LandingHeader.svelte';
	import LandingFooter from '../Footer/LandingFooter/LandingFooter.svelte';
	import AppHeader from '../Header/AppHeader/AppHeader.svelte';
	import { page } from '$app/stores';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// console.log(event.currentTarget.scrollTop);
	}

	$: isLanding = $page.url.pathname.length === 1;
</script>

<AppShell
	slotHeader="sticky"
	on:scroll={scrollHandler}
	regionPage="h-full justify-center items-center"
	slotSidebarLeft="w-0 lg:w-0"
>
	{#if isLanding}
		<LandingHeader />
	{:else}
		<AppHeader />
	{/if}
	<div class={`h-full ${isLanding ? `` : `max-w-screen-desktop w-screen min-h-screen  px-12`}`}>
		<slot />
	</div>
	{#if isLanding}
		<LandingFooter />
	{/if}
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
