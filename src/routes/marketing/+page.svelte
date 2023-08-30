<script lang="ts">
  import Calender from '$lib/components/Calender/Calender.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import RangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte';
  import SlideToggle from '$lib/components/SlideToggle/SlideToggle.svelte';
  import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';
  import Info from '$lib/icons/Info/Info.svelte';
</script>

<div class="w-full">
  <h1 class="text-3xl text-center my-12">Your SM Marketing Calender</h1>
  <Calender />

  <div class="flex flex-col items-center justify-center gap-y-5">
    <h1 class="text-3xl text-center my-12">Listings</h1>
    <div class="flex w-1/2 justify-between items-center">
      <p class="text-xl">Property Address 1</p>
      <div class="grid grid-cols-2 gap-x-6">
        <Button
          label="Pending"
          classes="w-24"
          variant="variant-filled-secondary"
          onClick={() => {}}
        />
        <Button
          label="Sold"
          classes="w-24"
          variant="variant-filled-secondary"
          onClick={() => {}}
        />
      </div>
      <SlideToggle label="Active" />
    </div>
    <div class="flex w-1/2 justify-between items-center">
      <p class="text-xl">Property Address 2</p>
      <div class="grid grid-cols-2 gap-x-6">
        <Button
          label="Pending"
          classes="w-24"
          variant="variant-filled-secondary"
          onClick={() => {}}
        />
        <Button
          label="Sold"
          classes="w-24"
          variant="variant-filled-secondary"
          onClick={() => {}}
        />
      </div>
      <SlideToggle label="Active" />
    </div>
  </div>
  <h1 class="text-3xl text-center my-12">General Marketing</h1>
  <div>
    <div class="flex justify-between w-full items-center">
      <p class="text-xl mr-8">Campaign 1</p>
      <div class="w-1/2 mr-8">
        <RangeSlider />
      </div>
      <SlideToggle label="Campaign Active" />
    </div>
    <div class="flex flex-col items-center w-full justify-center mt-12">
      <div class="w-full justify-center mr-4 flex">
        <div class="w-1/2 mr-8">
          <Input label="" placeholder="Target Audience" value="" type="text" />
        </div>
        <Tooltip
          target="audience"
          hoverContent="First time buyers, Luxury sellers, or Investors"
        >
          <svelte:fragment slot="icon">
            <Info />
          </svelte:fragment>
        </Tooltip>
      </div>
      <div class="w-full justify-center mr-4 flex mt-8">
        <div class="w-1/2 mr-8">
          <Input
            label=""
            placeholder="Target Audience"
            value=""
            type="textarea"
            rows={6}
          />
        </div>
        <Tooltip
          target="description"
          hoverContent="Everything from awesome local restaurants to steps to get your home ready to sell"
        >
          <svelte:fragment slot="icon">
            <Info />
          </svelte:fragment>
        </Tooltip>
      </div>
    </div>
  </div>
  <div class="mt-12">
    <div class="flex justify-between w-full items-center">
      <p class="text-xl mr-8">Campaign 2</p>
      <div class="w-1/2 mr-8">
        <RangeSlider />
      </div>
      <SlideToggle label="Campaign Active" />
    </div>
    <div class="flex flex-col items-center w-full justify-center mt-12">
      <div class="w-full justify-center mr-4 flex">
        <div class="w-1/2 mr-8">
          <Input label="" placeholder="Target Audience" value="" type="text" />
        </div>
        <Tooltip
          target="audience"
          hoverContent="First time buyers, Luxury sellers, or Investors"
        >
          <svelte:fragment slot="icon">
            <Info />
          </svelte:fragment>
        </Tooltip>
      </div>
      <div class="w-full justify-center mr-4 flex mt-8">
        <div class="w-1/2 mr-8">
          <Input
            label=""
            placeholder="Target Audience"
            value=""
            type="textarea"
            rows={6}
          />
        </div>
        <Tooltip
          target="description"
          hoverContent="Everything from awesome local restaurants to steps to get your home ready to sell"
        >
          <svelte:fragment slot="icon">
            <Info />
          </svelte:fragment>
        </Tooltip>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center flex-col">
    <h1 class="text-3xl text-center mt-12">Open House, Sold, Pending</h1>
    <p class="w-1/2 my-8 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div class="w-1/2">
      <Input
        label="Property Address"
        placeholder="Property Address"
        value=""
        type="text"
      />
    </div>
    <div class="w-1/2">
      <Input label="Price" placeholder="Price" value="" type="text" />
    </div>
    <div class="w-1/2">
      <Input label="Date" placeholder="Date" value="" type="date" />
    </div>
    <Button
      label="Add To Calender"
      variant="variant-filled-secondary"
      onClick={() => {}}
      classes="w-1/2 mt-12"
    />
  </div>
</div>
