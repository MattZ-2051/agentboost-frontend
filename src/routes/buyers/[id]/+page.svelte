<script lang="ts">
  import BuyersTile from '$lib/components/BuyersTile/BuyersTile.svelte';
  let buyersTiles = [{ id: 1 }, { id: 2 }, { id: 3 }];
</script>

<div class="w-full mt-12">
  {#each buyersTiles as item, i (item.id)}
    <div class={`${i === 0 ? 'mb-4' : 'my-4'}`}>
      <BuyersTile />
    </div>
  {/each}
</div>
