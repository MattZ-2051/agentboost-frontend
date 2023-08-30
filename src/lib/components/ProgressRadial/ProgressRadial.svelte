<script lang="ts">
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  export let value: number | undefined = undefined;
</script>

<ProgressRadial {value}>
  {#if value}{value}{/if}</ProgressRadial
>
