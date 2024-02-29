<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { ComponentEvents } from 'svelte';
	import LandingHeader from '../Header/LandingHeader/LandingHeader.svelte';
	import LandingFooter from '../Footer/LandingFooter/LandingFooter.svelte';
	import AppHeader from '../Header/AppHeader/AppHeader.svelte';
	import AuthHeader from '../Header/AuthHeader/AuthHeader.svelte';
	import { page } from '$app/stores';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {}

	$: isLanding = $page.url.pathname.length === 1;
	$: isAuth = $page.url.pathname.includes('signup') || $page.url.pathname.includes('login');
</script>

{#if isLanding}
	<LandingHeader />
{:else if isAuth}
	<AuthHeader />
{:else}
	<AppHeader />
{/if}
<div class={`!h-full ${isLanding ? `` : `min-w-screen max-w-screen-desktop px-12`}`}>
	<slot />
</div>
{#if isLanding}
	<LandingFooter />
{/if}
