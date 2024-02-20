<script lang="ts">
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
	import Box from '$lib/components/Box/Box.svelte';
</script>

<Box
	bgColor="bg-[#1E2225]"
	width="w-full"
	height="h-[86px]"
	classes="flex items-center gap-x-4 p-4"
>
	<input class="checkbox h-[31px] w-[31px] rounded-[8px]" type="checkbox" />
	<div class="rounded-full bg-[#1D3335] p-3">
		<LocationIconOutlined />
	</div>
	<div>
		<p class="text-[15px] font-semibold text-white">10044 W Springdale Ct</p>
		<p class="mt-1 text-xs font-normal text-[#A0A1AB]">2.5 miles from city center</p>
	</div>
</Box>

<style lang="postcss">
	input:not(:checked) {
		background-color: #1e2225;
		@apply border-white border-opacity-20;
	}
</style>
