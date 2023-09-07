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
  import {
    createListingCmaFx,
    createListingGmcFx,
    getListingFx,
    $listing as listing,
  } from '$store/listings';
  import CmaSlider from '$lib/components/CardSlider/CmaSlider.svelte';
  import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
  import GmcSlider from '$lib/components/CardSlider/GmcSlider.svelte';

  const modalComponent: ModalComponent = {
    // Pass a reference to your custom component
    ref: CalenderAdd,
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

  const handleAddToCalender = () => {
    modalStore.trigger(modal);
  };

  const handleListingCma = () => {
    if ($listing?.cma?.length === 0 && $listing && $listing.id) {
      createListingCmaFx({
        listingId: $listing.id.toString(),
        address: $listing.formattedAddress,
        radius: 2,
        status: 'Active',
      });
    }

    if ($listing?.gmcs?.length === 0 && $listing && $listing.id) {
      createListingGmcFx({
        listingId: $listing.id.toString(),
        address: $listing.formattedAddress,
        bed: $listing.bedrooms,
        bath: $listing.bathrooms,
        squareFt: $listing.squareFootage,
        propertyDescription: $listing.propertyDescription,
        location: 'location',
      });
    }
  };

  $: $listing?.id && handleListingCma();

  onMount(() => {
    const id = window.location.pathname.split('/')[2];
    getListingFx(id);
  });

  $: priceRange = 0;
  // @ts-ignore
  $: $listing?.cma?.length > 0 &&
    // @ts-ignore
    $listing.cma.map(
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
    <ul>
      <li>
        <p>Bathrooms - {$listing.bathrooms}</p>
      </li>
      <li>
        <p>Bedrooms - {$listing.bedrooms}</p>
      </li>
      <li>
        <p>City - {$listing.city}</p>
      </li>
      <li>
        <p>State - {$listing.state}</p>
      </li>
      <li>
        <p>Lot Size - {$listing.lotSize}</p>
      </li>
      <li>
        <p>Square Footage - {$listing.squareFootage}</p>
      </li>
      <li>
        <p>Year Built - {$listing.yearBuilt}</p>
      </li>
      <li>
        <p>Property Type - {$listing.propertyType}</p>
      </li>
      <li>
        <p>Features - {JSON.stringify($listing.features)}</p>
      </li>
    </ul>
    <div class="flex items-center justify-between mt-12">
      <h1 class="text-3xl">CMA</h1>
      <Dropdown items={['Active']} />
    </div>

    {#if $listing.cma}
      <CmaSlider items={$listing.cma} />
    {/if}
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
            <ProgressRadial value={69} />
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
    <GmcSlider items={$listing.gmcs} />
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
