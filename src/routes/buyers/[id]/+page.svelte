<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import BuyersTile from '$lib/components/BuyersTile/BuyersTile.svelte';
  import Slider from '$lib/components/CardSlider/Slider.svelte';
  import { sliderItems } from '$mockData/listings';
  let buyersTiles = [{ id: 1 }, { id: 2 }, { id: 3 }];
</script>

<div class="w-full mt-12">
  {#each buyersTiles as item, i (item.id)}
    <div class={`${i === 0 ? 'mb-4' : 'my-4'}`}>
      <BuyersTile />
    </div>
  {/each}
  <div class="grid grid-cols-2 gap-x-12 mt-12">
    <Button
      label="Navigate to Schedule"
      variant="variant-filled-secondary"
      classes="w-full text-sm mt-4 p-2"
    />
    <Button
      label="Export to Buyer PDF"
      variant="variant-filled-secondary"
      classes="w-full text-sm mt-4 p-2"
    />
  </div>
</div>
