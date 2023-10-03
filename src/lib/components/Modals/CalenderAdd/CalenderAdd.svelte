<script lang="ts">
  import Input from '$lib/components/Input/Input.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { modalStore } from '@skeletonlabs/skeleton';
  import { addGmcToCalender } from '$api/gmc';

  let price: string = '';
  let startDate: string = '';

  const handleCalenderAdd = async () => {
    const listingId = window.location.pathname.split('/')[2];
    await addGmcToCalender({ startDate, listingId });
  };
</script>

<div class="card p-8 flex flex-col justify-between w-[500px]">
  <div class="flex flex-col justify-center items-center">
    <p class="text-2xl mt-4 font-semibold">
      Add a new listing to your calender
    </p>
    <p class="px-4 mt-4">
      Choose the date and price you want to start your content at, after that
      each item will be posted every week, you can adjust your settings in the
      marketing page
    </p>
  </div>
  <div class="my-8">
    <div class="mb-4">
      <Input label="Price" placeholder="Price" type="text" bind:value={price} />
    </div>
    <div>
      <Input
        label="Date"
        placeholder="Price"
        type="date"
        bind:value={startDate}
      />
    </div>
  </div>
  <div>
    <div class="grid grid-cols-2 gap-x-4">
      <Button
        label="Cancel"
        variant="variant-filled"
        onClick={() => modalStore.close()}
      />
      <Button
        label="Create"
        variant="variant-filled-secondary"
        onClick={handleCalenderAdd}
      />
    </div>
  </div>
</div>
