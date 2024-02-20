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
	class="flex h-[513px] w-[297px] flex-col rounded-[10px] border border-[#2E2F37] bg-[#171A1C] p-4"
>
	<div class="h-[242px] w-full rounded-[10px] bg-[#1E2225] p-4">
		<img class="h-full w-full rounded-[10px] object-cover" src={dummyImg} alt="" />
	</div>
	<p class="mt-[18px] text-base font-semibold text-[#fff]">10044 W Springdale Ct</p>
	<div class="mt-4 flex h-[34px] w-full items-center justify-center rounded-[10px] bg-[#22272A]">
		<p class="text-[13px] font-medium text-primary-500">Active</p>
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
