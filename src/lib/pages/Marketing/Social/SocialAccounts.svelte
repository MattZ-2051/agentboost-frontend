<script lang="ts">
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import Account from './Account.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import { $user as user } from '$store/user';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const accounts = [$user?.instagram, $user?.facebook, $user?.x];

	const handleSocialAccountAdd = async () => {
		const modalStore = getModalStore();

		modalStore.trigger({
			type: 'component',
			component: 'socialAccounts',
			response: (r: boolean) => r
		});
	};
</script>

<Box bgColor="bg-[#151719]" width="!w-[150%]" height="h-[340px]" classes="p-6">
	<div class="flex w-full items-center justify-between">
		<p class="text-center text-lg text-[#EFEFEF]">Connected accounts</p>
		<div
			class="flex h-[44px] w-[221px] items-center justify-center gap-x-2 rounded-[10px] bg-[#1D3335] px-4 py-2"
		>
			<div on:click={handleSocialAccountAdd}>
				<AddIcon />
			</div>
			<p class="whitespace-nowrap text-[15px] font-semibold">Connect new Account</p>
		</div>
	</div>
	{#if accounts.some((account) => !!account)}
		<div class="mt-8 flex h-full w-full justify-between gap-x-6">
			{#if $user?.facebook}
				<Account socialType="facebook" />
			{:else if $user?.instagram}
				<Account socialType="instagram" />
			{:else if $user?.x}
				<Account socialType="x" />
			{/if}
		</div>
	{/if}
</Box>
