<script lang="ts">
  import './Button.css';
  import type { ButtonVariant } from '$types/components';

  export let label: string;
  export let classes: string | undefined = undefined;
  export let variant: ButtonVariant;
  export let onClick: (() => void) | undefined = undefined;
</script>

<button type="button" class={`btn ${variant} ${classes}`} on:click={onClick}
  >{label}</button
>
