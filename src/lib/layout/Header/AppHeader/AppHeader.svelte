<script lang="ts">
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import Icon from '@iconify/svelte';
	import DashboardIcon from '$lib/assets/svg/DashboardIcon.svelte';
	import ListingsIcon from '$lib/assets/svg/ListingsIcon.svelte';
	import ListingsIconHover from '$lib/assets/svg/ListingsIconHover.svelte';
	import MarketingIconHover from '$lib/assets/svg/MarketingIconHover.svelte';
	import BuyersIconHover from '$lib/assets/svg/BuyersIconHover.svelte';
	import MarketingIcon from '$lib/assets/svg/MarketingIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import ProfilePopup from '$lib/pages/App/Popups/ProfilePopup/ProfilePopup.svelte';
	import DashboardIconHover from '$lib/assets/svg/DashboardIconHover.svelte';
	import { goto } from '$app/navigation';
	import LogoWhiteGradient from '$lib/assets/svg/Logo/LogoWhiteGradient.svelte';
	import { page } from '$app/stores';
	import { $user as user } from '$store/user';
	import ProfileAvatar from '$lib/pages/Profile/Avatars/ProfileAvatar.svelte';

	const headerButtonStyles =
		'!text-[rgba(255,255,255,0.8)] text-base !font-light hover:!bg-[rgba(255,255,255,0.09)] w-[9rem] h-[2.125rem]';

	const activeStyle = '!bg-[rgba(255,255,255,0.09)]';

	$: showPopup = false;

	$: iconHover = {
		dashboard: $page.url.pathname.includes('dashboard') ? true : false,
		buyers: false,
		listings: false,
		marketing: false
	} as Record<string, boolean>;

	$: currentPage = {
		dashboard: $page.url.pathname.includes('dashboard') ? true : false,
		buyers: $page.url.pathname.includes('buyers') ? true : false,
		listings: $page.url.pathname.includes('listings') ? true : false,
		marketing: $page.url.pathname.includes('marketing') ? true : false
	} as Record<string, boolean>;

	const handleRoute = async (route: string) => {
		await goto(`/${route}`);
		for (let item in currentPage) {
			if (item.toString() === route) {
				currentPage[item] = true;
			} else {
				currentPage[item] = false;
			}
		}
	};
</script>

{#if $user}
	<div class="flex w-screen max-w-screen-desktop items-center justify-between px-12 py-[25px]">
		<div class="hover:cursor-pointer" on:click={() => goto('/')}>
			<LogoWhiteGradient />
		</div>
		<div class="flex w-full justify-center">
			<div
				class="flex h-full items-center justify-center rounded-[40px] border border-white border-opacity-10 bg-white bg-opacity-0 p-1 shadow"
			>
				<div>
					<Button
						variant="variant-filled-surface"
						label="Dashboard"
						classes={`${headerButtonStyles} ${currentPage.dashboard === true ? activeStyle : ''}`}
						onClick={() => handleRoute('dashboard')}
						onMouseEnter={() => (iconHover.dashboard = true)}
						onMouseLeave={() => (iconHover.dashboard = false)}
					>
						<span slot="icon" class="">
							{#if iconHover.dashboard || currentPage.dashboard}
								<DashboardIconHover />
							{:else}
								<DashboardIcon />
							{/if}
						</span>
					</Button>
					<Button
						variant="variant-filled-surface"
						label="Buyers"
						onClick={() => handleRoute('buyers')}
						classes={`${headerButtonStyles} ${currentPage.buyers === true ? activeStyle : ''}`}
						onMouseEnter={() => (iconHover.buyers = true)}
						onMouseLeave={() => (iconHover.buyers = false)}
					>
						<span slot="icon" class="">
							{#if iconHover.buyers || currentPage.buyers}
								<BuyersIconHover />
							{:else}
								<BuyersIcon />
							{/if}
						</span>
					</Button>
					<Button
						variant="variant-filled-surface"
						label="Listings"
						onClick={() => handleRoute('listings')}
						classes={`${headerButtonStyles} ${currentPage.listings === true ? activeStyle : ''}`}
						onMouseEnter={() => (iconHover.listings = true)}
						onMouseLeave={() => (iconHover.listings = false)}
					>
						<span slot="icon" class="">
							{#if iconHover.listings || currentPage.listings}
								<ListingsIconHover />
							{:else}
								<ListingsIcon />
							{/if}
						</span></Button
					>
					<Button
						variant="variant-filled-surface"
						label="Marketing"
						classes={`${headerButtonStyles} ${currentPage.marketing === true ? activeStyle : ''}`}
						onClick={() => handleRoute('marketing')}
						onMouseEnter={() => (iconHover.marketing = true)}
						onMouseLeave={() => (iconHover.marketing = false)}
					>
						<span slot="icon" class="">
							{#if iconHover.marketing || currentPage.marketing}
								<MarketingIconHover />
							{:else}
								<MarketingIcon />
							{/if}
						</span>
					</Button>
				</div>
			</div>
		</div>
		<div class="relative flex h-full items-center gap-x-6">
			<div class="flex items-center gap-x-2">
				<ProfileAvatar />
				<p class="whitespace-nowrap text-base">{$user?.fullName}</p>
				<div on:click={() => (showPopup = !showPopup)}>
					<Icon
						icon="tabler:chevron-down"
						class="white-icon h-fit text-[1.5rem] hover:scale-[1.2] hover:cursor-pointer"
					/>
				</div>
			</div>
			{#if showPopup}
				<ProfilePopup bind:showPopup />
			{/if}
		</div>
	</div>
	<div class="mx-12 mb-4 h-[1px] bg-[#181818]" />
{/if}

<style lang="postcss">
	div :global(.white-icon) {
		color: white;
	}
</style>
