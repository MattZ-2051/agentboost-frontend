<script lang="ts">
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Subscription from '$lib/pages/Profile/Subscription/Subscription.svelte';
	import UserInfo from '$lib/pages/Profile/UserInfo/UserInfo.svelte';
	import type { TabItems } from '$types/components';

	const tabItems: TabItems = [
		{
			label: 'Profile'
		},
		{
			label: 'Subscription'
		},
		{
			label: 'Give feedback'
		},
		{ label: 'Contact support' },
		{
			label: 'Refer & earn'
		}
	];

	$: selectedItem = 'Profile';
</script>

<div>
	<div class="h-[1px] bg-[#181818] w-full my-6" />
	<h1 class="text-[24px] font-semibold mb-8">Account</h1>
	<div class="bg-[#171A1C] rounded-[20px] w-full h-full p-6">
		<Tabs items={tabItems} bind:selectedItem>
			<div slot="content" class="mt-6">
				{#if selectedItem === 'Profile'}
					<div>
						<UserInfo />
					</div>
				{:else if selectedItem === 'Subscription'}
					<div>
						<Subscription />
					</div>
				{/if}
			</div>
		</Tabs>
	</div>
</div>
