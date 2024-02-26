<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';

	export let email: string;
</script>

<h1 class="text-[18px] font-semibold text-white">Contact support</h1>
<p class="mt-[6px] text-[15px] text-[#707281]">
	Need help with anything? We’ll get back to you asap.
</p>
<div class="mt-8 w-[48%]">
	<Input
		label="Email"
		value={email}
		variant="variant-app-primary"
		type="text"
		placeholder="Full Name"
	/>

	<div class="mt-5">
		<Input
			label="Feedback"
			value=""
			variant="variant-app-primary"
			type="textarea"
			placeholder="Your message here..."
			rows={10}
		/>
	</div>
	<div class="mt-6 flex w-full justify-end">
		<Button
			label="Send message"
			variant="variant-app-primary"
			bg="!bg-[#171A1C]"
			classes="!w-[187px] !h-12"
		/>
	</div>
</div>
