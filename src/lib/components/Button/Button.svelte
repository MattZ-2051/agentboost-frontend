<script lang="ts">
	import './Button.css';
	import type { ButtonVariant } from '$types/components';

	export let label: string;
	export let classes: string | undefined = undefined;
	export let variant: ButtonVariant | undefined = undefined;
	export let onClick: (() => void) | undefined = undefined;

	let styles: string;
	if (variant === 'landing') {
		styles = 'landingButton';
	} else if (variant === 'landing-dark') {
		styles = 'landingDarkButton';
	} else {
		styles = 'btn';
	}
</script>

<button
	type="button"
	class={`${styles} ${variant} ${classes} hover:cursor-pointer relative`}
	on:click={onClick}
>
	{#if variant === 'landing' || variant === 'landing-dark'}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				d="M9 17.5002H3.5M6.5 12.0002H2M9 6.50024H4M17 3.00024L10.4036 12.2353C10.1116 12.644 9.96562 12.8484 9.97194 13.0188C9.97744 13.1671 10.0486 13.3054 10.1661 13.3961C10.3011 13.5002 10.5522 13.5002 11.0546 13.5002H16L15 21.0002L21.5964 11.7652C21.8884 11.3565 22.0344 11.1521 22.0281 10.9817C22.0226 10.8334 21.9514 10.6951 21.8339 10.6044C21.6989 10.5002 21.4478 10.5002 20.9454 10.5002H16L17 3.00024Z"
				stroke={`${variant === 'landing' ? 'white' : '#42ADF8'}`}
				stroke-width="1.80625"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
	{label}</button
>

<style lang="postcss">
	.landing {
		border-radius: 50px;
		border: 1px solid rgba(255, 255, 255, 0.51);
		background: rgba(255, 255, 255, 0.02);
		box-shadow: 0px 1.20417px 14.45px 0px rgba(195, 216, 231, 0.08);
		backdrop-filter: blur(3.612499952316284px);
		display: inline-flex;
		height: 3rem;
		font-size: 16px;
		padding: 12px 20px;
		width: 12rem;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
		display: inline-flex;
		z-index: 1;
	}

	.landing::before,
	.landing-dark::before {
		content: '';
		border-radius: 100px;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: -1;
		padding: 2px;
		@apply bg-white;
		transform: scaleX(0);
		/* transform-origin: left; */
		transition: transform 200ms ease-in-out;
	}

	.landing:hover,
	.landing:focus,
	.landing-dark:hover,
	.landing-dark:focus {
		@apply !text-black;
		-webkit-text-fill-color: black;
	}

	.landing:hover path,
	.landing:focus path,
	.landing-dark:hover path,
	.landing-dark:focus path {
		stroke: black;
	}
	.landing:hover::before,
	.landing:focus::before,
	.landing-dark:focus::before,
	.landing-dark:hover::before {
		transform: scaleX(1);
	}

	.landing-dark {
		border-radius: 50px;
		border: 1px solid rgba(255, 255, 255, 0.51);
		background: rgba(255, 255, 255, 0.02);
		box-shadow: 0px 1.20417px 14.45px 0px rgba(195, 216, 231, 0.08);
		backdrop-filter: blur(3.612499952316284px);
		display: inline-flex;
		height: 3rem;
		font-size: 16px;
		width: 12rem;
		padding: 12px 20px;
		justify-content: center;
		align-items: flex-start;
		gap: 0.5rem;
		flex-shrink: 0;
		display: inline-flex;
		background: linear-gradient(93deg, #3f8bfd 39.11%, #49f9ea 92.48%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
