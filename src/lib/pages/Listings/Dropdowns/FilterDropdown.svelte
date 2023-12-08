<script lang="ts">
	import FilterIcon from '$lib/assets/svg/FilterIcon.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';

	$: showContent = false;
</script>

<Dropdown classes="bg-[#1A1B1E]" {showContent}>
	<div class="w-full h-full flex items-center justify-center" slot="icon">
		<FilterIcon />
	</div>
</Dropdown>
