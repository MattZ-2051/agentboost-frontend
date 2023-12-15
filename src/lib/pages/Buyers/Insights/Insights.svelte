<script lang="ts">
	import InfoIconHover from '$lib/assets/svg/InfoIconHover.svelte';
</script>

<div class="bg-[#151719] rounded-[20px] w-full h-full p-8 flex flex-col">
	<div class="flex items-center gap-x-2 text-[#fff] font-semibold text-[18px]">
		<InfoIconHover />
		<p>Insights</p>
	</div>
	<div class="grid grid-cols-3 gap-x-8">
		<div class="infoBox">
			<p class="text-[#CFD0D5] text-sm">
				Based on the average days on market for homes in WESTVIEW SUB NO 01, which is 75.3 days, the
				fact that the most recent home sold in just 24 days indicates that the subject home has a
				potential advantage in terms of its desirability and appeal.
			</p>
		</div>
		<div class="infoBox">
			<p class="text-[#CFD0D5] text-sm">
				Based on the average days on market for homes in WESTVIEW SUB NO 01, which is 75.3 days, the
				fact that the most recent home sold in just 24 days indicates that the subject home has a
				potential advantage in terms of its desirability and appeal.
			</p>
		</div>
		<div class="infoBox">
			<p class="text-[#CFD0D5] text-sm">
				Based on the average days on market for homes in WESTVIEW SUB NO 01, which is 75.3 days, the
				fact that the most recent home sold in just 24 days indicates that the subject home has a
				potential advantage in terms of its desirability and appeal.
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.infoBox {
		@apply bg-[#1E2225] w-full h-[140px] rounded-[10px] py-4 px-5 border border-white border-opacity-20;
	}
</style>
