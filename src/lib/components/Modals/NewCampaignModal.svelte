<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
	import SlideToggle from '../SlideToggle/SlideToggle.svelte';
	import Chip from '../Chip/Chip.svelte';
	import CloseIcon from '$lib/assets/svg/CloseIcon/CloseIconWhite.svelte';
	import Input from '../Input/Input.svelte';
	import EditIcon from '$lib/assets/svg/EditIcon.svelte';
	import AddIcon from '$lib/assets/svg/AddIcon/AddIcon.svelte';
	import Button from '../Button/Button.svelte';

	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();
	const toastStore = getToastStore();
	const chipClasses = 'flex items-center justify-center';

	let targetAudiences: string[] = [];
	let messages: string = '';
	let showInput: boolean = false;
	let campaignActive: boolean = false;
	let campaignTitle: string = '';
	let currentTargetAudienceVal: string = '';

	const handleTargetAudience = (val: string, action: 'add' | 'remove') => {
		if (action === 'add') {
			targetAudiences.push(val);
			targetAudiences = targetAudiences;
			currentTargetAudienceVal = '';
			console.log('targets');
		}

		if (action === 'remove') {
			targetAudiences = targetAudiences.filter((item) => val != item);
		}
	};

	const handleNewCampaign = () => {
		if (campaignTitle.length === 0 || targetAudiences.length === 0 || messages.length === 0) {
			toastStore.trigger({
				message: 'Missing Required Fields.',

				background: 'variant-filled-error'
			});
			return;
		}
		modalStore.close();

		toastStore.trigger({
			message: 'Campaign Added',
			background: 'variant-filled-success'
		});
		return;
	};
</script>

{#if $modalStore[0]}
	<div
		class="min-h-[357px] w-[540px] rounded-[10px] border border-white border-opacity-10 bg-[#171A1C] p-6"
	>
		<Input
			type="text"
			label="Title"
			placeholder="My Custome Campaign Title"
			classes="!w-full h-10 w-full rounded-[10px]"
			bind:value={campaignTitle}
			variant="variant-app-primary"
		/>
		<div class="mt-8 flex items-center">
			<SlideToggle value={campaignActive} label="Set As Active?" />
		</div>
		<div class="mt-8">
			<p class="text-sm font-normal leading-normal text-[#C6C7CD]">Target Audience</p>
			<div
				class="relative mt-2 flex h-10 w-full items-center gap-x-4 rounded-[10px] bg-[#24282D] px-4 py-[7px]"
			>
				{#each targetAudiences as item, i}
					<Chip variant="variant-app-primary" classes={chipClasses}>
						<p>{item}</p>
						<span on:click={() => handleTargetAudience(item, 'remove')}
							><CloseIcon width={10} height={10} /></span
						>
					</Chip>
				{/each}
				<div class="flex w-full justify-end">
					{#if !showInput}
						<div on:click={() => (showInput = !showInput)}>
							<EditIcon />
						</div>
					{:else}
						<div on:click={() => (showInput = !showInput)}>
							<CloseIcon />
						</div>
					{/if}
				</div>
			</div>
			<div class="">
				{#if showInput}
					<div
						transition:fade={{ delay: 0, duration: 300 }}
						class="relative mt-2 flex h-10 w-full justify-end rounded-[10px] bg-[#24282D]"
					>
						<Input
							type="text"
							label=""
							placeholder="Messages..."
							classes="!w-3/5 h-10 w-full absolute top-0 left-0"
							bind:value={currentTargetAudienceVal}
							variant="variant-app-primary"
						/>
						<div
							class="flex h-full w-[100px] items-center justify-center gap-x-2 rounded-[10px] bg-[#1D3335] px-4 py-2"
						>
							<div on:click={() => handleTargetAudience(currentTargetAudienceVal, 'add')}>
								<AddIcon />
							</div>
							<p class="whitespace-nowrap text-[14px] font-semibold">Add</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="mt-8">
			<p class="text-sm font-normal leading-normal text-[#C6C7CD]">Messages</p>
			<Input
				type="textarea"
				label=""
				placeholder="Messages..."
				classes="rounded-[10px] bg-[#24282D] px-4 py-3"
				bind:value={messages}
				variant="variant-app-primary"
			/>
		</div>
		<div class="mt-4 grid grid-cols-2 gap-x-4">
			<Button
				label="Cancel"
				bg="bg-[#171A1C]"
				variant="variant-app-primary"
				classes="!h-12"
				onClick={() => modalStore.close()}
			/>
			<Button
				label="Create"
				bg="bg-[#171A1C]"
				variant="variant-app-primary"
				classes="!h-12"
				onClick={handleNewCampaign}
			/>
		</div>
	</div>
{/if}
