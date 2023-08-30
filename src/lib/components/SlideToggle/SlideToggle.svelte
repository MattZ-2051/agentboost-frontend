<script lang="ts">
  import { SlideToggle } from '@skeletonlabs/skeleton';

  let value: boolean = false;
  export let label: string;
</script>

<SlideToggle name="slide-toggle" checked={value}>{label}</SlideToggle>
