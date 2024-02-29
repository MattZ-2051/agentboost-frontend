<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import Button from '../Button/Button.svelte';
	import RadioButton from '../RadioButton/RadioButton.svelte';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const formData = {
		date: new Date()
	};

	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
</script>

{#if $modalStore[0]}
	<div class="!w-[450px] rounded-[10px] bg-[#1A1A1A] p-6">
		<div class="flex w-full flex-col items-start justify-center gap-y-4">
			<p class="text-xl font-semibold">Connect An Account</p>
			<RadioButton label="X" selected={false} classes="!w-full" />
			<RadioButton label="Instagram" selected={false} classes="!w-full" />
			<RadioButton label="Facebook" selected={false} classes="!w-full" />
		</div>
		<div class="mt-8 grid w-full grid-cols-2 gap-x-4">
			<Button
				variant="variant-app-primary"
				classes="!h-10"
				label="Close"
				bg="bg-[#1A1A1A]"
				onClick={() => modalStore.close()}
			/>
			<Button
				variant="variant-app-primary"
				classes=""
				label="Add"
				bg="bg-[#1A1A1A]"
				onClick={onFormSubmit}
			/>
		</div>
	</div>
{/if}
