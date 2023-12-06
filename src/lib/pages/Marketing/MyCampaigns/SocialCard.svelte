<script lang="ts">
	import Plus from '$lib/assets/svg/Plus.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';
</script>

<Card width="w-[284px]" height="h-[578px]">
	<div class="flex flex-col justify-between h-full w-full">
		<div>
			<div
				class="flex flex-col items-center justify-center w-full !h-[251px] relative bg-[#1E2225] rounded-[10px] border border-dashed border-[#2E2F37]"
			>
				<div class="bg-[#1D3335] w-12 h-12 rounded-full flex items-center justify-center">
					<Plus />
				</div>
				<p class="font-semibold text-[#E9E9E9] text-lg mt-2">Add an img</p>
				<p class="text-xs text-[#A0A1AB] mt-2 font-normal">PNG and JPEG accepted</p>
			</div>
			<div class="flex flex-col justify-start items-start">
				<p class="mt-6 text-[#A0A1AB]">Caption</p>
				<p class="text-[#CFD0D5] text-sm mt-4">
					Calling all car enthusiasts! This Boise gem features a spacious attached garage with room
					for 2 vehicles. 🚗💨 #BoiseHomesForSale #GarageGoals #CarLovers #HomeWithGarage
					#CarEnthusiast
				</p>
			</div>
		</div>
		<Button
			label="Add to Calender"
			variant="variant-app-primary"
			bg="bg-[#1E2225]"
			classes="!w-full !h-12"
		/>
	</div>
</Card>
