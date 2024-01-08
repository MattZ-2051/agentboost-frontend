<script lang="ts">
	import MoreIcon from '$lib/assets/svg/MoreIcon.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';

	export let showContent: boolean;
</script>

<Dropdown {showContent} classes="bg-[#1A1B1E] px-3 w-full h-[38px] text-!xs">
	<div class="flex justify-between w-full items-center gap-x-2 h-full" slot="icon">
		<div>
			<MoreIcon />
		</div>
		<div class="text-neutral-300 text-[12px] leading-[18px]">More</div>
	</div>
</Dropdown>
