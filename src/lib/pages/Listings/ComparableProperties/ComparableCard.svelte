<script lang="ts">
	import Chip from '$lib/components/Chip/Chip.svelte';
	import BathTubIcon from '$lib/assets/svg/BathTubIcon.svelte';
	import BedIcon from '$lib/assets/svg/BedIcon.svelte';
	import AreaIcon from '$lib/assets/svg/AreaIcon.svelte';
	import LotSizeIcon from '$lib/assets/svg/LotSizeIcon.svelte';
	import EngineerIcon from '$lib/assets/svg/EngineerIcon.svelte';
	import dummyImg from '$lib/assets/images/dummy-buyer-img.png';
</script>

<div
	class="bg-[#171A1C] rounded-[10px] w-[297px] h-[513px] flex flex-col p-4 border border-[#2E2F37]"
>
	<div class="bg-[#1E2225] rounded-[10px] w-full h-[242px] p-4">
		<img class="object-cover w-full rounded-[10px] h-full" src={dummyImg} alt="" />
	</div>
	<p class="text-[#fff] text-base font-semibold mt-[18px]">10044 W Springdale Ct</p>
	<div class="bg-[#22272A] w-full rounded-[10px] h-[34px] mt-4 flex items-center justify-center">
		<p class="text-primary-500 text-[13px] font-medium">Active</p>
	</div>
	<div class="mt-6 grid grid-cols-2 gap-4">
		<Chip variant="variant-app-primary" classes="!min-w-[125px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-2">
				<BedIcon />
				<p>2 Bedrooms</p>
			</div>
		</Chip>
		<Chip variant="variant-app-primary" classes="!min-w-[125px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-4">
				<BathTubIcon />
				<p>2 Bathrooms</p>
			</div>
		</Chip>
		<Chip variant="variant-app-primary" classes="!min-w-[125px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-4">
				<AreaIcon />
				<p>1485 sqft</p>
			</div>
		</Chip>
		<Chip variant="variant-app-primary" classes="!min-w-[125px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-4">
				<LotSizeIcon />
				<p>2049 lot size</p>
			</div>
		</Chip>
		<Chip variant="variant-app-primary" classes="!min-w-[125px] !bg-[#22272A]">
			<div class="flex w-full items-center justify-center gap-x-4">
				<EngineerIcon />
				<p>Built in 1987</p>
			</div>
		</Chip>
	</div>
</div>
