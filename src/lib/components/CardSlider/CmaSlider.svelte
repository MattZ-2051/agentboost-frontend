<script lang="ts">
  import type { Listing } from '$types/models';

  import Card from '../Card/Card.svelte';

  export let items: Listing['cma'];
</script>

{#if items}
  <div
    class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-10"
  >
    {#each items as item, i}
      <div
        class="snap-start shrink-0 w-40 md:w-80 h-[400px] overflow-y-auto overflow-x-hidden text-center"
      >
        <Card height="h-full p-4">
          <div class="flex whitespace-nowrap justify-between pt-4">
            <p>Property Address:</p>
            <p>{item.addressLine1}</p>
          </div>
          <div class="flex whitespace-nowrap justify-between pt-4">
            <p>Bedrooms</p>
            <p>{item.bedrooms}</p>
          </div>
          <div class="flex whitespace-nowrap justify-between pt-4">
            <p>Bathrooms</p>
            <p>{item.bathrooms}</p>
          </div>
          <div class="flex whitespace-nowrap justify-between pt-4">
            <p>Square Footage</p>
            <p>{item.squareFootage}</p>
          </div>
          <div class="flex whitespace-nowrap justify-between pt-4">
            <p>Lot Size</p>
            <p>{item.lotSize}</p>
          </div>
          <div class="flex whitespace-nowrap justify-between pt-4">
            <p>Price Range</p>
            <p>$ {item.price}</p>
          </div>
        </Card>
      </div>
    {/each}
  </div>
{/if}
