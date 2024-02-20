<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import Account from './Account.svelte';
	import Box from '$lib/components/Box/Box.svelte';
</script>

<Box bgColor="bg-[#151719]" width="!w-[150%]" height="h-[340px]" classes="p-6">
	<div class="flex w-full items-center justify-between">
		<p class="text-lg text-[#EFEFEF]">Connected accounts</p>
		<div
			class="flex h-[44px] w-[221px] items-center justify-center gap-x-2 rounded-[10px] bg-[#1D3335] px-4 py-2"
		>
			<div>
				<AddIcon />
			</div>
			<p class="whitespace-nowrap text-[15px] font-semibold">Connect new Account</p>
		</div>
	</div>
	<div class="mt-8 flex w-full justify-between gap-x-6">
		<Account socialType="facebook" />
		<Account socialType="instagram" />
		<Account socialType="x" />
	</div>
</Box>
