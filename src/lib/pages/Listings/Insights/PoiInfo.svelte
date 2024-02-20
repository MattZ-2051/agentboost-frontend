<script lang="ts">
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
	import Box from '$lib/components/Box/Box.svelte';
</script>

<Box
	bgColor="bg-[#1E2225]"
	height="h-[86px]"
	width="w-full"
	classes="flex items-center gap-x-4 p-4"
>
	<div class="rounded-full bg-[#1D3335] p-3">
		<LocationIconOutlined />
	</div>
	<div>
		<p class="text-[15px] font-semibold text-white">10044 W Springdale Ct</p>
		<p class="mt-1 text-xs font-normal text-[#A0A1AB]">2.5 miles from city center</p>
	</div>
</Box>
