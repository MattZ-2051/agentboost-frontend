<script lang="ts">
	import authImg from '$lib/assets/images/Landing/Auth/auth-bg.png';
	import LogoWhite from '$lib/assets/svg/Logo/LogoWhite.svelte';
</script>

<div class="relative h-screen w-screen max-w-screen-desktop p-12 !font-[Made-Evolve]">
	<div
		class="absolute -left-[50rem] top-10 h-full w-full rounded-full bg-gradient-to-r from-[#42AEF8] to-[#48EEED] opacity-20 blur-[1000px]"
	/>
	<div class="flex h-screen items-center">
		<div class="grid h-full w-full grid-cols-2 gap-x-12">
			<div>
				<div class="flex w-full items-center justify-between">
					<LogoWhite />
					<div class="flex">
						<div>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="hover:scale-110 hover:cursor-pointer"
								on:click={() => window.history.back()}
							>
								<path
									d="M14.9998 20.67C14.8098 20.67 14.6198 20.6 14.4698 20.45L7.94979 13.93C6.88979 12.87 6.88979 11.13 7.94979 10.07L14.4698 3.55002C14.7598 3.26002 15.2398 3.26002 15.5298 3.55002C15.8198 3.84002 15.8198 4.32002 15.5298 4.61002L9.00979 11.13C8.52979 11.61 8.52979 12.39 9.00979 12.87L15.5298 19.39C15.8198 19.68 15.8198 20.16 15.5298 20.45C15.3798 20.59 15.1898 20.67 14.9998 20.67Z"
									fill="#C0C4DA"
								/>
							</svg>
						</div>
						<p class="text-[18px] font-light text-[#C0C4DA]">Go Back</p>
					</div>
				</div>
				<div class="relative z-20 flex h-full flex-col items-center justify-center">
					<div>
						<slot />
					</div>
				</div>
			</div>
			<div class="hidden lg:block">
				<img src={authImg} alt="" class="h-[90%] w-full rounded-[30px] object-cover" />
			</div>
		</div>
	</div>
</div>
