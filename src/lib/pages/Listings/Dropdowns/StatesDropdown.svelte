<script lang="ts">
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	export let showContent: boolean;
</script>

<Dropdown classes="p-2 px-4 !bg-[#1A1B1E]" {showContent} label="All States" />
