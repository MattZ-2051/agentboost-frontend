<script lang="ts">
	import LandingBezier from '$lib/assets/svg/LandingBezier.svelte';
	import marketingTile1Img from '$lib/assets/images/Landing/Marketing/landing-marketing-preview.png';
	import marketingTile2Img from '$lib/assets/images/Landing/Marketing/landing-marketing-campaign.png';
	import marketingTile3Img from '$lib/assets/images/Landing/Marketing/advanced-analytics-img.png';
	import insightsTile1Img from '$lib/assets/images/Landing/Insights/tile1-img.png';
	import insightsTile2Img from '$lib/assets/images/Landing/Insights/tile2-img.png';
	import insightsTile3Img from '$lib/assets/images/Landing/Insights/tile3-img.png';
	import listingTile1Img from '$lib/assets/images/Landing/Listings/tile1-img.png';
	import listingTile2Img from '$lib/assets/images/Landing/Listings/tile2-img.png';
	import listingTile3Img from '$lib/assets/images/Landing/Listings/tile3-img.png';
	import buyersTile1Img from '$lib/assets/images/Landing/Buyers/tile1-img.png';
	import buyersTile2Img from '$lib/assets/images/Landing/Buyers/tile2-img.png';
	import buyersTile3Img from '$lib/assets/images/Landing/Buyers/tile3-img.png';
	export let selectedTab: string;
	const tabInfoMap: Record<string, Record<string, Record<string, string>>> = {
		marketing: {
			tile1: {
				title: 'Fully automated social media',
				img: marketingTile1Img
			},
			tile2: {
				title: 'Automated campaigns',
				img: marketingTile2Img
			},
			tile3: {
				title: 'Advanced analytics and AI generated suggestions',
				img: marketingTile3Img
			}
		},
		insights: {
			tile1: {
				title: 'Hyper local market data',
				img: insightsTile1Img
			},
			tile2: {
				title: "Nearby POI's",
				img: insightsTile2Img
			},
			tile3: {
				title: 'Comparable Properties',
				img: insightsTile3Img
			}
		},
		listings: {
			tile1: {
				title: 'Property Descriptions',
				img: listingTile1Img
			},
			tile2: {
				title: 'Listing Generated Content',
				img: listingTile2Img
			},
			tile3: {
				title: 'Instant Exposure',
				img: listingTile3Img
			}
		},
		buyers: {
			tile1: {
				title: 'Easy navigation & scheduling',
				img: buyersTile1Img
			},
			tile2: {
				title: 'Seller Comfort Level',
				img: buyersTile2Img
			},
			tile3: {
				title: 'Optimized Offer',
				img: buyersTile3Img
			}
		}
	};
</script>

<div class="flex w-full flex-col items-center justify-center">
	<div
		class="mt-8 w-full rounded-[20px] border border-white border-opacity-5 p-1 sm:w-[600px] md:w-[600px] lg:w-[800px] xl:mt-16 xl:w-[1188px]"
	>
		<div
			class="flex h-full w-full flex-col items-center rounded-[18px] border border-white border-opacity-10 bg-black bg-opacity-30 p-8 shadow backdrop-blur-[14.35px] sm:p-12 xl:h-[490px]"
		>
			<div
				class="flex w-full flex-col items-start justify-start opacity-100 xl:flex-row xl:items-center xl:justify-center"
			>
				<div class="mr-4">
					<LandingBezier />
				</div>
				<p class="mt-4 whitespace-nowrap text-xl tracking-tight text-white xl:mt-0 xl:text-[32px]">
					{tabInfoMap[selectedTab.toLocaleLowerCase()].tile1.title}
				</p>
			</div>
			<p
				class="mt-4 w-full whitespace-nowrap text-left text-base font-light text-slate xl:text-center"
			>
				See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your best
				friend.
			</p>
			<div class="mt-8 w-full">
				<img
					src={tabInfoMap[selectedTab.toLocaleLowerCase()].tile1.img}
					alt=""
					class="h-[300px] rounded-[18px] object-cover md:h-[400px] xl:h-full xl:w-full"
				/>
			</div>
		</div>
	</div>
</div>

<div class="mt-6 flex justify-center">
	<div
		class="flex w-full flex-col items-center justify-between sm:w-[600px] md:w-[600px] lg:w-[800px] xl:w-[1188px] xl:flex-row"
	>
		<div class="rounded-[20px] border border-white border-opacity-5 bg-zinc-950 bg-opacity-0 p-1">
			<div
				class="h-full rounded-[18px] border border-white border-opacity-10 bg-black bg-opacity-30 p-8 shadow backdrop-blur-[14.35px] sm:w-[600px] sm:p-8 md:w-[600px] lg:w-[800px] xl:h-[598px] xl:w-[576px]"
			>
				<div class="flex flex-col xl:flex-row xl:items-center">
					<div class="mr-4">
						<LandingBezier />
					</div>
					<p class="mt-4 text-xl tracking-tight text-white xl:mt-0 xl:text-[32px]">
						{tabInfoMap[selectedTab.toLocaleLowerCase()].tile2.title}
					</p>
				</div>
				<p class="mt-4 w-full whitespace-nowrap text-left text-base font-light text-slate">
					See our feature packed app that’s <br class="inline-block" /> going to be your best friend.
				</p>
				<div class="mt-8">
					<img
						class="h-[300px] w-full rounded-[18px] object-cover mix-blend-lighten md:h-[400px] xl:h-[335px] xl:w-[487px]"
						src={tabInfoMap[selectedTab.toLocaleLowerCase()].tile2.img}
						alt=""
					/>
				</div>
			</div>
		</div>
		<div
			class="mt-6 rounded-[20px] border border-white border-opacity-5 bg-zinc-950 bg-opacity-0 p-1 xl:mt-0"
		>
			<div
				class="h-full rounded-[18px] border border-white border-opacity-10 bg-black bg-opacity-30 p-8 shadow backdrop-blur-[14.35px] sm:w-[600px] sm:p-8 md:w-[600px] lg:w-[800px] xl:h-[598px] xl:w-[576px]"
			>
				<div class="flex flex-col xl:flex-row xl:items-center">
					<div class="relative flex w-full flex-col">
						<div class="absolute">
							<LandingBezier />
						</div>
						<p class="ml-12 mt-4 text-xl tracking-tight text-white xl:mt-0 xl:text-[32px]">
							{tabInfoMap[selectedTab.toLocaleLowerCase()].tile3.title}
						</p>
					</div>
				</div>
				<p class="mt-4 w-full whitespace-nowrap text-left text-base font-light text-slate">
					See our feature packed app that’s <br class="inline-block" /> going to be your best friend.
				</p>

				<div class="mt-8">
					<img
						class="h-[300px] w-full rounded-[18px] object-cover mix-blend-lighten md:h-[400px] xl:h-[335px] xl:w-[487px]"
						src={tabInfoMap[selectedTab.toLocaleLowerCase()].tile3.img}
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
