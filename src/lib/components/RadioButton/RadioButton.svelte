<script lang="ts">
	export let selected: boolean = false;
	export let label: string;
	export let classes: string = '';
	export let optionSelected: boolean = false;
</script>

<div
	class={`h-12 w-[124px] rounded-[10px] p-[1px] ${classes} ${
		selected
			? 'bg-gradient-to-r from-[#3F82FF] to-[#4AF9EA] text-cyan-300'
			: 'border border-[#454849] text-[#CFD0D5]'
	} `}
>
	<div
		class={`flex h-full w-full items-center justify-center gap-x-4 rounded-[10px] bg-[#171A1C] px-4 py-3 ${optionSelected && !selected && `opacity-30`}`}
	>
		<div class="flex w-[150px] items-center justify-start gap-x-4">
			<div class="relative h-[22px] w-[22px] hover:cursor-pointer">
				<div
					class="absolute left-0 top-0 h-[22px] w-[22px] rounded-full border border-white border-opacity-20 hover:bg-gradient-to-br hover:from-[#3F82FF] hover:via-[#3F82FF] hover:to-[#4AF9EA]"
					on:click={() => (selected = !selected)}
				/>
				{#if selected}
					<div
						class="absolute left-[4px] top-[4px] h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#3F82FF] via-[#3F82FF] to-[#4AF9EA]"
					/>
				{/if}
			</div>
			<div class="flex items-center gap-x-2">
				<div class="text-[13px] font-medium leading-normal">{label}</div>
				<slot name="icon" />
			</div>
		</div>
	</div>
</div>
