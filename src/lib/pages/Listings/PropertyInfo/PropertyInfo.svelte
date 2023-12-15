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
</script>

<div class="bg-[#151719] rounded-[20px] w-full h-full p-8 flex flex-col">
	<div class="flex w-full h-full justify-between">
		<div class="flex flex-col w-2/5 justify-between">
			<div class="flex items-center gap-x-6">
				<ChevronLeft />
				<p class="text-white text-2xl font-semibold leading-[normal]">10044 W Springdale Ct</p>
			</div>
			<div class="flex flex-row items-center gap-x-6">
				<div class="flex flex-row gap-x-4 flex-wrap mt-4 w-full gap-y-1 items-start h-full">
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
			<div class="">
				<p class="text-[#EFEFEF] text-[20px]">Property Info</p>
				<div class="flex flex-row gap-x-4 flex-wrap mt-4 w-full gap-y-4 items-start h-full">
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
			<div class="">
				<p class="text-[#EFEFEF] text-xl font-medium">Taxes and fees</p>
				<div class="mt-4 flex gap-x-4 gap-y-2 flex-wrap">
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
		<div class="w-3/5 flex items-center justify-end relative">
			<div class="relative">
				<img
					class="w-[663px] h-[435px] rounded-xl"
					src="https://via.placeholder.com/663x435"
					alt=""
				/>
				<div
					class="bg-[#22272AB2] w-[149px] h-[58px] flex items-center justify-center bg-opacity-70 absolute top-6 left-6 rounded-[10px] p-2"
				>
					<div class="flex items-end w-full flex-col">
						<p class="text-[#EFEFEF] text-[26px] mb-1">$ 379,900</p>
						<p class="text-[#CFD0D5] text-sm font-light">$ 1,540 / sq ft</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-[#1E2225] p-6 mt-8 rounded-[20px] border border-white border-opacity-20">
		<p class="text-[#EFEFEF] text-[20px]">Property Description</p>
		<p class="text-[#CFD0D5] text-[14px] leading-6 mt-4">
			Welcome to 10044 W Springdale Ct, a charming Single Family home located in Boise, ID. This
			stunning property boasts an array of features that will surely capture your attention. With 2
			bedrooms and 2 bathrooms, this home offers a comfortable and flexible living space for
			individuals or small families. Spread across true floors, this home was built in 1976,
			showcasing its timeless character and durability.
		</p>
		<p class="text-[#CFD0D5] text-[14px] leading-6 mt-4">
			As you enter, you will be greeted by a spacious 1432 square feet of living area, providing
			ample room for all your needs. One of the standout features of this property is the attached
			garage with 2 spaces, ensuring your vehicles stay protected from the elements. Additionally,
			this home offers an atrium, allowing you to bring the beauty and serenity of nature right into
			your living space. Imagine relaxing in your own private oasis, surrounded by lush greenery and
			natural sunlight pouring in through the windows. The location of this property is also a major
			plus.
		</p>
		<p class="text-[#CFD0D5] text-[14px] leading-6 mt-4">
			As you enter, you will be greeted by a spacious 1432 square feet of living area, providing
			ample room for all your needs. One of the standout features of this property is the attached
			garage with 2 spaces, ensuring your vehicles stay protected from the elements. Additionally,
			this home offers an atrium, allowing you to bring the beauty and serenity of nature right into
			your living space. Imagine relaxing in your own private oasis, surrounded by lush greenery and
			natural sunlight pouring in through the windows. The location of this property is also a major
			plus.
		</p>
	</div>
</div>
