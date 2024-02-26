<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';

	export let value: boolean = false;
	export let label: string = '';
	export let labelClasses: string = '';
</script>

<SlideToggle
	name="slide-toggle"
	bind:checked={value}
	active="bg-gradient-to-r from-[#3F82FF] to-[#4AF9EA]"
	label="!text-sm font-semibold"
	size="sm"><p class={`${labelClasses} text-sm font-semibold`}>{label}</p></SlideToggle
>
