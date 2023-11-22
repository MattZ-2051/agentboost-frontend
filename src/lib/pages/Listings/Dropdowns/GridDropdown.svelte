<script lang="ts">
	import GridIcon from '$lib/assets/svg/GridIcon.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';

	export let showContent: boolean;
</script>

<Dropdown classes="p-2 px-4 !bg-[#1A1B1E]" {showContent}>
	<div class="w-full h-full flex items-center justify-center">
		<div>
			<GridIcon />
		</div>
	</div>
</Dropdown>
