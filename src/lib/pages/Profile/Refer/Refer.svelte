<script lang="ts">
	import CopyIcon from '$lib/assets/svg/CopyIcon.svelte';
	import MoneyIcon from '$lib/assets/svg/MoneyIcon.svelte';
</script>

<div class="mb-12 w-1/2">
	<h1 class="text-[18px] font-semibold text-white">Refer & earn</h1>
	<div class="mt-[33px] w-[85%]">
		<p class="text-[28px] font-semibold leading-snug text-white">
			Get up to $100 in commissions for each friend you refer to AgentBoost.
		</p>
		<p class="mt-4 text-base font-normal text-[#8E8E8E]">
			Once your referral has used your coupon code, you will receive an email with instructions on
			how to claim your pending commissions.
		</p>
		<div class="mt-10 flex gap-x-2">
			<MoneyIcon />
			<p class="text-base font-normal text-[#55B467]">Earn $100 USD - Your friend earns $50 off</p>
		</div>
		<div
			class="mb-12zx mt-2 flex w-full items-center justify-between rounded-[10px] bg-[#24282D] px-[18px] py-1"
		>
			<p class="m-0 p-0 text-[15px] font-medium text-[#C6C7CD]">AGBJACOBXUR29B01D</p>
			<div class="flex items-center">
				<CopyIcon showBorder={false} />
				<p class="text-base font-normal text-primary-500">Copy Code</p>
			</div>
		</div>
	</div>
</div>
