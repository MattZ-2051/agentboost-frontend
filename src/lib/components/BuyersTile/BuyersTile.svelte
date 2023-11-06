<script lang="ts">
  import { slide } from 'svelte/transition';
  import ArrowDown from '$lib/icons/Arrow/ArrowDown.svelte';
  import ArrowUp from '$lib/icons/Arrow/ArrowUp.svelte';
  import agentBoostLogo from '$lib/assets/images/agentBoostLogo.png';
  import ProgressRadial from '../ProgressRadial/ProgressRadial.svelte';
  import Card from '../Card/Card.svelte';
  import Slider from '../CardSlider/Slider.svelte';
  import { sliderItems } from '$mockData/listings';

  let expanded = false;

  const handleExpand = () => {
    expanded = !expanded;
  };
</script>

<div class="card border-none p-4">
  <div class="grid grid-cols-3 gap-x-12 py-4">
    <div class="mr-8">
      <img src={agentBoostLogo} alt="" class="w-72" />
    </div>
    <div class="text-xl">
      <div class="h-20">
        <p class="mb-2">Address - 10044 W Springdale Ct</p>
        <p>List price - $350,000</p>
      </div>
      <hr class="my-4" />
      <b>Property Info</b>
      <p>Bedrooms - 2</p>
      <p>Bathrooms - 2</p>
      <p>Garage - No</p>
      <p>Square Ft - 2104</p>
    </div>
    <div class="text-xl">
      <div class="h-20">
        <b>Insights</b>
        <p class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
        </p>
      </div>
      <hr class="my-4" />
      <div>
        <b>Smart Metrics</b>
        <p class="">Traffic Noise - 67</p>
        <p>Nearby Points of Interest - axiom fitness +3 more</p>
      </div>
    </div>
  </div>

  {#if expanded}
    <div transition:slide={{ delay: 100, duration: 500 }}>
      <div class="grid grid-cols-2 gap-x-12">
        <div>
          <div>
            <p class="text-xl font-bold">Property Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>
          <div class="mt-4">
            <Card height="h-[300px]">
              <div class="p-8 flex items-center justify-center flex-col">
                <h1 class="text-xl text-center mb-4">Traffic Noise</h1>
                <ProgressRadial value={69} />
              </div>
            </Card>
          </div>
        </div>
        <div>
          <div>
            <p class="text-xl font-bold">Insights</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </p>
          </div>
          <div class="mt-4">
            <Card height="h-[300px]">
              <div class="p-8 flex items-center justify-center flex-col">
                <h1 class="text-xl text-center mb-4">Points Of Interest</h1>
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
      </div>
      <h1 class="text-3xl mt-8">Comparable Properties</h1>
      <Slider items={sliderItems} />
      <p class="text-3xl">Optimized Offer: $1,000,000</p>
    </div>
  {/if}
  <div class="w-full flex justify-center">
    <div
      class="mt-8 bg-secondary-400 hover:cursor-pointer hover:scale-105 rounded-xl w-20 flex justify-center py-[2px]"
      on:click={handleExpand}
      on:keydown={handleExpand}
    >
      {#if !expanded}
        <ArrowDown />
      {:else}
        <ArrowUp />
      {/if}
    </div>
  </div>
</div>
