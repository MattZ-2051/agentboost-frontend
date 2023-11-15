<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { ComponentEvents } from 'svelte';
	import LandingHeader from '../Header/LandingHeader/LandingHeader.svelte';
	import LandingFooter from '../Footer/LandingFooter.svelte';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		// console.log(event.currentTarget.scrollTop);
	}
</script>

<AppShell
	slotHeader="sticky"
	on:scroll={scrollHandler}
	regionPage="h-full"
	slotSidebarLeft="w-0 lg:w-0"
>
	<LandingHeader />
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
