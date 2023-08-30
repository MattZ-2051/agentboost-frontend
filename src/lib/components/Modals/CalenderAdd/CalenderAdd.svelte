<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { modalStore } from '@skeletonlabs/skeleton';
</script>

<div class="card p-8 flex flex-col justify-between">
  <p class="text-2xl mt-4 font-semibold">Add a new listing to your calender</p>
  <div class="my-8">
    <div class="mb-4">
      <Input label="Price" placeholder="Price" type="text" value="$100,000" />
    </div>
    <div>
      <Input label="Date" placeholder="Price" type="text" value="$100,000" />
    </div>
  </div>
  <div>
    <div class="grid grid-cols-2 gap-x-4">
      <Button
        label="Cancel"
        variant="variant-filled"
        onClick={() => modalStore.close()}
      />
      <Button label="Create" variant="variant-filled-secondary" />
    </div>
  </div>
</div>
