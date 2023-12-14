<script lang="ts">
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import FacebookDarkIcon from '$lib/assets/svg/Social/FacebookDarkIcon.svelte';
	import TwitterDarkIcon from '$lib/assets/svg/Social/TwitterDarkIcon.svelte';
	import InstagramDarkIcon from '$lib/assets/svg/Social/InstagramDarkIcon.svelte';
</script>

<div class="w-[382px]">
	<div
		class="bg-[#1E2225] w-full h-12 flex gap-x-2 items-center px-4 py-2 rounded-[10px] border border-white border-opacity-20"
	>
		<BuyersIcon iconSize={20} />
		<p class="text-[#C6C7CD] text-base">10044 W Springdale Ct</p>
	</div>
	<div
		class="bg-[#1E2225] w-full h-full flex-col flex gap-y-4 p-6 rounded-[10px] border border-white border-opacity-20 mt-6"
	>
		<div class="flex items-center w-full justify-between">
			<div class="flex w-full items-center gap-x-2">
				<img
					class="w-[60px] h-[60px] rounded-[50px]"
					src="https://via.placeholder.com/60x60"
					alt=""
				/>
				<p class="text-[#EFEFEF] text-base">John Doe</p>
			</div>
			<div class="flex items-center gap-x-2">
				<FacebookDarkIcon />
				<InstagramDarkIcon />
			</div>
		</div>
		<div class="flex w-full items-center">
			<div class="w-1/4">
				<p class="realtorInfoLabel">Agent ID:</p>
				<p class="realtorInfoLabel">Phone:</p>
				<p class="realtorInfoLabel">Email:</p>
			</div>
			<div class="w-3/4">
				<p class="realtorInfoText">#18457 865 8745</p>
				<p class="realtorInfoText">+1 123 123 4567</p>
				<p class="realtorInfoText">johndoe@smartproperties.com</p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.realtorInfoLabel {
		@apply text-[#6F767E] text-sm;
	}

	.realtorInfoText {
		@apply text-[#EFEFEF] text-sm;
	}
</style>
