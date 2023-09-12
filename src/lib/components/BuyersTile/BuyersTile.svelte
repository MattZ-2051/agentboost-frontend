<script lang="ts">
  import { slide } from 'svelte/transition';
  import ArrowDown from '$lib/icons/Arrow/ArrowDown.svelte';
  import ArrowUp from '$lib/icons/Arrow/ArrowUp.svelte';
  import agentBoostLogo from '$lib/assets/images/agentBoostLogo.png';

  let expanded = false;
</script>

<div class="card border-none">
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
    <div class="text-xl" transition:slide={{ delay: 100, duration: 500 }}>
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
  {/if}
  <div class="w-full flex justify-center">
    <div
      class="mt-4 bg-secondary-400 hover:cursor-pointer hover:scale-105 rounded-xl w-20 flex justify-center py-[2px]"
      on:click={() => (expanded = !expanded)}
    >
      {#if !expanded}
        <ArrowDown />
      {:else}
        <ArrowUp />
      {/if}
    </div>
  </div>
</div>
