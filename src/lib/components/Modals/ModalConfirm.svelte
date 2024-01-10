<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import Button from '../Button/Button.svelte';

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
	<div class="rounded-[10px] bg-[#1A1A1A] p-6 !w-[450px]">
		<header class="text-2xl mb-8">
			{$modalStore[0].title ?? '(title missing)'}
		</header>
		<article class="text-[#CFD0D5]">{$modalStore[0].body ?? '(body missing)'}</article>
		<div class="w-full grid grid-cols-2 gap-x-4 mt-8">
			<Button
				variant="variant-app-primary"
				classes="!h-10"
				label="Cancel"
				bg="bg-[#1A1A1A]"
				onClick={() => modalStore.close()}
			/>
			<Button
				variant="variant-app-primary"
				classes=""
				label="Confirm"
				bg="bg-[#1A1A1A]"
				onClick={onFormSubmit}
			/>
		</div>
	</div>
{/if}
