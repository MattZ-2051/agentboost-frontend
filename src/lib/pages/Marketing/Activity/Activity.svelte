<script lang="ts">
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import Graph from '$lib/components/Graph/Graph.svelte';
	import Box from '$lib/components/Box/Box.svelte';

	$: showContent = false;

	const items = ['Weekly', 'Monthly', 'Yearly'];
</script>

<Box bgColor="bg-[#151719]" width="w-full" height="h-[340px]" classes="p-6">
	<div class="flex items-center justify-between gap-x-3">
		<RadioDropdown
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
		<div class="mt-8 flex h-[110px] w-full pb-4">
			<div class="flex w-fit flex-col items-center gap-y-1">
				<Graph />
				<p class="text-xs text-[#6F767E]">11/06</p>
			</div>
		</div>
	</Slider>
	<div class="my-3 h-[1px] w-full bg-white opacity-10" />
	<div class="flex w-full justify-between">
		<div>
			<div class="flex items-center gap-x-1">
				<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
					<circle cx="4" cy="4" r="4" fill="#3E8AFD" />
				</svg>
				<p class="text-sm font-normal text-[#6F767E]">Reach</p>
			</div>
			<p class="text-lg font-semibold text-white">1,409</p>
		</div>
		<div>
			<div class="flex items-center gap-x-1">
				<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
					<circle cx="4" cy="4" r="4" fill="#FD8539" />
				</svg>
				<p class="text-sm font-normal text-[#6F767E]">Profile views</p>
			</div>
			<p class="text-lg font-semibold text-white">427</p>
		</div>
		<div>
			<div class="flex items-center gap-x-1">
				<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
					<circle cx="4" cy="4" r="4" fill="#FE6D8E" />
				</svg>
				<p class="text-sm font-normal text-[#6F767E]">Interactions</p>
			</div>
			<p class="text-lg font-semibold text-white">131</p>
		</div>
	</div>
</Box>
