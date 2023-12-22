<script lang="ts">
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import ChevronDown from '$lib/assets/svg/Chevron/ChevronDown.svelte';
	import ChevronUp from '$lib/assets/svg/Chevron/ChevronUp.svelte';

	export let showContent: boolean;
</script>

<Dropdown classes="p-2 px-4 !bg-[#1A1B1E] text-sm" {showContent} label="Type" />
