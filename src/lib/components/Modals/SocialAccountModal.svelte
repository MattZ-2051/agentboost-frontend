<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import Button from '../Button/Button.svelte';
	import RadioButton from '../RadioButton/RadioButton.svelte';
	import xIcon from '$lib/assets/images/Social/x-icon.png';
	import instagramIcon from '$lib/assets/images/Social/instagram-icon.png';
	import facebookIcon from '$lib/assets/images/Social/facebook-icon.png';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const fbId = import.meta.env?.VITE_FB_APP_ID;

	const modalStore = getModalStore();

	const formData = {
		date: new Date()
	};

	const handleAccountAdd = async () => {
		console.log('map', selectionMap);
		for (const item of selectionMap) {
			if (item.selected && item.label === 'Facebook') {
				console.log('here');
				await handleFacebookLogin();
				return;
			}
		}
	};

	onMount(() => {
		window.fbAsyncInit = function () {
			FB.init({
				appId: fbId,
				xfbml: true,
				version: 'v19.0'
			});
		};
	});
	const handleFacebookLogin = async () => {
		FB.login(function (response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', { fields: 'name, email' }, function (response) {
					console.log('response', response);
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		});
	};
	onMount(() => {
		(function (d, s, id) {
			var js: any,
				fjs: any = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	});

	$: selectionMap = [
		{
			label: 'X',
			selected: false,
			icon: xIcon
		},
		{
			label: 'Instagram',
			selected: false,
			icon: instagramIcon
		},
		{
			label: 'Facebook',
			selected: false,
			icon: facebookIcon
		}
	];

	$: optionSelected = selectionMap.some((item) => item.selected);
</script>

{#if $modalStore[0]}
	<div class="!w-[450px] rounded-[10px] bg-[#1A1A1A] p-6">
		<div class="flex w-full flex-col items-start justify-center gap-y-4">
			<p class="text-xl font-semibold">Connect An Account</p>
			{#each selectionMap as item, _}
				<RadioButton
					label={item.label}
					bind:selected={item.selected}
					classes="!w-full"
					bind:optionSelected
				>
					<img src={item.icon} class="w-8 rounded-full" slot="icon" alt="" />
				</RadioButton>
			{/each}
		</div>
		<div class="mt-8 grid w-full grid-cols-2 gap-x-4">
			<Button
				variant="variant-app-primary"
				classes="!h-10"
				label="Close"
				bg="bg-[#1A1A1A]"
				onClick={() => modalStore.close()}
			/>
			<Button
				variant="variant-app-primary"
				classes=""
				label="Add"
				bg="bg-[#1A1A1A]"
				onClick={handleAccountAdd}
			/>
		</div>
	</div>
{/if}

<style lang="postcss">
	img {
		@apply w-6 rounded-full;
	}
</style>
