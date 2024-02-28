<script lang="ts">
	import { fade } from 'svelte/transition';
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Feedback from '$lib/pages/Profile/Feedback/Feedback.svelte';
	import Refer from '$lib/pages/Profile/Refer/Refer.svelte';
	import Support from '$lib/pages/Profile/Support/Support.svelte';
	import UserInfo from '$lib/pages/Profile/UserInfo/UserInfo.svelte';
	import type { TabItems } from '$types/components';
	import { $user as user } from '$store/user';

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
		{ label: 'Contact support' }
		// {
		// 	// label: 'Refer & earn'
		// }
	];

	$: selectedItem = 'Profile';
</script>

{#if $user}
	<div class="mb-12">
		<h1 class="mb-6 text-[24px] font-semibold">Account</h1>
		<div class="h-full w-full rounded-[20px] bg-[#171A1C] p-6">
			<Tabs items={tabItems} bind:selectedItem>
				<div slot="content" class="mt-[25px]">
					{#if selectedItem === 'Profile'}
						<div>
							<UserInfo user={$user} />
						</div>
						<!-- {:else if selectedItem === 'Subscription'}
					<div>
						<Subscription />
					</div> -->
					{:else if selectedItem === 'Give feedback'}
						<div>
							<Feedback email={$user.email} />
						</div>
					{:else if selectedItem === 'Contact support'}
						<div>
							<Support email={$user.email} />
						</div>
						<!-- {:else if selectedItem === 'Refer & earn'}
						<div transition:fade={{ delay: 0, duration: 100 }}>
							<Refer />
						</div> -->
					{/if}
				</div>
			</Tabs>
		</div>
	</div>
{/if}
