<script lang="ts">
  import type { ChipVariant } from '$types/components';
  export let title: string;
  export let variant: ChipVariant;
  export let onClick: (() => void) | undefined = undefined;
</script>

<span on:click={onClick} class={`chip ${variant}`}>{title}</span>
