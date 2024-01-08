<script lang="ts">
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import FamilyIcon from '$lib/assets/svg/FamilyIcon.svelte';
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
	import BuyerCalenderIcon from '$lib/assets/svg/BuyerCalenderIcon.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import BedIcon from '$lib/assets/svg/BedIcon.svelte';
	import BathTubIcon from '$lib/assets/svg/BathTubIcon.svelte';
	import AreaIcon from '$lib/assets/svg/AreaIcon.svelte';
	import LotSizeIcon from '$lib/assets/svg/LotSizeIcon.svelte';
	import EngineerIcon from '$lib/assets/svg/EngineerIcon.svelte';
	import TaxIcon from '$lib/assets/svg/TaxIcon.svelte';
	import DollarIcon from '$lib/assets/svg/DollarIcon.svelte';
	import Uneasy from '../SellerComfort/Uneasy.svelte';
	import dummyBuyerImg from '$lib/assets/images/dummy-buyer-img.png';
	import Box from '$lib/components/Box/Box.svelte';
</script>

<div class="w-[431px] flex flex-col h-full">
	<Box
		bgColor="bg-[#1e2225]"
		width="w-full"
		height="h-[48px]"
		classes="gap-x-2 !px-4 !py-[12px] flex items-center justify-start"
	>
		<BuyersIcon iconSize={24} />
		<p class="text-[#C6C7CD] text-[18px]">10044 W springdale ct</p>
	</Box>
	<div class="mt-4">
		<img class="w-full h-[280px] rounded-xl object-cover" src={dummyBuyerImg} alt="" />
	</div>
	<div class="mt-6 flex gap-x-4 gap-y-4 flex-wrap">
		<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-2">
				<div>
					<LocationIconOutlined />
				</div>
				<p>Boise, ID</p>
			</div>
		</Chip>
		<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-2">
				<div>
					<FamilyIcon />
				</div>
				<p>Single Family</p>
			</div>
		</Chip>
		<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-2">
				<div>
					<BuyerCalenderIcon />
				</div>
				<p>Single Family</p>
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
	<div class="mt-8">
		<p class="text-[#EFEFEF] text-xl font-medium">Property Info</p>
		<div class="mt-6 flex gap-x-4 gap-y-4 flex-wrap">
			<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
				<div class="flex w-full items-center justify-center gap-x-2">
					<BedIcon />
					<p>2 bedrooms</p>
				</div>
			</Chip>
			<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
				<div class="flex w-full items-center justify-center gap-x-2">
					<BathTubIcon />
					<p>2 bathrooms</p>
				</div>
			</Chip>
			<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
				<div class="flex w-full items-center justify-center gap-x-2">
					<BathTubIcon />
					<p>2 garages</p>
				</div>
			</Chip>
			<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
				<div class="flex w-full items-center justify-center gap-x-2">
					<AreaIcon />
					<p>1485 sqft</p>
				</div>
			</Chip>
			<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
				<div class="flex w-full items-center justify-center gap-x-2">
					<LotSizeIcon />
					<p>2049 Lot Size</p>
				</div>
			</Chip>
			<Chip variant="variant-app-primary" classes="!min-w-[105px] !bg-[#22272A]">
				<div class="flex w-full items-center justify-center gap-x-2">
					<EngineerIcon />
					<p>Built in 1985</p>
				</div>
			</Chip>
		</div>
		<div class="mt-8">
			<p class="text-[#EFEFEF] text-xl font-medium">Taxes and fees</p>
			<div class="mt-6 flex gap-x-4 gap-y-4 flex-wrap">
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
		<div class="mt-8">
			<Box bgColor="bg-[#1E2225]" width="w-full" height="h-[340px]" classes="p-6">
				<p class="font-medium text-xl text-[#EFEFEF] mb-4">Property Description</p>
				<p class="text-sm text-[#CFD0D5] leading-6">
					Welcome to 10044 W Springdale Ct, a charming Single Family home located in Boise, ID. This
					stunning property boasts an array of features that will surely capture your attention.
					With 2 bedrooms and 2 bathrooms, this home offers a comfortable and flexible living space
					for individuals or small families. Spread across true floors, this home was built in 1976,
					showcasing its timeless character and durability.
				</p>
			</Box>
		</div>
		<div class="mt-8">
			<p class="text-[#EFEFEF] text-xl font-medium">Optimized Offer</p>
			<div
				class="bg-[#22272A] w-[156px] h-[44px] rounded-[10px] mt-4 flex items-center justify-center gap-x-2 p-8"
			>
				<div>
					<DollarIcon />
				</div>
				<p class="textGradient">$2500</p>
			</div>
		</div>
		<div class="mt-4">
			<p class="text-[#EFEFEF] text-xl font-medium">Seller Comfort</p>
			<div class="mt-4">
				<Uneasy />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.textGradient {
		background: linear-gradient(93deg, #3f8bfd 39.11%, #49f9ea 92.48%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 30px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 80% */
	}
</style>
