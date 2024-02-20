<script lang="ts">
	import Input from '$lib/components/Input/Input.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import Button from '$lib/components/Button/Button.svelte';
</script>

<Box bgColor="bg-[#151719]" height="!h-[398px]" width="w-full" classes="p-6">
	<p class="mb-4 text-xl font-semibold text-[#EFEFEF]">Feeback</p>
	<p class="mb-4 text-[15px] text-[#707281]">Tell us your thoughts about the platform</p>
	<Input
		placeholder="Your feedback here..."
		rows={7}
		type="textarea"
		label=""
		value=""
		variant="variant-app-primary"
	/>
	<Button
		label="Send feedback"
		bg="bg-[#151719]"
		classes="!w-full !h-[48px] mt-4"
		variant="variant-app-primary"
	/>
</Box>
