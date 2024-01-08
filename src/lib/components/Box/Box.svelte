<script lang="ts">
	export let bgColor: string;
	export let classes: string = '';
	export let width: string;
	export let height: string;
</script>

<div
	class={`w-fit h-full bg-gradient-to-b from-[#ffffff33] via-[#ffffff33] to-transparent p-[1px] rounded-[10px] ${width} ${height}`}
>
	<div class={`${bgColor} ${classes} rounded-[10px] w-full h-full`}>
		<slot />
	</div>
</div>
