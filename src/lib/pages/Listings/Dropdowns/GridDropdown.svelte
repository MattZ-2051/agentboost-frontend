<script lang="ts">
	import GridIcon from '$lib/assets/svg/GridIcon.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';

	export let showContent: boolean;
</script>

<Dropdown classes="p-2 px-4 !bg-[#1A1B1E] h-[38px] text-sm" {showContent}>
	<div class="flex h-full w-full items-center justify-center" slot="icon">
		<div>
			<GridIcon />
		</div>
	</div>
</Dropdown>
