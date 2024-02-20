<script lang="ts">
	import FilterIcon from '$lib/assets/svg/FilterIcon.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';

	$: showContent = false;
</script>

<Dropdown classes="bg-[#1A1B1E] text-sm" {showContent}>
	<div class="flex h-full w-full items-center justify-center" slot="icon">
		<FilterIcon />
	</div>
</Dropdown>
