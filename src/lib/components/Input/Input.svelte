<script lang="ts">
	import type { InputVariant } from '$types/components';

	export let label: string;
	export let value: string | number | Date;
	export let type: HTMLInputElement['type'];
	export let placeholder: string;
	export let disabled = false;
	export let rows = 4;
	export let name: string | undefined = undefined;
	export let classes: string | undefined = undefined;
	export let variant: InputVariant | '' = '';
	export let required: boolean = false;
</script>

<div>
	<p class="mb-[6px] text-[15px] font-semibold text-[#CFD0D5]">
		{label}
		{#if required}
			*{/if}
	</p>
	{#if type === 'text'}
		<input
			class={`${classes} ${variant} input w-full`}
			type="text"
			{name}
			{placeholder}
			bind:value
			{disabled}
		/>
	{/if}
	{#if type === 'email'}
		<input
			class={`${classes}  ${variant} input w-full`}
			type="email"
			{name}
			{placeholder}
			bind:value
			{disabled}
		/>
	{/if}
	{#if type === 'date'}
		<input
			class={`${classes} ${variant} input w-full`}
			type="date"
			{placeholder}
			{name}
			bind:value
			{disabled}
		/>
	{/if}
	{#if type === 'password'}
		<input
			class={`${classes} ${variant} input w-full`}
			type="password"
			{placeholder}
			{name}
			bind:value
			{disabled}
		/>
	{/if}
	{#if type === 'textarea'}
		<textarea
			class={`${classes} ${variant} input w-full`}
			{rows}
			{placeholder}
			bind:value
			{disabled}
			{name}
		/>
	{/if}
	<slot name="icon" />
</div>

<style lang="postcss">
	.variant-app-primary {
		background-color: #25282d !important;
		color: #c6c7cd !important;
		padding: 12px 18px !important;
		border: none;
		border-radius: 10px;
	}

	.variant-app-primary::placeholder {
		color: #4e555f;
	}
</style>
