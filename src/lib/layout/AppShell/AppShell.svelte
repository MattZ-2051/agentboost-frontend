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
	regionPage="justify-center items-center overflow-hidden"
	slotSidebarLeft="w-0 lg:w-0"
>
	{#if isLanding}
		<LandingHeader />
	{:else}
		<AppHeader />
	{/if}
	<div class={`h-full ${isLanding ? `` : `max-w-screen-desktop min-w-screen px-12`}`}>
		<slot />
	</div>
	{#if isLanding}
		<LandingFooter />
	{/if}
</AppShell>
