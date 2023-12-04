<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';

	let value: boolean = false;
	export let label: string = '';
</script>

<SlideToggle
	name="slide-toggle"
	bind:checked={value}
	active="bg-gradient-to-r from-[#3F82FF] to-[#4AF9EA]"
	size="sm">{label}</SlideToggle
>
