<script lang="ts">
	import { fade } from 'svelte/transition';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Feedback from '$lib/pages/Profile/Feedback/Feedback.svelte';
	import Refer from '$lib/pages/Profile/Refer/Refer.svelte';
	import Subscription from '$lib/pages/Profile/Subscription/Subscription.svelte';
	import Support from '$lib/pages/Profile/Support/Support.svelte';
	import UserInfo from '$lib/pages/Profile/UserInfo/UserInfo.svelte';
	import type { TabItems } from '$types/components';

	const tabItems: TabItems = [
		{
			label: 'Profile'
		},
		// {
		// 	label: 'Subscription'
		// },
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
	<h1 class="mb-6 text-[24px] font-semibold">Account</h1>
	<div class="h-full w-full rounded-[20px] bg-[#171A1C] p-6">
		<Tabs items={tabItems} bind:selectedItem>
			<div slot="content" class="mt-[25px]">
				{#if selectedItem === 'Profile'}
					<div>
						<UserInfo />
					</div>
					<!-- {:else if selectedItem === 'Subscription'}
					<div>
						<Subscription />
					</div> -->
				{:else if selectedItem === 'Give feedback'}
					<div>
						<Feedback />
					</div>
				{:else if selectedItem === 'Contact support'}
					<div>
						<Support />
					</div>
				{:else if selectedItem === 'Refer & earn'}
					<div transition:fade={{ delay: 0, duration: 100 }}>
						<Refer />
					</div>{/if}
			</div>
		</Tabs>
	</div>
</div>
