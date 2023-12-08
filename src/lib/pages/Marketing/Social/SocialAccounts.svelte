<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import Account from './Account.svelte';
</script>

<div class="w-[150%] h-[320px] bg-[#151719] p-8 borderClass rounded-[10px]">
	<div class="flex w-full justify-between items-center">
		<p class="text-[#EFEFEF] text-lg">Connected accounts</p>
		<div
			class="bg-[#1D3335] w-[221px] h-[44px] rounded-[10px] flex items-center justify-center gap-x-2 py-2 px-4"
		>
			<div>
				<AddIcon />
			</div>
			<p class="text-[15px] font-semibold whitespace-nowrap">Connect new Account</p>
		</div>
	</div>
	<div class="flex gap-x-6 w-full justify-between mt-8">
		<Account socialType="facebook" />
		<Account socialType="instagram" />
		<Account socialType="x" />
	</div>
</div>

<style lang="postcss">
	.borderClass {
		border: 1px solid rgba(255, 255, 255, 0.1);
	}
</style>
