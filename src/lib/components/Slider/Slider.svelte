<script lang="ts">
	export let length: number;
	export let classes = '';
</script>

<div
	class={`snap-x scrollbar scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto pb-10 pt-6 ${classes}`}
>
	{#each Array.from({ length }) as _, i}
		<div class="snap-center shrink-0">
			<slot />
		</div>
	{/each}
</div>

<style lang="postcss">
	.scrollbar::-webkit-scrollbar {
		width: 0.25rem !important;
		height: 0.25rem !important;
	}

	.scrollbar::-webkit-scrollbar-track {
		background: #22272a !important;
	}

	.scrollbar::-webkit-scrollbar-thumb {
		color: #22272a !important;
		background-color: #48e8ed !important;
	}
</style>
