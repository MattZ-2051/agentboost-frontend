<script lang="ts">
	import LandingBezier from '$lib/assets/svg/LandingBezier.svelte';
	import landingPlaceholder from '$lib/assets/images/landingPlaceholder.png';
	import landingScreenshot1 from '$lib/assets/images/landingAppScreenshot1.png';
</script>

<div class="w-full flex flex-col items-center justify-center">
	<div
		class="p-1 xl:w-[1188px] sm:w-[600px] bg-zinc-950 bg-opacity-0 rounded-[20px] w-full md:w-[600px] lg:w-[800px] border border-white border-opacity-5 mt-8 xl:mt-16"
	>
		<div
			class="w-full h-full xl:h-[490px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] flex flex-col items-center p-8 sm:p-12"
		>
			<div
				class="flex flex-col w-full xl:flex-row items-start xl:justify-center justify-start xl:items-center opacity-100"
			>
				<div class="mr-4">
					<LandingBezier />
				</div>
				<p class="text-white text-xl xl:text-[32px] tracking-tight whitespace-nowrap mt-4 xl:mt-0">
					Fully automated social media
				</p>
			</div>
			<p
				class="text-left xl:text-center whitespace-nowrap mt-4 text-slate font-light text-base w-full"
			>
				See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your best
				friend.
			</p>
			<div class="mt-8 w-full">
				<img
					src={landingScreenshot1}
					alt=""
					class="object-cover xl:w-full xl:h-full h-[300px] md:h-[400px] rounded-[18px]"
				/>
			</div>
		</div>
	</div>
</div>

<div class="flex justify-center mt-6">
	<div
		class="flex justify-between xl:w-[1188px] sm:w-[600px] w-full md:w-[600px] lg:w-[800px] xl:flex-row flex-col items-center"
	>
		<div class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5">
			<div
				class="h-full md:w-[600px] sm:w-[600px] lg:w-[800px] xl:w-[576px] xl:h-[598px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 sm:p-12"
			>
				<div class="flex xl:items-center xl:flex-row flex-col">
					<div class="mr-4">
						<LandingBezier />
					</div>
					<p class="text-white text-xl xl:text-[32px] tracking-tight mt-4 xl:mt-0">
						Automated Campaigns
					</p>
				</div>
				<p
					class="text-left xl:text-center whitespace-nowrap mt-4 xl:mt-8 text-slate font-light text-base w-full"
				>
					See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your best
					friend.
				</p>
				<div class="mt-8">
					<img
						class="xl:w-[487px] xl:h-[335px] h-[300px] md:h-[400px] w-full mix-blend-lighten rounded-[18px] object-cover"
						src={landingPlaceholder}
						alt=""
					/>
				</div>
			</div>
		</div>
		<div
			class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-6 xl:mt-0"
		>
			<div
				class="h-full md:w-[600px] lg:w-[800px] sm:w-[600px] xl:w-[576px] xl:h-[598px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 sm:p-12"
			>
				<div class="flex xl:items-center xl:flex-row flex-col items-start justify-start">
					<div class="mr-4">
						<LandingBezier />
					</div>
					<p class="text-white text-xl xl:text-[32px] tracking-tight mt-4 xl:mt-0">
						Advanced analytics and ai generated suggestions
					</p>
				</div>
				<p
					class="text-left xl:text-center whitespace-nowrap mt-4 xl:mt-8 text-slate font-light text-base w-full"
				>
					See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your best
					friend.
				</p>
				<div class="mt-8">
					<img
						class="xl:w-[487px] xl:h-[335px] mix-blend-lighten rounded-[18px] h-[300px] md:h-[400px] w-full object-cover"
						src={landingPlaceholder}
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
