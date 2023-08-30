<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import Plus from '$lib/icons/Plus/Plus.svelte';
  import UpTrending from '$lib/icons/ArrowTrending/UpTrending.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  import Slider from '$lib/components/CardSlider/Slider.svelte';
  import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { sliderItems } from '$mockData/listings';
  import { goto } from '$app/navigation';

  let loading = false;

  const handleBoost = () => {
    loading = true;
    setTimeout(() => {
      loading = false;
      goto(`/buyers/${1}`);
    }, 5000);
  };
</script>

<div class="w-full h-full mt-12 flex flex-col items-center">
  {#if !loading}
    <h1 class="text-3xl text-center">Here's How it works</h1>
    <p class="w-1/2 mt-12 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div class="w-2/3 mt-12">
      <Input
        label="Property Address 1"
        placeholder="Property Address 1"
        type="text"
        value=""
      />
    </div>
    <div class="w-2/3 mt-12">
      <Input
        label="Property Address 2"
        placeholder="Property Address 2"
        type="text"
        value=""
      />
    </div>
    <div class="mt-12 flex flex-col items-center justify-center">
      <p>Add more property addresses to compare</p>

      <div
        class="mt-4 bg-secondary-400 hover:cursor-pointer hover:scale-105 rounded-xl w-20 flex justify-center"
      >
        <Plus />
      </div>
    </div>
    <div class="w-1/2 mt-12">
      <Button
        label="Boost"
        variant="variant-filled-secondary"
        onClick={handleBoost}
        classes="w-full mt-4"
      />
    </div>
  {/if}
  {#if loading}
    <div class="h-full flex items-center">
      <ProgressRadial />
    </div>
  {/if}
</div>
