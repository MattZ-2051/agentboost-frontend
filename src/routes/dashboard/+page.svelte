<script lang="ts">
	import SocialMediaActivity from '$lib/pages/Dashboard/SocialMediaActivity/SocialMediaActivity.svelte';
	import CurrentCalender from '$lib/pages/Dashboard/CurrentCalender/CurrentCalender.svelte';
	import Announcements from '$lib/pages/Dashboard/Announcements/Announcements.svelte';
	import ActiveListings from '$lib/pages/Marketing/ActiveListings/ActiveListings.svelte';
	import MortgageStats from '$lib/pages/Dashboard/MortgageStats/MortgageStats.svelte';
	import Feedback from '$lib/pages/Dashboard/Feedback/Feedback.svelte';
</script>

<div class="mb-12">
	<p class="text-2xl font-semibold text-white">Welcome <span class="textGradient">Jacob</span></p>
	<div class="mt-12">
		<p class="text-[#EFEFEF] text-xl">Local market statistics</p>
		<div class="mt-6 flex items-center w-full h-full justify-start gap-x-6">
			<div class="statCard">
				<p>Average home price</p>
				<p>$354,763</p>
			</div>
			<div class="statCard">
				<p>Total active listings</p>
				<p>14</p>
			</div>
			<div class="statCard">
				<p>Total pending</p>
				<p>3</p>
			</div>
			<div class="statCard">
				<p>Months of inventory</p>
				<p>2.3</p>
			</div>
		</div>
	</div>
	<div class="mt-6">
		<SocialMediaActivity />
	</div>
	<div class="mt-6">
		<CurrentCalender />
	</div>
	<div class="mt-6">
		<ActiveListings />
	</div>
	<div class="mt-6 w-full grid grid-cols-3 gap-x-6 h-full">
		<Announcements />
		<MortgageStats />
		<Feedback />
	</div>
</div>

<style lang="postcss">
	.textGradient {
		background: linear-gradient(88deg, #3f8bfd -50.22%, #49f9ea 89.43%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.statCard {
		width: 299.5px;
		height: 108px;
		padding: 24px 22px;
		border-radius: 10px;
		background: #151719;
		@apply border-opacity-20 border border-white;
	}

	.statCard p:nth-child(1) {
		color: #6f767e;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	.statCard p:nth-child(2) {
		color: #efefef;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		@apply mt-1;
	}
</style>
