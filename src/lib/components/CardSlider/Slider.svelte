<script lang="ts">
  import Card from '../Card/Card.svelte';
  import agentBoostLogo from '$lib/assets/images/agentBoostLogo.png';
  import type { SliderItems } from '$types/components';

  export let items: SliderItems;
</script>

<div
  class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-hidden py-10"
>
  {#each items as item, i}
    <div
      class="snap-start shrink-0 card w-40 md:w-80 h-[400px] overflow-y-hidden overflow-x-hidden text-center"
    >
      <Card height="h-full">
        <header class="">
          <img
            src={agentBoostLogo}
            class="w-full h-1/4 object-cover"
            alt="Post"
          />
        </header>
        <div class="p-4 space-y-4">
          {#each item as text}
            <div class="flex text-sm">
              <p class="mr-1 whitespace-nowrap">{text.title} -</p>
              <p>{text.body}</p>
            </div>
          {/each}
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold">(Date Info)</h6>
            <small>On {new Date().toLocaleDateString()}</small>
          </div>
        </footer>
      </Card>
    </div>
  {/each}
</div>
