<script lang="ts">
	export let height: string;
	export let classes: string | undefined = undefined;
</script>

<div class={`card border-none overflow-y-auto overflow-hidden ${classes} ${height}`}>
	<slot />
</div>
