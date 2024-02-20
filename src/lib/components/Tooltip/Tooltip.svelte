<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	export let hoverContent: string;
	export let target: string;

	const popupHover: PopupSettings = {
		event: 'hover',
		target,
		placement: 'top'
	};
</script>

<button class="relative h-fit [&>*]:pointer-events-none" use:popup={popupHover}>
	<slot name="icon" />
</button>
<div class="card variant-filled-secondary max-w-[300px] p-4" data-popup={target}>
	<p>{hoverContent}</p>
	<div class="variant-filled-secondary arrow" />
</div>
