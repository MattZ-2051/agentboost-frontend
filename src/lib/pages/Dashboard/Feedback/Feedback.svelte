<script lang="ts">
	import Input from '$lib/components/Input/Input.svelte';
	import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="p-6 border border-white border-opacity-10 w-full h-[398px] bg-[#151719] rounded-[10px]">
	<p class="text-[#EFEFEF] text-xl font-semibold mb-4">Feeback</p>
	<p class="text-[#707281] text-[15px] mb-4">Tell us your thoughts about the platform</p>
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
</div>

<style lang="">
</style>
