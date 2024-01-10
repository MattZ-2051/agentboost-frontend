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
	<div class="flex flex-col justify-between h-full w-full">
		<div>
			<div
				class="flex flex-col items-center justify-center w-full !h-[251px] relative bg-[#1E2225] rounded-[10px] border border-dashed border-[#2E2F37]"
			>
				<div
					class="hover:cursor-pointer hover:scale-110 bg-[#1D3335] w-12 h-12 rounded-full flex items-center justify-center"
					on:click={handleFileInput}
				>
					<input type="file" class="w-full h-full hidden" id="fileInput" />
					<Plus />
				</div>
				<p class="font-semibold text-[#E9E9E9] text-lg mt-2">Add an img</p>
				<p class="text-xs text-[#A0A1AB] mt-2 font-normal">PNG and JPEG accepted</p>
			</div>
			<div class="flex flex-col justify-start items-start">
				<p class="mt-6 text-[14px] text-[#A0A1AB]">Caption</p>
				<p class="text-[#CFD0D5] text-sm mt-2 leading-6">
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
