<script lang="ts">
	import Graph from '$lib/components/Graph/Graph.svelte';
	import Chart from '../Chart/Chart.svelte';
</script>

<div class="p-6 border border-white border-opacity-10 w-full h-[398px] bg-[#151719] rounded-[10px]">
	<p class="text-[#EFEFEF] text-xl font-semibold">Mortgage Statistics</p>
	<div class="w-full h-full flex justify-center items-center flex-col">
		<p class="textGradient">8.275%</p>
		<div class="!-mx-[29px] -mb-12">
			<Chart chartId="mortgageStats" color="#3E89FD" classes="!w-full !h-full" hideAxes={true} />
		</div>
	</div>
</div>

<style lang="postcss">
	.textGradient {
		background: linear-gradient(58deg, #3f8bfd 20.22%, #49f9ea 109.43%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 40px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
</style>
