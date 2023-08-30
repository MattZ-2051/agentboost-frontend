<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Slider from '$lib/components/CardSlider/Slider.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  import UpTrending from '$lib/icons/ArrowTrending/UpTrending.svelte';
  import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
  import { sliderItems } from '$mockData/listings';
  import {
    modalStore,
    type ModalSettings,
    type ModalComponent,
  } from '@skeletonlabs/skeleton';
  import CalenderAdd from '$lib/components/Modals/CalenderAdd/CalenderAdd.svelte';
  import { onMount } from 'svelte';
  import { getListingFx, $listing as listing } from '$store/listings';

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

  onMount(() => {
    const id = window.location.pathname.split('/')[2];
    getListingFx(id);
  });
</script>

{#if $listing}
  <div class="w-full mt-12" id="results2">
    <h1 class="text-4xl text-center mb-12">10044 W Springdale Ct</h1>
    <h1 class="text-3xl mt-8">Property Description</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat
    </p>
    <h1 class="text-3xl mt-8">Property Info</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat
    </p>
    <h1 class="text-3xl mt-8">CMA - Sold in last 30 days</h1>
    <Slider items={sliderItems} />
    <div class="flex items-center bg-secondary-500 rounded-3xl mt-12">
      <div
        class="bg-secondary-800 h-full rounded-tl-3xl rounded-bl-3xl px-4 py-6 w-1/6 text-xl whitespace-nowrap"
      >
        <p>Price Range</p>
      </div>
      <div class="pl-8">
        <p>$150,000 - $500,000</p>
      </div>
    </div>
    <h1 class="text-3xl my-8">Property Insights</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p class="my-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <h1 class="text-3xl my-8">Smart Metrics</h1>
    <div class="grid grid-cols-3 gap-x-4">
      <div class="">
        <Card height="h-[300px]">
          <div class="p-8 flex items-center justify-center flex-col">
            <h1 class="text-xl text-center mb-4">Traffic Noise</h1>
            <ProgressRadial value={69} />
          </div>
        </Card>
      </div>
      <div class="">
        <Card height="h-[300px]">
          <div class="p-8 flex items-center justify-center flex-col">
            <h1 class="text-xl text-center mb-4">Safety or Etc....</h1>
            <ul class="list-disc text-sm list-inside">
              <li>Lorem Ipsum cillum dolore</li>
              <li>Lorem Ipsum cillum dolore</li>
              <li>Lorem Ipsum cillum dolore</li>
              <li>Lorem Ipsum cillum dolore</li>
            </ul>
          </div></Card
        >
      </div>
      <div class="">
        <Card height="h-[300px]">
          <div class="p-8 flex items-center justify-center flex-col">
            <h1 class="text-xl text-center mb-4">Property Tax</h1>
            <UpTrending width="w-20" height="w-20" />
            <p>$5,000 year</p>
            <p>Above Average</p>
          </div>
        </Card>
      </div>
    </div>
    <h1 class="text-3xl mt-8">Generated Marketing Content</h1>
    <Slider items={sliderItems} />
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
