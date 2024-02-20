<script lang="ts">
	import SearchIcon from '$lib/assets/svg/SearchIcon.svelte';
</script>

<div
	class="flex h-full w-full items-center justify-center gap-x-[5px] rounded-[10px] bg-[#1A1A1D] p-[10px] !text-xs text-[#CFD0D5]"
>
	<div>
		<SearchIcon />
	</div>
	<input
		placeholder="Enter an address, city or Zip code"
		class="searchInput w-full border-none bg-transparent px-0 !text-xs text-white !outline-none focus:!border-none focus:!outline-none"
	/>
</div>

<style lang="postcss">
	.searchInput:focus {
		outline: none;
	}

	.searchInput::placeholder {
		@apply text-neutral-300;
		font-size: 12px;
		overflow: visible;
	}
</style>
