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
	import ModalForm from '$lib/components/Modals/ModalForm.svelte';
	import ModalConfirm from '$lib/components/Modals/ModalConfirm.svelte';
	import NewListingDrawer from '$lib/pages/Listings/Drawers/NewListingDrawer.svelte';
	import NewBuyersDrawer from '$lib/pages/Buyers/Drawers/NewBuyersDrawer.svelte';
	import { onMount } from 'svelte';
	import { $user as user } from '$store/user';
	import NewCampaignModal from '$lib/components/Modals/NewCampaignModal.svelte';
	import SocialAccountModal from '$lib/components/Modals/SocialAccountModal.svelte';
	import DeleteListingModal from '$lib/pages/Listings/Modals/DeleteListingModal.svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	initializeStores();

	const modalRegistry: any = {
		// Set a unique modal ID, then pass the component reference
		modalForm: { ref: ModalForm },
		modalConfirm: { ref: ModalConfirm },
		newCampaign: { ref: NewCampaignModal },
		socialAccounts: { ref: SocialAccountModal },
		deleteListing: { ref: DeleteListingModal }
		// ...
	};

	const drawerStore = getDrawerStore();

	console.log('user', $user);
</script>

<AppShell>
	<Toast position="t" zIndex="z-[9999]" />
	<Modal background="bg-[#1A1A1A]" padding="p-6" components={modalRegistry} />
	<Drawer position="right" width="w-[380px]">
		{#if $drawerStore.id === 'nav-link'}
			<Sidebar />
		{:else if $drawerStore.id === 'new-listing'}
			<NewListingDrawer />
		{:else if $drawerStore.id === 'new-buyer'}
			<NewBuyersDrawer />
		{/if}
	</Drawer>
	<slot />
</AppShell>
