<script lang="ts">
	import CopyIcon from '$lib/assets/svg/CopyIcon.svelte';
	import MoneyIcon from '$lib/assets/svg/MoneyIcon.svelte';
</script>

<div class="w-1/2">
	<h1 class="text-white font-bold text-[18px]">Refer & earn</h1>
	<div class="w-[85%]">
		<p class="text-white font-semibold text-[28px] leading-snug mt-8">
			Get up to $100 in commissions for each friend you refer to AgentBoost.
		</p>
		<p class="text-base font-normal text-[#8E8E8E] mt-4">
			Once your referral has used your coupon code, you will receive an email with instructions on
			how to claim your pending commissions.
		</p>
		<div class="flex gap-x-2 mt-10">
			<MoneyIcon />
			<p class="text-[#55B467]">Earn $100 USD - Your friend earns $50 off</p>
		</div>
		<div
			class="bg-[#24282D] w-full rounded-[10px] px-4 py-1 mt-2 flex items-center justify-between mb-12zx"
		>
			<p class="text-[#C6C7CD] text-[15px]">AGBJACOBXUR29B01D</p>
			<div class="flex items-center">
				<CopyIcon showBorder={false} />
				<p class="text-primary-500 text-base font-normal">Copy Code</p>
			</div>
		</div>
	</div>
</div>
