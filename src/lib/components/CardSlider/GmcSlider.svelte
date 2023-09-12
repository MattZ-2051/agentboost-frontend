<script lang="ts">
  import type { Listing } from '$types/models';
  import { FileDropzone } from '@skeletonlabs/skeleton';
  import Card from '../Card/Card.svelte';

  export let items: Listing['gmcs'];

  let files: FileList[] = new Array(items?.length);

  let image: any;
  let showImage: boolean[] = new Array(items?.length).fill(false);

  function onChangeHandler(e: Event, index: number): void {
    if (files) {
      const file = files[index][0];

      if (file) {
        showImage[index] = true;

        const reader = new FileReader();
        reader.addEventListener('load', function () {
          image.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(file);

        return;
      }
      showImage[index] = false;
    }
  }
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
          {#if showImage[i]}
            <img bind:this={image} src="" alt="Preview" />
          {:else}
            <FileDropzone
              name="files"
              slotLead="flex justify-center w-full"
              bind:files={files[i]}
              on:change={(e) => onChangeHandler(e, i)}
            >
              <svelte:fragment slot="lead"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </svelte:fragment>
              <svelte:fragment slot="message">Add an img</svelte:fragment>
              <svelte:fragment slot="meta"
                >PNG and JPEG accepted</svelte:fragment
              >
            </FileDropzone>
          {/if}
          <div class="flex justify-between pt-4">
            <p>
              {item.caption.substring(item.caption.indexOf(`${i + 1}.`) + 2)}
            </p>
          </div>
        </Card>
      </div>
    {/each}
  </div>
{/if}
