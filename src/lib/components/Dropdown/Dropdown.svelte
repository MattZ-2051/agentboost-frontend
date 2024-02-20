<script lang="ts">
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';

	export let iconSize: number = 24;
	export let showContent: boolean = false;
	export let classes: string;
	export let label: string | undefined = undefined;
	export let dropdownClasses: string = '';
</script>

<div class={`${classes} relative rounded-[10px]`}>
	{#if label}
		<div class="flex h-full w-full items-center justify-between">
			<p class="font-medium text-[#CFD0D5]">{label}</p>
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
			class={`${dropdownClasses} absolute right-0 top-[3.5rem] z-20 h-fit w-full rounded-[10px] bg-[#25282D] px-[18px] py-3`}
		>
			<slot name="content" />
		</div>
	{/if}
</div>
