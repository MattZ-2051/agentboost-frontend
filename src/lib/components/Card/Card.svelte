<script lang="ts">
	export let width: string;
	export let height: string;
	export let classes: string = '';
</script>

<div
	class={`card rounded-[10px] border border-[#2E2F37] !bg-[#171A1C] p-4 shadow ${width} ${height} ${classes}`}
>
	<slot />
</div>
