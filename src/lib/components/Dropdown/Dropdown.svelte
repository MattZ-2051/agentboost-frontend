<script lang="ts">
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';

	export let iconSize: number = 24;
	export let showContent: boolean = false;
	export let classes: string;
	export let label: string | undefined = undefined;
	export let dropdownClasses: string = '';
</script>

<div class={`${classes} rounded-[10px] relative`}>
	{#if label}
		<div class="flex w-full h-full items-center justify-between">
			<p class="text-[#CFD0D5] font-medium">{label}</p>
			<div
				class="hover:scale-110 hover:cursor-pointer"
				on:click={() => (showContent = !showContent)}
			>
				{#if showContent}
					<ChevronUp width={iconSize} height={iconSize} />
				{:else}
					<ChevronDown width={iconSize} height={iconSize} />
				{/if}
			</div>
		</div>
	{/if}
	<slot name="icon" />
	{#if showContent}
		<div
			class={`${dropdownClasses} absolute top-[3.5rem] right-0 z-20 bg-[#25282D] w-full h-fit px-[18px] py-3 rounded-[10px]`}
		>
			<slot name="content" />
		</div>
	{/if}
</div>
