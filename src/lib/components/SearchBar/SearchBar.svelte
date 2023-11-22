<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div
	class="w-full h-full p-3 bg-zinc-900 rounded-[10px] justify-center items-center flex text-neutral-300 text-sm"
>
	<div class="!text-xl">
		<Icon icon="gg:search" />
	</div>
	<input
		placeholder="Enter an address, city or Zip code"
		class="bg-transparent border-none searchInput text-white focus:!outline-none !outline-none w-full text-sm"
	/>
</div>

<style lang="postcss">
	.searchInput:focus {
		outline: none;
	}

	.searchInput::placeholder {
		@apply text-neutral-300;
		font-size: 15px;
		overflow: visible;
	}
</style>
