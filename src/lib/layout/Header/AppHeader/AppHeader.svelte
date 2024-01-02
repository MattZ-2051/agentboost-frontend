<script>
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import Icon from '@iconify/svelte';
	import DashboardIcon from '$lib/assets/svg/DashboardIcon.svelte';
	import ListingsIcon from '$lib/assets/svg/ListingsIcon.svelte';
	import ListingsIconHover from '$lib/assets/svg/ListingsIconHover.svelte';
	import MarketingIconHover from '$lib/assets/svg/MarketingIconHover.svelte';
	import BuyersIconHover from '$lib/assets/svg/BuyersIconHover.svelte';
	import MarketingIcon from '$lib/assets/svg/MarketingIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import dummyProfileImg from '$lib/assets/images/dummy-profile.png';
	import ProfilePopup from '$lib/pages/App/Popups/ProfilePopup/ProfilePopup.svelte';
	import DashboardIconHover from '$lib/assets/svg/DashboardIconHover.svelte';
	import { goto } from '$app/navigation';
	import LogoWhiteGradient from '$lib/assets/svg/Logo/LogoWhiteGradient.svelte';

	const headerButtonStyles =
		'!text-[rgba(255,255,255,0.8)] text-base font-light hover:!bg-[rgba(255,255,255,0.09)] w-[9rem] h-[2.125rem]';

	$: showPopup = false;
	$: iconHover = {
		dashboard: false,
		buyers: false,
		listings: false,
		marketing: false
	};
</script>

<div class="flex justify-between items-center w-screen max-w-screen-desktop px-12 py-[25px]">
	<div class="hover:cursor-pointer" on:click={() => goto('/')}>
		<LogoWhiteGradient />
	</div>
	<div class="w-full flex justify-center">
		<div
			class="h-full bg-white bg-opacity-0 rounded-[40px] shadow border border-white border-opacity-10 flex items-center justify-center p-1"
		>
			<div>
				<Button
					variant="variant-filled-surface"
					label="Dashboard"
					classes={headerButtonStyles}
					onClick={() => goto('/dashboard')}
					onMouseEnter={() => (iconHover.dashboard = true)}
					onMouseLeave={() => (iconHover.dashboard = false)}
				>
					<span slot="icon" class="">
						{#if iconHover.dashboard}
							<DashboardIconHover />
						{:else}
							<DashboardIcon />
						{/if}
					</span>
				</Button>
				<Button
					variant="variant-filled-surface"
					label="Buyers"
					onClick={() => goto('/buyers')}
					classes={headerButtonStyles}
					onMouseEnter={() => (iconHover.buyers = true)}
					onMouseLeave={() => (iconHover.buyers = false)}
				>
					<span slot="icon" class="">
						{#if iconHover.buyers}
							<BuyersIconHover />
						{:else}
							<BuyersIcon />
						{/if}
					</span>
				</Button>
				<Button
					variant="variant-filled-surface"
					label="Listings"
					onClick={() => goto('/listings')}
					classes={headerButtonStyles}
					onMouseEnter={() => (iconHover.listings = true)}
					onMouseLeave={() => (iconHover.listings = false)}
				>
					<span slot="icon" class="">
						{#if iconHover.listings}
							<ListingsIconHover />
						{:else}
							<ListingsIcon />
						{/if}
					</span></Button
				>
				<Button
					variant="variant-filled-surface"
					label="Marketing"
					classes={headerButtonStyles}
					onClick={() => goto('/marketing')}
					onMouseEnter={() => (iconHover.marketing = true)}
					onMouseLeave={() => (iconHover.marketing = false)}
				>
					<span slot="icon" class="">
						{#if iconHover.marketing}
							<MarketingIconHover />
						{:else}
							<MarketingIcon />
						{/if}
					</span>
				</Button>
			</div>
		</div>
	</div>
	<div class="flex items-center gap-x-6 h-full relative">
		<Icon icon="mi:notification" class="text-3xl" />
		<div class="flex gap-x-2 items-center">
			<img src={dummyProfileImg} alt="profile" class="w-[40px] h-[40px]" />
			<p class="text-base whitespace-nowrap">Jacob Jones</p>
			<div on:click={() => (showPopup = !showPopup)}>
				<Icon
					icon="tabler:chevron-down"
					class="white-icon text-[1.5rem] hover:scale-[1.2] hover:cursor-pointer h-fit"
				/>
			</div>
		</div>
		{#if showPopup}
			<ProfilePopup bind:showPopup />
		{/if}
	</div>
</div>
<div class="h-[1px] bg-[#181818] mb-4 mx-12" />

<style lang="postcss">
	div :global(.white-icon) {
		color: white;
	}
</style>
