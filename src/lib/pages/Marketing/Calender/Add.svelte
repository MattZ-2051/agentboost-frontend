<script>
	import AddIconHover from '$lib/assets/AddIcon/AddIconHover.svelte';
	import { fade } from 'svelte/transition';

	$: showAdd = false;
</script>

<div class="relative">
	{#if showAdd}
		<div
			class="absolute w-[93px] h-[27px] bg-neutral-900 rounded-[5px] shadow bottom-8 -left-8"
			transition:fade={{ delay: 0, duration: 100 }}
		>
			<div class="text-neutral-300 text-sm font-medium">Add post</div>
		</div>
	{/if}
	<div on:mouseenter={() => (showAdd = true)} on:mouseleave={() => (showAdd = false)}>
		<AddIconHover />
	</div>
</div>
