<script lang="ts">
	import SocialMediaActivity from '$lib/pages/Dashboard/SocialMediaActivity/SocialMediaActivity.svelte';
	import CurrentCalender from '$lib/pages/Dashboard/CurrentCalender/CurrentCalender.svelte';
	import Announcements from '$lib/pages/Dashboard/Announcements/Announcements.svelte';
	import ActiveListings from '$lib/pages/Shared/ActiveListings/ActiveListings.svelte';
	import MortgageStats from '$lib/pages/Dashboard/MortgageStats/MortgageStats.svelte';
	import Feedback from '$lib/pages/Dashboard/Feedback/Feedback.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import { $user as user } from '$store/user';
</script>

{#if $user}
	<div class="relative h-full w-full pb-12">
		<p class="text-2xl font-semibold text-white">
			Welcome <span class="textGradient">{$user.fullName}</span>
		</p>
		<div class="mt-12 w-full">
			<p class="text-xl text-[#EFEFEF]">Local market statistics</p>
			<div class="mt-6 flex h-full w-full items-center justify-start gap-x-6">
				<Box
					width="!w-[299px]"
					height="h-[108px]"
					classes="px-[24px] py-[22px]"
					bgColor="bg-[#151719]"
				>
					<span class="statInfo">
						<p>Average home price</p>
						<p>$354,763</p>
					</span>
				</Box>
				<Box
					width="!w-[299px]"
					height="h-[108px]"
					classes="px-[24px] py-[22px]"
					bgColor="bg-[#151719]"
				>
					<span class="statInfo">
						<p>Total active listings</p>
						<p>14</p>
					</span>
				</Box>
				<Box
					width="!w-[299px]"
					height="h-[108px]"
					classes="px-[24px] py-[22px]"
					bgColor="bg-[#151719]"
				>
					<span class="statInfo">
						<p>Total pending</p>
						<p>3</p>
					</span></Box
				>
				<Box
					width="!w-[299px]"
					height="h-[108px]"
					classes="px-[24px] py-[22px]"
					bgColor="bg-[#151719]"
				>
					<span class="statInfo">
						<p>Months of inventory</p>
						<p>2.3</p>
					</span>
				</Box>
			</div>
		</div>
		<div class="mt-6">
			<SocialMediaActivity user={$user} />
		</div>
		<div class="mt-6">
			<CurrentCalender />
		</div>
		<div class="mt-6 flex w-full justify-center">
			<ActiveListings listings={$user.listings} />
		</div>
		<div class="mt-6 grid h-full w-full grid-cols-3 gap-x-6">
			<Announcements />
			<MortgageStats />
			<Feedback />
		</div>
	</div>
{/if}

<style lang="postcss">
	.textGradient {
		background: linear-gradient(88deg, #3f8bfd -50.22%, #49f9ea 89.43%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.statInfo p:nth-child(1) {
		color: #6f767e;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	.statInfo p:nth-child(2) {
		color: #efefef;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		@apply mt-1;
	}
</style>
