<script lang="ts">
  export let height: string;
</script>

<div class={`card card-hover overflow-y-auto overflow-hidden ${height}`}>
  <slot />
</div>
