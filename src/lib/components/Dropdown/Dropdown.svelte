<script lang="ts">
	export let showContent: boolean = false;
	export let classes: string | undefined = undefined;
</script>

<div class={`w-full h-full ${classes} rounded-[10px] relative`}>
	<slot />
	{#if showContent}
		<div
			class="absolute top-[3.5rem] right-0 z-20 bg-zinc-900 w-full h-fit px-[18px] py-3 rounded-[10px]"
		>
			<slot name="content" />
		</div>
	{/if}
</div>
