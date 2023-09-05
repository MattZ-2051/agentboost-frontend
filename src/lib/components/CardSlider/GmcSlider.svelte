<script lang="ts">
  import type { Listing } from '$types/models';

  import Card from '../Card/Card.svelte';

  export let items: Listing['gmcs'];
</script>

{#if items}
  <div
    class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-10"
  >
    {#each items as item, i}
      <div
        class="snap-start shrink-0 card w-40 md:w-80 h-[400px] overflow-y-auto overflow-x-hidden text-center"
      >
        <Card height="h-full p-4">
          <div class="flex justify-between pt-4">
            <p>Caption</p>
            <p>{item.caption}</p>
          </div>
        </Card>
      </div>
    {/each}
  </div>
{/if}
