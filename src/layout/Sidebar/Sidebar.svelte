<script lang="ts">
  import { AppRail } from '@skeletonlabs/skeleton';
  import Avatar from '$lib/components/Avatar/Avatar.svelte';
  import { page } from '$app/stores';
  import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
  import Chip from '$lib/components/Chip/Chip.svelte';
  import {
    modalStore,
    type ModalSettings,
    type ModalComponent,
  } from '@skeletonlabs/skeleton';
  import CardModal from '$lib/components/Modals/CardModal/CardModal.svelte';
  import { $user as user } from '$store/user';

  const modalComponent: ModalComponent = {
    // Pass a reference to your custom component
    ref: CardModal,
    // Add the component properties as key/value pairs
    props: {},
    // Provide a template literal for the default component slot
    slot: '<p>Skeleton</p>',
  };
  // Provide the modal settings
  const modal: ModalSettings = {
    type: 'component',
    component: modalComponent,
  };

  const handleModal = () => {
    modalStore.trigger(modal);
  };
  $: pathName = $page.url.pathname;
</script>

<AppRail height="h-full" width="w-full" background="bg-opacity-50 bg-black">
  <div class="p-4">
    <div class="py-4 flex justify-between w-full items-center">
      <Avatar />
      <h1>{$user?.email}</h1>
    </div>
    <hr />
    {#if pathName.includes('listings')}
      <div class="mt-8">
        <p class="text-xl mt-4">My Listings</p>
        <div class="flex flex-col gap-y-5 py-4">
          <Chip
            title="Listing 1"
            variant="variant-filled"
            onClick={handleModal}
          />
          <Chip
            title="Listing 2"
            variant="variant-filled"
            onClick={handleModal}
          />
          <Chip
            title="Listing 3"
            variant="variant-filled"
            onClick={handleModal}
          />
        </div>
      </div>
    {/if}
    {#if pathName.includes('buyers')}
      <div class="mt-8">
        <p class="text-xl mt-4">My Buyers</p>
        <div class="flex flex-col gap-y-5 py-4">
          <Chip
            title="Buyer 1"
            variant="variant-filled"
            onClick={handleModal}
          />
          <Chip
            title="Buyer 2"
            variant="variant-filled"
            onClick={handleModal}
          />
          <Chip
            title="Buyer 3"
            variant="variant-filled"
            onClick={handleModal}
          />
        </div>
      </div>
    {/if}
    {#if pathName.includes('marketing')}
      <p class="text-xl mt-4">Connected Accounts</p>
      <div class="w-full flex items-center justify-center mt-8">
        <div class="">
          <SlideToggle label="Twitter" />
          <SlideToggle label="Instagram" />
          <SlideToggle label="Facebook" />
        </div>
      </div>
    {/if}
  </div>
</AppRail>
