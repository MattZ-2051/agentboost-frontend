<script lang="ts">
	export let selected: boolean;
	export let label: string;
</script>

<div
	class={`w-[124px] rounded-[10px] h-12 p-[1px] ${
		selected
			? 'bg-gradient-to-r from-[#3F82FF] to-[#4AF9EA] text-cyan-300'
			: 'border border-[#454849] text-[#CFD0D5]'
	} `}
>
	<div
		class="bg-[#171A1C] w-full rounded-[10px] h-full px-4 items-center py-3 flex gap-x-4 justify-center"
	>
		<div class="w-[22px] h-[22px] relative">
			<div
				class="w-[22px] h-[22px] left-0 top-0 absolute rounded-full border border-white border-opacity-20"
			/>
			{#if selected}
				<div
					class="w-3.5 h-3.5 left-[4px] top-[4px] absolute bg-gradient-to-br from-blue-500 via-blue-500 to-teal-300 rounded-full"
				/>
			{/if}
		</div>
		<div class="text-[13px] font-medium leading-normal">{label}</div>
	</div>
</div>
