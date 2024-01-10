<script lang="ts">
	import CloseIconGrey from '$lib/assets/svg/CloseIcon/CloseIconGrey.svelte';
	import GmcUserIcon from '$lib/assets/svg/GmcUserIcon/GmcUserIcon.svelte';
	import LocationIconOutlined from '$lib/assets/svg/Location/LocationIconOutlined.svelte';
	import PdfIcon from '$lib/assets/svg/PdfIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import dummyImg from '$lib/assets/images/dummy-email-template-img.png';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	$: showCityContent = false;

	$: showHeadlineContent = false;

	const items = ['Just Listed', 'Price Reduced', 'Back on Market'];

	$: cities = [
		'Boise, ID',
		'nampa, ID',
		'sadf, ID',
		'Boisdde, ID',
		'czxvsd, ID',
		'Bdsafewoise, ID'
	];

	const handleCityAction = (city: string) => {
		cities = cities.filter((item) => item !== city);
	};

	const modalStore = getModalStore();
	const handleSendToLocalAgents = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalConfirm',
			body: 'Are you sure you want to send to local agents?',
			title: 'Send to local agents',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	};
</script>

<div class="w-full flex mt-4 gap-x-12">
	<div class="w-1/4">
		<div class="border-[#2E2F37] rounded-[10px] p-4 border w-full bg-[#171A1C]">
			<img class="rounded-[10px] w-full h-[150px] object-cover" src={dummyImg} alt="" />
			<div class="flex gap-x-2 my-4">
				<span>
					<PdfIcon />
				</span>
				<div>
					<p class="text-[#fff] text-base font-semibold">
						10044 W Springdale Ct Generated Document
					</p>
					<div class="mt-2 flex gap-x-2 items-center whitespace-nowrap">
						<p class="text-[#8E8E8E] text-sm font-light">12 pages</p>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="4"
								height="4"
								viewBox="0 0 4 4"
								fill="none"
							>
								<circle cx="2" cy="2" r="2" fill="#292F33" />
							</svg>
						</span>
						<p class="text-[#8E8E8E] text-sm font-light">PDF</p>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="4"
								height="4"
								viewBox="0 0 4 4"
								fill="none"
							>
								<circle cx="2" cy="2" r="2" fill="#292F33" />
							</svg>
						</span>
						<p class="text-[#8E8E8E] text-sm font-light">156 MB</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="border-[#2E2F37] rounded-[10px] w-4/5 bg-[#171A1C] border px-4 py-6">
		<div class="grid grid-cols-2">
			<div>
				<p class="text-[#fff] text-[18px] font-semibold">Add cities</p>
				<p class="text-[#707281] text-[15px] font-normal mt-2">
					To increase the number of agents the document is sent to.
				</p>
				<div class="mt-6 flex gap-x-6">
					<Dropdown
						classes="p-2 px-4 !bg-[#25282D] !min-w-[256px] !h-[48px] text-sm"
						showContent={showCityContent}
						label="City"
					/>
					<Button
						label="Add city"
						bg="bg-[#171A1C]"
						classes="!h-[48px] w-full"
						variant="variant-app-primary"
					/>
				</div>
				<div class="mt-8">
					<p class="text-[#CFD0D5] text-[15px] font-semibold">Added cities</p>
					<div class="flex flex-wrap w-full gap-4 mt-2">
						{#each cities as city, i}
							<Chip variant="variant-app-primary" classes="!min-w-[125px] !h-[34px] !bg-[#22272A]">
								<div class="flex w-full items-center justify-between gap-x-2">
									<LocationIconOutlined />
									<p>{city}</p>
									<div on:click={() => handleCityAction(city)}>
										<CloseIconGrey />
									</div>
								</div>
							</Chip>
						{/each}
					</div>
				</div>
				<div class="mt-6 flex flex-col">
					<p class="text-[#CFD0D5] text-[15px] font-semibold">Headline</p>
					<RadioDropdown
						{items}
						classes="w-full h-[48px] px-[18px] py-[12px] flex justify-between mt-2"
						showContent={showHeadlineContent}
					/>
				</div>
				<div class="mt-6 flex flex-col">
					<p class="text-[#CFD0D5] text-[15px] font-semibold">Subject</p>
					<Input
						label=""
						placeholder="Subject Here"
						type="text"
						value=""
						classes="!h-[48px] !mt-2"
						variant="variant-app-primary"
					/>
				</div>
				<div class="mt-6 flex flex-col">
					<p class="text-[#CFD0D5] text-[15px] font-semibold">Preview</p>
					<Input
						label=""
						placeholder="Preview Here"
						type="text"
						value=""
						classes="!h-[48px] !mt-2"
						variant="variant-app-primary"
					/>
				</div>
			</div>
			<div class="flex w-full justify-end">
				<div class="bg-[#1E2225] w-[297px] h-fit rounded-[10px]">
					<div class="mt-20 flex flex-col items-center">
						<GmcUserIcon />
						<p class="text-[#fff] text-[35px] font-semibold mt-12">125</p>
						<p class="text-[#707281] font-light mt-8 text-[15px] text-center">
							Number of agents based on <br /> your location
						</p>
						<div class="px-6 mt-8 my-6">
							<Button
								label="Send to local agents"
								bg="bg-[#1E2225]"
								classes="!h-[48px] !w-[249px]"
								variant="variant-app-primary"
								onClick={handleSendToLocalAgents}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
