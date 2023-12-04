<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
</script>

<div class="campaignBox">
	<div class="flex items-center justify-between">
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
			class="w-[125px] h-[34px] px-2.5 py-[5px] bg-zinc-800 rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex"
		>
			<div class="justify-start items-center gap-2.5 inline-flex">
				<div class="text-neutral-300 text-[13px] font-medium font-['Inter'] leading-normal">
					First time buyers
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.campaignBox {
		@apply bg-[#1E2225] rounded-[10px] border border-white border-opacity-20 w-full h-[330px] p-6;
	}

	.myCampaignBox {
		@apply bg-[#1D3335] h-11 relative rounded-[10px] w-[158px] flex items-center justify-center gap-x-2 p-4;
	}
</style>
