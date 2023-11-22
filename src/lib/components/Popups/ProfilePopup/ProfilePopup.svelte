<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import LogoutIcon from '$lib/assets/svg/LogoutIcon.svelte';

	$: iconHover = false;
</script>

<div
	transition:fade={{ delay: 0, duration: 100 }}
	class="w-[247px] h-[152px] bg-zinc-900 absolute top-10 -right-4 z-50 rounded-[10px] shadow p-4 flex flex-col gap-y-4"
>
	<div class="flex items-start">
		<div class="mr-2 text-base mt-1">
			<Icon icon="solar:settings-linear" />
		</div>
		<div class="">
			<p class="text-white text-[15px]">My Account</p>
			<p class="text-[13px] text-zinc-400">Edit Account Info</p>
		</div>
	</div>
	<div class="w-full h-[1px] border border-zinc-800" />
	<Button
		label="Logout"
		variant="variant-app-primary"
		onMouseEnter={() => (iconHover = true)}
		onMouseLeave={() => (iconHover = false)}
		bg={'bg-zinc-900'}
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
