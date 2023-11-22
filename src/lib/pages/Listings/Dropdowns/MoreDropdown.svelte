<script lang="ts">
	import MoreIcon from '$lib/assets/svg/MoreIcon.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';

	export let showContent: boolean;
</script>

<Dropdown>
	<div class="w-full h-full p-2.5 bg-zinc-900 rounded-[10px]">
		<div class="flex justify-between">
			<MoreIcon />
			<div class="text-neutral-300 text-[15px] leading-[18px]">More</div>
		</div>
	</div>
</Dropdown>
