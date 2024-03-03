<script lang="ts">
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	import lottieFile from '$lib/assets/lottie/logo-animation.json';

	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
	export let size: number = 70;
</script>

<LottiePlayer
	src={lottieFile}
	autoplay={true}
	loop={true}
	renderer="svg"
	background="transparent"
	height={size}
	width={size}
/>
