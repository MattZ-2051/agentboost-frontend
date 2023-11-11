<script lang="ts">
	import LogoWhite from '$lib/assets/svg/LogoWhite.svelte';
	import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="w-full flex justify-center text-lg font-light items-start z-50 sticky">
	<div class="w-[1188px] py-12 flex items-center text-white justify-center">
		<div class="w-full">
			<div class="grid grid-cols-3 w-full">
				<div class="flex items-center"><LogoWhite /></div>
				<div
					class="flex gap-x-14 font-extralight textLink hover:text-white hover:cursor-pointer items-center justify-center"
				>
					<p>Features</p>
					<p>Platform</p>
					<p>About</p>
				</div>
				<div class="flex items-center justify-end gap-x-6">
					<a class="textLink !font-semibold" href="/login">Login</a>
					<Button label="Join Free Beta" variant="landing" />
					<!-- <button class="landingButton">Get Started</button> -->
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.textLink {
		color: #fff;
		font-size: 1.125rem;
		font-weight: 300;
		line-height: normal;
	}
</style>
