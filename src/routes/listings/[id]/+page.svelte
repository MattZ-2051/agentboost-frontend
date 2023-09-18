<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
  import {
    modalStore,
    type ModalSettings,
    type ModalComponent,
  } from '@skeletonlabs/skeleton';
  import CalenderAdd from '$lib/components/Modals/CalenderAdd/CalenderAdd.svelte';
  import { onMount } from 'svelte';
  import { getListingFx, $listing as listing } from '$store/listings';
  import CmaSlider from '$lib/components/CardSlider/CmaSlider.svelte';
  import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
  import GmcSlider from '$lib/components/CardSlider/GmcSlider.svelte';

  const modalComponent: ModalComponent = {
    ref: CalenderAdd,
    props: {},
    slot: '<p>Skeleton</p>',
  };

  const modal: ModalSettings = {
    type: 'component',
    component: modalComponent,
  };

  const handleAddToCalender = () => {
    modalStore.trigger(modal);
  };

  onMount(() => {
    const id = window.location.pathname.split('/')[2];
    getListingFx(id);
  });

  $: cmaLoading = $listing?.cma?.length !== 0 ? false : true;
  $: gmcLoading = $listing?.gmcs?.length !== 0 ? false : true;
  $: priceRange = 0;
  $: $listing?.cma?.length !== 0 &&
    $listing?.cma?.map(
      // @ts-ignore
      (item) => (priceRange += item.price / $listing.cma.length),
    );
</script>

{#if $listing}
  <div class="w-full mt-12" id="results2">
    <h1 class="text-4xl text-center mb-12">{$listing.address}</h1>
    <h1 class="text-3xl mt-8 mb-4">Property Description</h1>
    <p class="text-base">
      {$listing.propertyDescription}
    </p>
    <h1 class="text-3xl mt-8 mb-4">Property Info</h1>
    <Card height="h-full" classes="disabled:card-hover">
      <div class="p-4">
        <ul class="list grid grid-cols-2">
          <li>
            <span class="font-bold">Bathrooms - </span><span>
              {$listing.bathrooms}</span
            >
          </li>
          <li>
            <span class="font-bold">Bedrooms - </span><span
              >{$listing.bedrooms}</span
            >
          </li>
          <li>
            <span class="font-bold">City - </span><span>{$listing.city}</span>
          </li>
          <li>
            <span class="font-bold">State - </span><span>{$listing.state}</span>
          </li>
          <li>
            <span class="font-bold">Lot Size - </span><span
              >{$listing.lotSize}</span
            >
          </li>
          <li>
            <span class="font-bold">Square Footage - </span><span
              >{$listing.squareFootage}</span
            >
          </li>
          <li>
            <span class="font-bold">Year Built - </span><span
              >{$listing.yearBuilt}</span
            >
          </li>
          <li>
            <span class="font-bold">Property Type - </span><span
              >{$listing.propertyType}</span
            >
          </li>
          <!-- <li>
            <p>Features - {JSON.stringify($listing.features)}</p>
          </li> -->
        </ul>
      </div>
    </Card>
    <div class="flex items-center justify-between mt-12">
      <h1 class="text-3xl">Comparable Properties</h1>
      <Dropdown items={['Active']} />
    </div>
    {#if cmaLoading}
      <div class="w-full h-1/5 flex flex-col justify-center items-center">
        <ProgressRadial />
        <p>creating comparable properties please dont refresh</p>
      </div>
    {:else if $listing.cma}
      <CmaSlider items={$listing.cma} />
      <div class="flex items-center bg-secondary-500 rounded-3xl mt-12">
        <div
          class="bg-secondary-800 h-full rounded-tl-3xl rounded-bl-3xl px-4 py-6 w-1/6 text-xl whitespace-nowrap"
        >
          <p>Price Range</p>
        </div>
        <div class="pl-8 text-xl">
          <p>$ {priceRange.toFixed(2)}</p>
        </div>
      </div>
    {/if}

    <h1 class="text-3xl my-8">Property Insights</h1>
    <p>
      {$listing.propertyInsight}
    </p>
    <h1 class="text-3xl my-8">Smart Metrics</h1>
    <div class="grid grid-cols-2 gap-x-4">
      <div>
        <Card height="h-[300px]">
          <div class="p-8 flex items-center justify-center flex-col">
            <h1 class="text-xl text-center mb-4">Traffic Noise</h1>
            <ProgressRadial value={54} />
          </div>
        </Card>
      </div>
      <div>
        <Card height="h-[300px]">
          <div class="p-8 flex items-center justify-center flex-col">
            <h1 class="text-xl text-center mb-4">Nearby Points of Interest</h1>
            <ul class="list-disc text-sm list-inside">
              <li>Lorem Ipsum cillum dolore</li>
              <li>Lorem Ipsum cillum dolore</li>
              <li>Lorem Ipsum cillum dolore</li>
              <li>Lorem Ipsum cillum dolore</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
    <h1 class="text-3xl mt-8">Generated Marketing Content</h1>
    {#if gmcLoading}
      <div class="w-full h-1/5 flex flex-col justify-center items-center">
        <ProgressRadial />
        <p>creating GMC please dont refresh</p>
      </div>
    {:else}
      <GmcSlider items={$listing.gmcs?.slice(1, -1)} />
    {/if}
    <div class="mt-12">
      <Button
        label="Add to Calender"
        variant="variant-filled-secondary"
        onClick={handleAddToCalender}
        classes="w-full mt-4"
      />
    </div>
  </div>
{/if}

<style lang="postcss">
  ul * span {
    @apply text-xl;
  }
</style>
