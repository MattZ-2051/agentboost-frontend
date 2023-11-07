<script lang="ts">
	import Input from '$lib/components/Input/Input.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { signUpFx } from '$store/user';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	let password = '';
	let email = '';
	let passwordConfirm = '';

	const toastStore = getToastStore();

	const handleSignup = () => {
		const mailformat = /^\S+@\S+\.\S+$/;

		if (email.length === 0 || password.length === 0 || passwordConfirm.length === 0) {
			const toast: ToastSettings = {
				message: 'Missing required fields',
				background: 'variant-filled-error'
			};
			toastStore.trigger(toast);
			return;
		}

		if (!mailformat.test(email)) {
			const toast: ToastSettings = {
				message: 'Email is not a valid format',
				background: 'variant-filled-error'
			};
			toastStore.trigger(toast);
			return;
		}
		if (password !== passwordConfirm) {
			const toast: ToastSettings = {
				message: 'Passwords do not match',
				background: 'variant-filled-error'
			};
			toastStore.trigger(toast);
			return;
		}
		signUpFx({ email, password });
	};
</script>

<div class="h-full text-white bg-secondary">
	<div class="flex justify-center items-center p-12 h-full">
		<form>
			<h1 class="text-5xl font-bold text-center mb-8">Signup</h1>
			<div class="mb-4">
				<Input label="Email" placeholder="Email" bind:value={email} type="email" />
			</div>
			<div class="mb-4">
				<Input label="Password" placeholder="Password" bind:value={password} type="password" />
			</div>
			<div class="mb-12">
				<Input
					label="Confirm Password"
					placeholder="Confirm Password"
					bind:value={passwordConfirm}
					type="password"
				/>
			</div>
			<div class="mb-4">
				<Button label="Signup" variant="variant-filled" onClick={handleSignup} classes="w-full" />
			</div>
			<div class="text-center">
				<a href="/login" class="text-base">Already have an account? Login!</a>
			</div>
		</form>
	</div>
</div>
