<script lang="ts">
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import FamilyIcon from '$lib/assets/svg/FamilyIcon.svelte';
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
	import BuyerCalenderIcon from '$lib/assets/svg/BuyerCalenderIcon.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
</script>

<div class="w-[431px] flex flex-col">
	<div
		class="bg-[#1E2225] w-full flex items-center justify-start h-[48px] rounded-[10px] gap-x-2 px-4 py-[18px] border border-white border-opacity-20"
	>
		<BuyersIcon iconSize={20} />
		<p class="text-[#C6C7CD] text-base">10044 W springdale ct</p>
	</div>
	<div class="mt-4">
		<img class="w-full h-[280px] rounded-xl" src="https://via.placeholder.com/431x280" alt="" />
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
</div>
