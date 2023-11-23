<script lang="ts">
	import LogoWhite from '$lib/assets/svg/LogoWhite.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.update((store) => {
			store.id = 'mobile-nav';
			store.open = !store.open;
			return store;
		});
	}
</script>

<AppBar
	gridColumns="grid-cols-3 xl:w-[1188px]"
	padding="xl:px-12 xl:py-12 px-4 py-8"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background="bg-transparent z-[38] relative justify-center items-center"
>
	<svelte:fragment slot="lead">
		<div>
			<LogoWhite />
		</div>
	</svelte:fragment>
	<div
		class="lg:flex gap-x-14 font-extralight textLink hover:text-white hover:cursor-pointer items-center justify-center hidden"
	>
		<p>Features</p>
		<p>Platform</p>
		<p>About</p>
	</div>
	<svelte:fragment slot="trail">
		<div class="flex items-center">
			<button class="lg:hidden btn btn-sm" on:click={drawerOpen}>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="18"
						viewBox="0 0 24 18"
						fill="none"
					>
						<path
							d="M6 1.8001C6 1.13738 6.53728 0.600098 7.2 0.600098H22.8C23.4627 0.600098 24 1.13738 24 1.8001C24 2.46282 23.4627 3.0001 22.8 3.0001H7.2C6.53728 3.0001 6 2.46277 6 1.8001ZM22.8 7.8001H1.2C0.537281 7.8001 0 8.33743 0 9.0001C0 9.66282 0.537281 10.2001 1.2 10.2001H22.8C23.4627 10.2001 24 9.66282 24 9.0001C24 8.33743 23.4627 7.8001 22.8 7.8001ZM22.8 15.0001H12C11.3373 15.0001 10.8 15.5374 10.8 16.2001C10.8 16.8628 11.3373 17.4001 12 17.4001H22.8C23.4627 17.4001 24 16.8628 24 16.2001C24 15.5374 23.4627 15.0001 22.8 15.0001Z"
							fill="white"
						/>
					</svg>
				</span>
			</button>
		</div>
		<div class="hidden lg:block">
			<Button label="Join Free Beta" variant="landing" />
		</div>
	</svelte:fragment>
</AppBar>

<style>
	.textLink {
		color: #fff;
		font-size: 1.125rem;
		font-weight: 300;
		line-height: normal;
	}
</style>
