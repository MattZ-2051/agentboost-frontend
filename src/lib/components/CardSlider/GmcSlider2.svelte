<script lang="ts">
  import Card from '../Card/Card.svelte';
  import agentBoostLogo from '../../assets/images/agentBoostLogo.png';

  export let items: any[];
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
          <div class="text-xl pb-4">
            {#if i === 0}
              <h1>Email</h1>
            {/if}

            {#if i === 1}
              <h1>Flyer</h1>
            {/if}

            {#if i === 2}
              <h1>Mailer</h1>
            {/if}
          </div>
          <img src={agentBoostLogo} alt="" />

          <div class="flex text-base pt-4 text-left">
            {#if i === 0}
              <p>Price: $400,000</p>
            {/if}
            {#if i === 1}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit. consectetur adipiscing elit.
                consectetur adipiscing elit.
              </p>
            {/if}
            {#if i === 2}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit. consectetur adipiscing elit.
                consectetur adipiscing elit.
              </p>
            {/if}
          </div>
        </Card>
      </div>
    {/each}
  </div>
{/if}
