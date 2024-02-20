<script lang="ts">
	import AreaIcon from '$lib/assets/svg/AreaIcon.svelte';
	import BathTubIcon from '$lib/assets/svg/BathTubIcon.svelte';
	import BedIcon from '$lib/assets/svg/BedIcon.svelte';
	import BuyerCalenderIcon from '$lib/assets/svg/BuyerCalenderIcon.svelte';
	import ChevronLeft from '$lib/assets/svg/Chevron/ChevronLeft.svelte';
	import FamilyIcon from '$lib/assets/svg/FamilyIcon.svelte';
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import TaxIcon from '$lib/assets/svg/TaxIcon.svelte';
	import dummyImg from '$lib/assets/images/dummy-buyer-img.png';
	import Box from '$lib/components/Box/Box.svelte';
	import CopyIcon from '$lib/assets/svg/CopyIcon.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const copyTextToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			getToastStore().trigger({
				message: 'Copied to clipboard!',
				background: 'bg-gradient-to-r from-[#3F82FF] via-[#3F82FF] to-[#4AF9EA]'
			});
		} catch (err) {
			throw new Error('failed to copy text to clipboard');
		}
	};

	const propertyDescription = ` Welcome to 10044 W Springdale Ct, a charming Single Family home located in Boise, ID. This
				stunning property boasts an array of features that will surely capture your attention. With
				2 bedrooms and 2 bathrooms, this home offers a comfortable and flexible living space for
				individuals or small families. Spread across true floors, this home was built in 1976,
				showcasing its timeless character and durability.
				As you enter, you will be greeted by a spacious 1432 square feet of living area, providing ample
				room for all your needs. One of the standout features of this property is the attached garage
				with 2 spaces, ensuring your vehicles stay protected from the elements. Additionally, this home
				offers an atrium, allowing you to bring the beauty and serenity of nature right into your living
				space. Imagine relaxing in your own private oasis, surrounded by lush greenery and natural sunlight
				pouring in through the windows. The location of this property is also a major plus.
				As you enter, you will be greeted by a spacious 1432 square feet of living area, providing ample
				room for all your needs. One of the standout features of this property is the attached garage
				with 2 spaces, ensuring your vehicles stay protected from the elements. Additionally, this home
				offers an atrium, allowing you to bring the beauty and serenity of nature right into your living
				space. Imagine relaxing in your own private oasis, surrounded by lush greenery and natural sunlight
				pouring in through the windows. The location of this property is also a major plus.`;
</script>

<div class="flex h-full w-full flex-col rounded-[20px] bg-[#151719] p-8">
	<div class="flex h-full w-full justify-between">
		<div class="flex w-2/5 flex-col">
			<div class="flex items-center gap-x-6">
				<ChevronLeft />
				<p class="text-2xl font-semibold leading-[normal] text-white">10044 W Springdale Ct</p>
			</div>
			<div class="mt-[30px] flex flex-row items-center gap-x-6">
				<div class="mt-4 flex h-full w-full flex-row flex-wrap items-start gap-x-4 gap-y-1">
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<LocationIconOutlined />
							<p>Boise, ID</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<FamilyIcon />
							<p>Single Family</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<BuyerCalenderIcon />
							<p>30 days on market</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<p>Owner: John Doe</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<p>Subdivision: John Doe</p>
						</div>
					</Chip>
				</div>
			</div>
			<div class="mt-[40px]">
				<p class="text-[20px] text-[#EFEFEF]">Property Info</p>
				<div class="mt-4 flex h-full w-full flex-row flex-wrap items-start gap-x-4 gap-y-4">
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<BedIcon />
							<p>2 Bedrooms</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<BathTubIcon />
							<p>2 Bathrooms</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<BathTubIcon />
							<p>2 Garages</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<AreaIcon />
							<p>1485 sqft</p>
						</div>
					</Chip>
				</div>
			</div>
			<div class="mt-[40px]">
				<p class="text-xl font-medium text-[#EFEFEF]">Taxes and fees</p>
				<div class="mt-4 flex flex-wrap gap-x-4 gap-y-2">
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<TaxIcon />
							<p>Association fees: $550/month</p>
						</div>
					</Chip>
					<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
						<div class="flex w-full items-center justify-center gap-x-2">
							<TaxIcon />
							<p>Taxes: $2500/year</p>
						</div>
					</Chip>
				</div>
			</div>
		</div>
		<div class="relative flex w-3/5 items-center justify-end">
			<div class="relative">
				<img class="h-[435px] w-[663px] rounded-xl object-cover" src={dummyImg} alt="" />
				<div
					class="absolute left-6 top-6 flex h-fit w-fit items-center justify-center rounded-[10px] bg-[#22272AB2] bg-opacity-70 p-2"
				>
					<div class="flex h-full w-full flex-col items-end justify-center">
						<p class="mb-1 text-[26px] text-[#EFEFEF]">$ 379,900</p>
						<p class="w-full text-end text-sm font-light text-[#CFD0D5]">$ 1,540 / sq ft</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-10">
		<Box bgColor="bg-[#1E2225]" width="w-full" height="h-full" classes="p-6">
			<div class="flex h-full w-full items-center justify-between">
				<p class="text-[20px] font-medium text-[#EFEFEF]">Property Description</p>
				<div on:click={() => copyTextToClipboard(propertyDescription)}>
					<CopyIcon />
				</div>
			</div>
			<div class="mt-4 text-[14px] leading-6 text-[#CFD0D5]">
				{propertyDescription}
			</div>
		</Box>
	</div>
</div>
