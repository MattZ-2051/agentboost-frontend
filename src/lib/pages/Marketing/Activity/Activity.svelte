<script lang="ts">
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import Graph from '$lib/components/Graph/Graph.svelte';

	$: showContent = false;

	const items = ['Weekly', 'Monthly', 'Yearly'];
</script>

<div class="w-full h-[320px] bg-[#151719] rounded-[10px] borderClass p-6">
	<div class="flex items-center justify-between gap-x-3">
		<RadioDropdown
			label="7 Day Activity"
			classes="w-[153px] h-full !bg-transparent flex justify-start items-center gap-x-2 !text-lg"
			dropdownClasses="!top-[2.0rem]"
			{showContent}
			{items}
			iconSize={16}
		/>
		<Dropdown
			classes="p-3 !bg-[#1E2225] w-[160px] !text-xs"
			{showContent}
			label="Instagram"
			iconSize={16}
		/>
	</div>
	<Slider length={20} classes="gap-x-8 !w-[35vw] !hide-scrollbar !pb-1">
		<div class="w-full h-[110px] mt-8 flex pb-4">
			<div class="flex flex-col gap-y-1 items-center w-fit">
				<Graph />
				<p class="text-xs text-[#6F767E]">11/06</p>
			</div>
		</div>
	</Slider>
	<div class="w-full my-4 h-[1px] bg-white opacity-10" />
	<div>
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
				<circle cx="4" cy="4" r="4" fill="#3E8AFD" />
			</svg>
			<p class="text-[#6F767E]">Reach</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.borderClass {
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
