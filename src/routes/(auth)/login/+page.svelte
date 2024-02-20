<script lang="ts">
	import { googleSignin } from '$api/auth';
	import { goto } from '$app/navigation';
	import GoogleIcon from '$lib/assets/svg/Landing/GoogleIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { loginFx } from '$store/user';
	import { getToastStore } from '@skeletonlabs/skeleton';

	let email: string;
	let password: string;
	const toastStore = getToastStore();

	const handleLogin = async () => {
		if (!email || email.length === 0 || !password || password.length === 0) {
			toastStore.trigger({
				message: 'Required fields are missing.',
				background: 'variant-filled-error'
			});
			return;
		}
		await loginFx({ email, password });
	};
</script>

<div class="relative z-20 flex h-full flex-col items-center justify-center">
	<p class="text-[48px] text-[#f7f7f7]">Welcome back</p>
	<p class="my-8 text-[20px] font-light text-[#C0C4DA]">Get free access to our beta.</p>
	<button class="inputAndButtonBg" on:click={() => googleSignin()}>
		<GoogleIcon /> Continue with Google
	</button>
	<div class="my-6 flex w-[424px] items-center">
		<div class="h-[1px] w-1/2 bg-[#4E5358]" />
		<p class="mx-4 text-base text-[#4E5358]">OR</p>
		<div class="h-[1px] w-1/2 bg-[#4E5358]" />
	</div>
	<div class="flex flex-col gap-y-3">
		<input class="inputAndButtonBg" type="email" placeholder="Email" bind:value={email} />
		<input class="inputAndButtonBg" type="password" placeholder="Password" bind:value={password} />
		<div class="mt-8">
			<Button
				label=""
				variant="variant-app-primary"
				bg="bg-gradient-to-r from-[#3F8BFD] via-[#3F8BFD] to-[#49F9EA]"
				classes="!text-white !h-[54px] !text-[20px] w-full"
				onClick={handleLogin}
			>
				<p slot="icon" class="!text-[20px]font-medium text-white">Login</p>
			</Button>
		</div>
		<div class="mt-3 flex justify-center text-[19px] text-[#C0C4DA]">
			<p class="font-light">Don't have an account?</p>
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p
				class="ml-1 font-semibold hover:cursor-pointer hover:underline"
				on:click={() => goto('/signup')}
			>
				Sign up
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.inputAndButtonBg {
		@apply flex items-center justify-center gap-x-2 text-[#C0C4DA] hover:!bg-white hover:!bg-opacity-10;
		@apply !outline-none focus:!border-none focus:!border-transparent focus:!outline-none focus:!ring-0;
		border-radius: 15px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.06);
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		width: 448px;
		height: 50px;
		flex-shrink: 0;
	}

	.inputAndButtonBg::placeholder {
		color: #c0c4da;
	}
</style>
