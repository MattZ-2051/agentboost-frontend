<script lang="ts">
	import { goto } from '$app/navigation';
	import GoogleIcon from '$lib/assets/svg/Landing/GoogleIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { loginFx } from '$store/user';

	let email: string;
	let password: string;

	const handleLogin = async () => {
		await loginFx({ email, password });
	};
</script>

<div class="flex justify-center h-full items-center flex-col z-20 relative">
	<p class="text-[48px] text-[#f7f7f7]">Welcome back</p>
	<p class="text-[#C0C4DA] text-[20px] font-light my-8">Get free access to our beta.</p>
	<button class="inputAndButtonBg">
		<GoogleIcon /> Continue with Google
	</button>
	<div class="my-6 flex items-center w-[424px]">
		<div class="h-[1px] bg-[#4E5358] w-1/2" />
		<p class="text-[#4E5358] text-base mx-4">OR</p>
		<div class="h-[1px] bg-[#4E5358] w-1/2" />
	</div>
	<div class="flex flex-col gap-y-3">
		<input class="inputAndButtonBg" type="email" placeholder="Email" value="" />
		<input class="inputAndButtonBg" type="password" placeholder="Password" value="" />
		<div class="mt-8">
			<Button
				label=""
				variant="variant-app-primary"
				bg="bg-gradient-to-r from-[#3F8BFD] via-[#3F8BFD] to-[#49F9EA]"
				classes="!text-white !h-[54px] !text-[20px] w-full"
			>
				<p slot="icon" class="text-white !text-[20px]font-medium">Login</p>
			</Button>
		</div>
		<div class="flex text-[#C0C4DA] text-[19px] justify-center mt-3">
			<p class="font-light">Don't have an account?</p>
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p
				class="font-semibold ml-1 hover:cursor-pointer hover:underline"
				on:click={() => goto('/signup')}
			>
				Sign up
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.inputAndButtonBg {
		@apply text-[#C0C4DA] items-center flex justify-center gap-x-2 hover:!bg-opacity-10 hover:!bg-white;
		@apply !outline-none focus:!outline-none focus:!border-none focus:!border-transparent focus:!ring-0;
		border-radius: 15px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.06);
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		width: 448px;
		height: 50px;
		flex-shrink: 0;
	}

	.inputCheckbox {
		border-radius: 5px;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.06);
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
	.inputAndButtonBg::placeholder {
		color: #c0c4da;
	}
</style>
