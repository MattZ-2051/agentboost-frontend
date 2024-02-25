<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import LogoutIcon from '$lib/assets/svg/LogoutIcon.svelte';
	import { goto } from '$app/navigation';
	import { $user as user, logoutFx } from '$store/user';
	import { clickOutside } from '$utils';

	$: iconHover = false;
	export let showPopup: boolean = false;

	const username = 'jacobjones';

	const handleLogout = async () => {
		if ($user) {
			await logoutFx({ userId: $user.id });
		}
	};
	const handleClick = async () => {
		showPopup = true;
		try {
			await goto(`/profile/${username}`);
			showPopup = false;
		} catch {}
	};

	const handleClickOutside = () => {
		showPopup = false;
	};
</script>

<div
	use:clickOutside
	on:click_outside={handleClickOutside}
	transition:fade={{ delay: 0, duration: 100 }}
	class="absolute -right-4 top-10 z-50 flex h-[182px] w-[247px] flex-col gap-y-4 rounded-[10px] bg-[#1A1A1A] p-4 shadow"
>
	<div
		class="flex items-start rounded-[10px] px-2 py-1 hover:bg-white hover:bg-opacity-[0.05]"
		on:click={handleClick}
	>
		<div class="flex px-3 hover:cursor-pointer">
			<div class="mr-2 mt-1 text-base">
				<Icon icon="solar:settings-linear" />
			</div>
			<div>
				<p class="text-[15px] text-white">My Account</p>
				<p class="text-[13px] text-zinc-400">Edit Account Info</p>
			</div>
		</div>
	</div>
	<div class="h-[1px] w-full border border-[#292929]" />
	<Button
		label="Logout"
		variant="variant-app-primary"
		onMouseEnter={() => (iconHover = true)}
		onMouseLeave={() => (iconHover = false)}
		bg={'bg-[#1A1A1A]'}
		classes="!h-[42px] !w-full"
		onClick={() => handleLogout()}
	>
		<span slot="icon" class="mr-2 mt-[0.5px]">
			{#if !iconHover}
				<LogoutIcon />
			{:else}
				<Icon icon="solar:logout-2-outline" />
			{/if}
		</span>
	</Button>
</div>
