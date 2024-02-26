<script lang="ts">
	export let length: number;
	export let classes = '';
</script>

<div
	class={`slider flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto scroll-smooth pb-10 pt-6 ${classes}`}
>
	{#each Array.from({ length }) as _, i}
		<div class="shrink-0 snap-center">
			<slot />
		</div>
	{/each}
</div>

<style lang="postcss">
	.slider::-webkit-scrollbar {
		width: 0.25rem !important;
		height: 0.25rem !important;
	}

	.slider::-webkit-scrollbar-track {
		background: #22272a !important;
	}

	.slider::-webkit-scrollbar-thumb {
		color: #48e8ed !important;
		background-color: #48e8ed !important;
	}
</style>
