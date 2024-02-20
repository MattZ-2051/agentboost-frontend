<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import Box from '$lib/components/Box/Box.svelte';
</script>

<Box bgColor="bg-[#1E2225]" width="w-full" height="h-[350px]" classes="p-6">
	<div class="-mt-2 flex items-center justify-between">
		<p>Campaign 1</p>
		<div class="myCampaignBox">
			<div>
				<AddIcon />
			</div>
			<p class="whitespace-nowrap text-[14px] font-semibold">My Campaigns</p>
		</div>
	</div>
	<div class="mt-4">
		<p class="text-sm font-medium text-[#6F767E]">Target audience</p>
		<div
			class="mb-6 mt-4 flex h-[34px] w-[125px] items-center justify-center rounded-[10px] bg-[#22272A] px-2.5 py-[5px]"
		>
			<p class="whitespace-nowrap text-[13px] font-medium leading-normal text-neutral-300">
				First time buyers
			</p>
		</div>
		<div>
			<p class="text-[14px] font-medium text-[#6F767E]">Description</p>
			<p class="mt-4 text-sm leading-5 text-[#CFD0D5]">
				Lorem ipsum dolor sit amet consectetur. Amet habitasse at aliquam imperdiet sit sit tempus.
				Enim purus lectus diam odio pharetra nisi et ullamcorper. Mauris egestas et at at arcu.
				Purus condimentum ut ornare semper ut.
			</p>
		</div>
	</div>
</Box>

<style lang="postcss">
	.myCampaignBox {
		@apply relative flex h-11 w-[158px] items-center justify-center gap-x-2 rounded-[10px] bg-[#1D3335] p-4;
	}
</style>
