<script lang="ts">
	export let width: string;
	export let height: string;
	export let classes: string = '';
</script>

<div
	class={`card !bg-[#171A1C] p-4 rounded-[10px] shadow border border-gray-800 border-opacity-20 ${width} ${height} ${classes}`}
>
	<slot />
</div>
