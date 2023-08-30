<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Slider from '$lib/components/CardSlider/Slider.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  import UpTrending from '$lib/icons/ArrowTrending/UpTrending.svelte';
  import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
  import { sliderItems } from '$mockData/listings';
  import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
</script>

<div class="w-full" id="results">
  <div class="mt-12">
    <div class="flex justify-between">
      <h1 class="text-3xl mb-8">Property Address 1</h1>
      <Dropdown />
    </div>
    <div>
      <Input
        label=""
        placeholder="Property Address"
        value="10044 W Springdale Ct"
        type="text"
      />
    </div>
    <h1 class="text-3xl mt-8">CMA - Sold in last 30 days</h1>
    <Slider items={sliderItems} />
    <div class="mt-8">
      <Button
        label="Add to Buyers"
        variant="variant-filled-secondary"
        onClick={() => {}}
        classes="w-full mt-4"
      />
    </div>
  </div>
  <div class="mt-20">
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
  </div>
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
          <h1 class="text-xl text-center mb-4">Nearby Attraactions</h1>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
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
  <h1 class="text-3xl mt-12">Optimized Offer</h1>
  <div class="flex justify-center w-full items-center mt-12">
    <h1 class="text-2xl mr-6">$1,000,000</h1>
    <p class="w-1/2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut
    </p>
  </div>
  <div class="mt-12">
    <Button
      label="Export to Presentation"
      variant="variant-filled-secondary"
      onClick={() => {}}
      classes="w-full mt-4"
    />
  </div>
</div>
