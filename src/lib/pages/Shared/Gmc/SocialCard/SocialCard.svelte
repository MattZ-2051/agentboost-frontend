<script lang="ts">
	import { goto } from '$app/navigation';
	import Plus from '$lib/assets/svg/Plus.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const handleFileInput = () => {
		document.getElementById('fileInput')?.click();
	};

	export let cardData: { caption: string; imgSrc: string; calenderDate: string | null };

	const { caption, imgSrc, calenderDate } = cardData;

	const modalStore = getModalStore();

	let gmcFilePreview: string = '';
	let gmcFile: any;

	const handleFileOnChange = (e: any) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		gmcFile = image;
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			gmcFilePreview = e?.target?.result as string;
		};
	};

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

	console.log('calender date', calenderDate);
</script>

<Card width="w-[284px]" height="h-[600px]" classes="flex flex-col">
	<div class="flex h-full w-full flex-col overflow-hidden">
		<div>
			{#if gmcFilePreview?.length === 0 && imgSrc?.length === 0}
				<div
					class="relative flex !h-[251px] w-full flex-col items-center justify-center rounded-[10px] border border-dashed border-[#2E2F37] bg-[#1E2225]"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D3335] hover:scale-110 hover:cursor-pointer"
						on:click={handleFileInput}
					>
						<input
							bind:files={gmcFile}
							on:change={handleFileOnChange}
							type="file"
							class="hidden h-full w-full"
							id="fileInput"
						/>
						<Plus />
					</div>
					<p class="mt-2 text-lg font-semibold text-[#E9E9E9]">Add an img</p>
					<p class="mt-2 text-xs font-normal text-[#A0A1AB]">PNG and JPEG accepted</p>
				</div>
			{:else}
				<img src={gmcFilePreview} alt="" class="!h-[251px] w-full rounded-[10px] object-cover" />
			{/if}
		</div>
		<div class="flex h-full flex-col items-start justify-start overflow-hidden">
			<p class="mt-6 text-[14px] text-[#A0A1AB]">Caption</p>
			<p class="mt-2 overflow-auto pr-1 text-sm leading-6 text-[#CFD0D5]">
				{caption}
			</p>
		</div>
	</div>
	{#if !calenderDate}
		<Button
			label="Add to Calender"
			variant="variant-app-primary"
			bg="bg-[#171A1C]"
			classes="!w-full !h-12 !mt-8"
			onClick={() => handleListingAdd()}
		/>
	{:else if calenderDate}
		<Button
			label="View Calender"
			variant="variant-app-primary"
			bg="bg-[#171A1C]"
			classes="!w-full !h-12 !mt-8"
			onClick={async () => await goto('/marketing')}
		/>
	{/if}
</Card>
