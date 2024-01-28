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

<div class="w-full flex flex-col items-center justify-center">
	<div
		class="p-1 xl:w-[1188px] sm:w-[600px] rounded-[20px] w-full md:w-[600px] lg:w-[800px] border border-white border-opacity-5 mt-8 xl:mt-16"
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
					{tabInfoMap[selectedTab.toLocaleLowerCase()].tile1.title}
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
					src={tabInfoMap[selectedTab.toLocaleLowerCase()].tile1.img}
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
				class="h-full md:w-[600px] sm:w-[600px] lg:w-[800px] xl:w-[576px] xl:h-[598px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 sm:p-8"
			>
				<div class="flex xl:items-center xl:flex-row flex-col">
					<div class="mr-4">
						<LandingBezier />
					</div>
					<p class="text-white text-xl xl:text-[32px] tracking-tight mt-4 xl:mt-0">
						{tabInfoMap[selectedTab.toLocaleLowerCase()].tile2.title}
					</p>
				</div>
				<p class="text-left whitespace-nowrap mt-4 text-slate font-light text-base w-full">
					See our feature packed app that’s <br class="inline-block" /> going to be your best friend.
				</p>
				<div class="mt-8">
					<img
						class="xl:w-[487px] xl:h-[335px] h-[300px] md:h-[400px] w-full mix-blend-lighten rounded-[18px] object-cover"
						src={tabInfoMap[selectedTab.toLocaleLowerCase()].tile2.img}
						alt=""
					/>
				</div>
			</div>
		</div>
		<div
			class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-6 xl:mt-0"
		>
			<div
				class="h-full md:w-[600px] sm:w-[600px] lg:w-[800px] xl:w-[576px] xl:h-[598px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 sm:p-8"
			>
				<div class="flex xl:items-center xl:flex-row flex-col">
					<div class="flex flex-col w-full relative">
						<div class="absolute">
							<LandingBezier />
						</div>
						<p class="text-white text-xl xl:text-[32px] tracking-tight mt-4 xl:mt-0 ml-12">
							{tabInfoMap[selectedTab.toLocaleLowerCase()].tile3.title}
						</p>
					</div>
				</div>
				<p class="text-left whitespace-nowrap mt-4 text-slate font-light text-base w-full">
					See our feature packed app that’s <br class="inline-block" /> going to be your best friend.
				</p>

				<div class="mt-8">
					<img
						class="xl:w-[487px] xl:h-[335px] mix-blend-lighten rounded-[18px] h-[300px] md:h-[400px] w-full object-cover"
						src={tabInfoMap[selectedTab.toLocaleLowerCase()].tile3.img}
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
