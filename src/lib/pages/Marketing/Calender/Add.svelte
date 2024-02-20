<script>
	import AddIconHover from '$lib/assets/svg/AddIcon/AddIconHover.svelte';
	import { fade } from 'svelte/transition';

	$: showAdd = false;
</script>

<div class="relative">
	{#if showAdd}
		<div
			class="absolute -left-8 bottom-8 h-[27px] w-[93px] rounded-[5px] bg-neutral-900 shadow"
			transition:fade={{ delay: 0, duration: 100 }}
		>
			<div class="text-sm font-medium text-neutral-300">Add post</div>
		</div>
	{/if}
	<div on:mouseenter={() => (showAdd = true)} on:mouseleave={() => (showAdd = false)}>
		<AddIconHover />
	</div>
</div>
