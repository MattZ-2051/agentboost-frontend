<script lang="ts">
  export let height: string;
  export let classes: string | undefined = undefined;
</script>

<div
  class={`card card-hover overflow-y-auto overflow-hidden ${height} !${classes}`}
>
  <slot />
</div>
