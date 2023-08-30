<script lang="ts">
  import { RangeSlider } from '@skeletonlabs/skeleton';

  let value = { current: 3.5, max: 5 };
</script>

<RangeSlider
  name="range-slider"
  bind:value={value.current}
  max={value.max}
  step={0.5}
  ticked
  class="w-full"
/>
