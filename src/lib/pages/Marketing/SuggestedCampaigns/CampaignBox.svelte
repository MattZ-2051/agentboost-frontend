<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import Box from '$lib/components/Box/Box.svelte';
</script>

<Box bgColor="bg-[#1E2225]" width="w-full" height="h-[350px]" classes="p-6">
	<div class="flex items-center justify-between -mt-2">
		<p>Campaign 1</p>
		<div class="myCampaignBox">
			<div>
				<AddIcon />
			</div>
			<p class="text-[14px] whitespace-nowrap font-semibold">My Campaigns</p>
		</div>
	</div>
	<div class="mt-4">
		<p class="text-[#6F767E] font-medium text-sm">Target audience</p>
		<div
			class="w-[125px] h-[34px] px-2.5 py-[5px] bg-[#22272A] rounded-[10px] flex items-center justify-center mt-4 mb-6"
		>
			<p class="text-neutral-300 text-[13px] font-medium whitespace-nowrap leading-normal">
				First time buyers
			</p>
		</div>
		<div>
			<p class="text-[#6F767E] text-[14px] font-medium">Description</p>
			<p class="mt-4 text-sm text-[#CFD0D5] leading-5">
				Lorem ipsum dolor sit amet consectetur. Amet habitasse at aliquam imperdiet sit sit tempus.
				Enim purus lectus diam odio pharetra nisi et ullamcorper. Mauris egestas et at at arcu.
				Purus condimentum ut ornare semper ut.
			</p>
		</div>
	</div>
</Box>

<style lang="postcss">
	.myCampaignBox {
		@apply bg-[#1D3335] h-11 relative rounded-[10px] w-[158px] flex items-center justify-center gap-x-2 p-4;
	}
</style>
