<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
</script>

<h1 class="text-white font-bold text-[18px]">Give feedback</h1>
<p class="text-[#707281] text-[15px] mt-2">Tell us your thoughts about the platform.</p>
<div class="w-[48%] mt-8">
	<Input
		label="Email"
		value="jacob@smartproperties.com"
		variant="variant-app-primary"
		type="text"
		placeholder="Full Name"
	/>

	<div class="mt-4">
		<Input
			label="Feedback"
			value=""
			variant="variant-app-primary"
			type="textarea"
			placeholder="Your feedback here..."
			rows={10}
		/>
	</div>
	<div class="mt-6 flex w-full justify-end">
		<Button
			label="Send feedback"
			variant="variant-app-primary"
			bg="!bg-[#171A1C]"
			classes="!w-[187px] !h-12"
		/>
	</div>
</div>
