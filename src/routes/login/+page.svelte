<script lang="ts">
	import Input from '$lib/components/Input/Input.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { getUserProfileFx, loginFx } from '$store/user';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();
	let email = '';
	let password = '';
	const handleLogin = async () => {
		let message;

		const mailformat = /^\S+@\S+\.\S+$/;

		if (email.length === 0 && password.length === 0) {
			message = 'Please enter a valid email and password';
		} else if (email.length === 0 || !mailformat.test(email)) {
			message = 'Please enter a valid email';
		} else if (password.length === 0) {
			message = 'Please enter a valid password';
		}

		if (message) {
			const toast: ToastSettings = {
				message: message ? message : 'Login failed',
				background: 'variant-filled-error'
			};
			toastStore.trigger(toast);
			return;
		}

		await loginFx({ email, password });
		await getUserProfileFx();
	};
</script>

<div class="h-full text-white bg-secondary">
	<div class="flex justify-center items-center p-12 h-full">
		<div>
			<h1 class="text-5xl font-bold text-center mb-8">Login</h1>
			<div class="mb-4">
				<Input label="Email" placeholder="Email" bind:value={email} type="text" />
			</div>
			<div class="mb-12">
				<Input label="Password" placeholder="Password" bind:value={password} type="password" />
			</div>
			<div class="mb-4">
				<Button label="Login" variant="variant-filled" onClick={handleLogin} classes="w-full" />
			</div>
			<div class="text-center">
				<a href="/signup" class="text-base">Don't have an account? Signup!</a>
			</div>
		</div>
	</div>
</div>
