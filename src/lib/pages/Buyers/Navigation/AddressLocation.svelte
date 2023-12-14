<script lang="ts">
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
</script>

<div
	class="bg-[#1E2225] w-full h-[86px] flex items-center gap-x-4 rounded-[10px] p-4 border-white border-opacity-20 border"
>
	<input class="checkbox w-[31px] h-[31px] rounded-[8px]" type="checkbox" />
	<div class="bg-[#1D3335] rounded-full p-3">
		<LocationIconOutlined />
	</div>
	<div>
		<p class="text-white text-[15px] font-semibold">10044 W Springdale Ct</p>
		<p class="text-xs text-[#A0A1AB] font-normal mt-1">2.5 miles from city center</p>
	</div>
</div>

<style lang="postcss">
	input:not(:checked) {
		background-color: #1e2225;
		@apply border-white border-opacity-20;
	}
</style>
