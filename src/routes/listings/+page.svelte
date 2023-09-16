<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
  import ArrowLeft from '$lib/icons/Arrow/ArrowLeft.svelte';
  import {
    createListingFx,
    getPropertyListingDescriptionFx,
  } from '$store/listings';
  import { $newListing as newListing } from '$store/listings';
  import { $user as user } from '$store/user';
  import { type ToastSettings, toastStore } from '@skeletonlabs/skeleton';
  import type { Listing } from '$types/models';
  import { onDestroy, onMount } from 'svelte';

  let propertyAddress = '';
  let keyInfo = '';
  let scroll: number;
  let pageState: 'step1' | 'step2' = 'step1';
  $: propertyDescription = $newListing?.propertyDescription;
  $: loading = false;

  const handleListingCreate = async () => {
    loading = true;

    if (!$newListing?.propertyDescription && pageState === 'step2') {
      pageState = 'step1';
      return;
    }

    if ($newListing && propertyDescription && $user) {
      const listingToCreate: Listing = {
        address: $newListing.realtyMoleData.addressLine1,
        propertyDescription,
        city: $newListing.realtyMoleData.city,
        state: $newListing.realtyMoleData.state,
        zipCode: $newListing.realtyMoleData.zipCode,
        formattedAddress: $newListing.realtyMoleData.formattedAddress,
        bedrooms: $newListing.realtyMoleData.bedrooms,
        county: $newListing.realtyMoleData.county || '',
        legalDescription: $newListing.realtyMoleData.legalDescription || '',
        squareFootage: $newListing.realtyMoleData.squareFootage,
        subdivision: $newListing.realtyMoleData.subdivision || '',
        yearBuilt: $newListing.realtyMoleData.yearBuilt,
        bathrooms: $newListing.realtyMoleData.bathrooms,
        features: $newListing.realtyMoleData.features,
        owner: $newListing.realtyMoleData.owner || JSON.parse('{}'),
        propertyTaxes:
          $newListing.realtyMoleData.propertyTaxes || JSON.parse('{}'),
        lastSaleDate: $newListing.realtyMoleData.lastSaleDate || '',
        lotSize: $newListing.realtyMoleData.lotSize,
        propertyType: $newListing.realtyMoleData.propertyType,
        userId: $user.id,
      };
      try {
        await createListingFx(listingToCreate);
      } catch {
      } finally {
        loading = false;
      }
    }
  };

  const handlePropertyDescription = async () => {
    loading = true;
    if (propertyAddress.length === 0) {
      const toast: ToastSettings = {
        message: 'Please enter a valid property address',
        background: 'variant-filled-error',
      };
      toastStore.trigger(toast);
      return;
    }
    try {
      await getPropertyListingDescriptionFx({
        address: propertyAddress,
        keyInfo,
      });
      pageState = 'step2';
    } catch {
    } finally {
      loading = false;
    }
  };

  onDestroy(() => (pageState = 'step1'));

  onMount(() => (pageState = 'step1'));
</script>

<svelte:window bind:scrollX={scroll} />
<div class="w-full flex flex-col justify-center h-full items-center relative">
  {#if pageState === 'step2'}
    <div
      class="absolute top-6 left-6 hover:cursor-pointer"
      on:click={() => (pageState = 'step1')}
      on:keydown={() => {}}
    >
      <ArrowLeft />
    </div>
  {/if}

  {#if !loading}
    {#if !$newListing && pageState === 'step1'}
      <h1 class="text-3xl">Here's How it works</h1>
      <p class="w-1/2 mt-12 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div class="mt-12 w-1/2">
        <div>
          <Input
            label="Property Address"
            placeholder="Property Address"
            bind:value={propertyAddress}
            type="text"
          />
        </div>
        <div class="mt-8">
          <Input
            label="Key Info"
            placeholder="Key Info"
            bind:value={keyInfo}
            type="textarea"
          />
        </div>
        <Button
          label="Boost"
          variant="variant-filled-secondary"
          onClick={handlePropertyDescription}
          classes="w-full mt-4"
        />
      </div>
    {/if}

    {#if $newListing && pageState === 'step2' && propertyDescription}
      <div class="w-3/4" id="results">
        <h1 class="text-3xl">10044 W Springdale Ct</h1>
        <h1 class="text-3xl mb-8 mt-12">Property Description</h1>
        <div>
          <Input
            label=""
            placeholder="Property Address"
            bind:value={propertyDescription}
            type="textarea"
            rows={20}
          />
        </div>
        <Button
          label="Create Listing"
          variant="variant-filled-secondary"
          onClick={handleListingCreate}
          classes="w-full mt-4"
        />
      </div>
    {/if}
  {/if}
  {#if loading}
    <div class="w-full h-1/5 flex justify-center items-center">
      <ProgressRadial />
    </div>
  {/if}
</div>
