<script lang="ts">
	// Your selected Skeleton theme:

	import '../app.postcss';
	import AppShell from '$lib/layout/AppShell/AppShell.svelte';
	import Sidebar from '$lib/layout/Sidebar/Sidebar.svelte';
	import { Modal, getDrawerStore } from '@skeletonlabs/skeleton';
	import { Drawer } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import NewListingDrawer from '$lib/pages/Listings/NewListingDrawer.svelte';
	import NewBuyersDrawer from '$lib/pages/Buyers/Drawers/NewBuyersDrawer.svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	initializeStores();

	const drawerStore = getDrawerStore();

	const fbId = import.meta.env?.VITE_FB_APP_ID;
	window.fbAsyncInit = function () {
		FB.init({
			appId: fbId,
			xfbml: true,
			version: 'v18.0'
		});
	};
	(function () {
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/en_US/sdk.js';
		e.async = true;
		// document.getElementById('fb-root').appendChild(e);
	})();
</script>

<div class="dark bg-surface-500" data-theme="agentboost-theme">
	<Toast position="t" />
	<Modal />
	<Drawer position="right" width="w-[380px]">
		{#if $drawerStore.id === 'nav-link'}
			<Sidebar />
		{:else if $drawerStore.id === 'new-listing'}
			<NewListingDrawer />
		{:else if $drawerStore.id === 'new-buyer'}
			<NewBuyersDrawer />
		{/if}
	</Drawer>
	<AppShell>
		<slot />
	</AppShell>
</div>
