<script lang="ts">
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import FacebookDarkIcon from '$lib/assets/svg/Social/FacebookDarkIcon.svelte';
	import InstagramDarkIcon from '$lib/assets/svg/Social/InstagramDarkIcon.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import dummyImg from '$lib/assets/images/dummy-buyer-profile-img.png';
	import XDarkIcon from '$lib/assets/svg/Social/XDarkIcon.svelte';
</script>

<div class="w-[382px]">
	<Box
		classes="flex gap-x-2 items-center px-4 py-2"
		bgColor="bg-[#1E2225]"
		width="w-full"
		height="h-12"
	>
		<BuyersIcon iconSize={20} />
		<p class="text-base text-[#C6C7CD]">10044 W Springdale Ct</p>
	</Box>
	<div class="mt-6">
		<Box bgColor="bg-[#1E2225]" width="w-full" height="h-full" classes="flex-col flex gap-y-4 p-6">
			<div class="flex w-full items-center justify-between">
				<div class="flex w-full items-center gap-x-2">
					<img class="h-[60px] w-[60px] rounded-[50px]" src={dummyImg} alt="" />
					<p class="text-base text-[#EFEFEF]">John Doe</p>
				</div>
				<div class="flex items-center gap-x-2">
					<FacebookDarkIcon />
					<XDarkIcon />
					<InstagramDarkIcon />
				</div>
			</div>
			<div class="flex w-full items-center">
				<div class="flex w-1/4 flex-col gap-y-[15px]">
					<p class="realtorInfoLabel">Agent ID:</p>
					<p class="realtorInfoLabel">Phone:</p>
					<p class="realtorInfoLabel">Email:</p>
				</div>
				<div class="flex w-3/4 flex-col gap-y-[15px]">
					<p class="realtorInfoText">#18457 865 8745</p>
					<p class="realtorInfoText">+1 123 123 4567</p>
					<p class="realtorInfoText">johndoe@smartproperties.com</p>
				</div>
			</div>
		</Box>
	</div>
</div>

<style lang="postcss">
	.realtorInfoLabel {
		@apply text-sm text-[#6F767E];
	}

	.realtorInfoText {
		@apply text-sm text-[#EFEFEF];
	}
</style>
