<script lang="ts">
	import SearchIcon from '$lib/assets/svg/SearchIcon.svelte';
</script>

<div
	class="w-full h-full p-[10px] gap-x-[5px] bg-[#1A1A1D] rounded-[10px] justify-center items-center flex text-[#CFD0D5] !text-xs"
>
	<div>
		<SearchIcon />
	</div>
	<input
		placeholder="Enter an address, city or Zip code"
		class="px-0 bg-transparent border-none searchInput text-white focus:!outline-none focus:!border-none !outline-none w-full !text-xs"
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
