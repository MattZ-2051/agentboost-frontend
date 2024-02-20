<script lang="ts">
	import Plus from '$lib/assets/svg/Plus.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const handleFileInput = () => {
		document.getElementById('fileInput')?.click();
	};

	const modalStore = getModalStore();

	const handleListingAdd = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalForm',
			body: 'Select date you want content to run',
			title: 'Select Date',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	};
</script>

<Card width="w-[284px]" height="h-[578px]">
	<div class="flex h-full w-full flex-col justify-between">
		<div>
			<div
				class="relative flex !h-[251px] w-full flex-col items-center justify-center rounded-[10px] border border-dashed border-[#2E2F37] bg-[#1E2225]"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D3335] hover:scale-110 hover:cursor-pointer"
					on:click={handleFileInput}
				>
					<input type="file" class="hidden h-full w-full" id="fileInput" />
					<Plus />
				</div>
				<p class="mt-2 text-lg font-semibold text-[#E9E9E9]">Add an img</p>
				<p class="mt-2 text-xs font-normal text-[#A0A1AB]">PNG and JPEG accepted</p>
			</div>
			<div class="flex flex-col items-start justify-start">
				<p class="mt-6 text-[14px] text-[#A0A1AB]">Caption</p>
				<p class="mt-2 text-sm leading-6 text-[#CFD0D5]">
					Calling all car enthusiasts! This Boise gem features a spacious attached garage with room
					for 2 vehicles. 🚗💨 #BoiseHomesForSale #GarageGoals #CarLovers #HomeWithGarage
					#CarEnthusiast
				</p>
			</div>
		</div>
		<Button
			label="Add to Calender"
			variant="variant-app-primary"
			bg="bg-[#171A1C]"
			classes="!w-full !h-12"
			onClick={() => handleListingAdd()}
		/>
	</div>
</Card>
