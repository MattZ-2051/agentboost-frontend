<script lang="ts">
	import cityVector from '$lib/assets/images/vector.png';
	import landingPlaceholder from '$lib/assets/images/landingPlaceholder.png';
	import Button from '$lib/components/Button/Button.svelte';
	import LandingBezier from '$lib/assets/svg/LandingBezier.svelte';
	import landingScreenshot1 from '$lib/assets/images/landingAppScreenshot1.png';
	import Instagram from '$lib/assets/svg/Instagram.svelte';
	import matt from '$lib/assets/images/matt-landing.jpeg';
	import sam from '$lib/assets/images/sam-landing.jpeg';
	import LogoIconBlue from '$lib/assets/svg/LogoIconBlue.svelte';
	import Twitter from '$lib/assets/svg/Twitter.svelte';
	import { onMount } from 'svelte';
	import BackgroundGradient from '$lib/pages/Landing/BackgroundGradient.svelte';
	import LandingSeperator from '$lib/assets/svg/LandingSeperator.svelte';
	// const handleShare = () => {
	//   FB.ui(
	//     {
	//       method: 'share',
	//       href: 'https://developers.facebook.com/docs/',
	//     },
	//     function (response) {},
	//   );
	// };

	let elts: any;
	onMount(() => {
		elts = {
			text1: document.getElementById('text1'),
			text2: document.getElementById('text2')
		};

		const texts = ['faster', 'smarter', 'better'];

		const morphTime = 1.5;
		const cooldownTime = 0.5;

		let textIndex = texts.length - 1;
		let time = new Date();
		let morph = 0;
		let cooldown = cooldownTime;

		elts.text1.textContent = texts[textIndex % texts.length];
		elts.text2.textContent = texts[(textIndex + 1) % texts.length];

		function doMorph() {
			morph -= cooldown;
			cooldown = 0;

			let fraction = morph / morphTime;

			if (fraction > 1) {
				cooldown = cooldownTime;
				fraction = 1;
			}

			setMorph(fraction);
		}

		function setMorph(fraction: any) {
			elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
			elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

			fraction = 1 - fraction;
			elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
			elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

			elts.text1.textContent = texts[textIndex % texts.length];
			elts.text2.textContent = texts[(textIndex + 1) % texts.length];
		}

		function doCooldown() {
			morph = 0;

			elts.text2.style.filter = '';
			elts.text2.style.opacity = '100%';

			elts.text1.style.filter = '';
			elts.text1.style.opacity = '0%';
		}

		function animate() {
			requestAnimationFrame(animate);

			let newTime = new Date();
			let shouldIncrementIndex = cooldown > 0;
			let dt = ((newTime as any) - (time as any)) / 1000;
			time = newTime;

			cooldown -= dt;

			if (cooldown <= 0) {
				if (shouldIncrementIndex) {
					textIndex++;
				}

				doMorph();
			} else {
				doCooldown();
			}
		}

		animate();
	});

	const section2ButtonStyle =
		'xl:!w-[8rem] w-[82px] !bg-transparent xl:!bg-inherit !text-sm xl:!text-lg !text-opacity-40 !text-white hover:!text-primary-500 hover:!bg-white hover:!bg-opacity-10';
</script>

<div class="w-full h-full relative xl:p-12 p-4">
	<div class="elipse absolute" />
	<section class="w-full flex flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center">
			<div class="w-[278px] h-[39px] relative z-30 mt-8">
				<div
					class="text-base w-[278px] h-[39px] pl-[75px] pr-4 pt-[9px] pb-2.5 left-0 top-0 absolute bg-white bg-opacity-10 rounded-[50px] shadow backdrop-blur-[7.22px] justify-end items-center inline-flex"
				>
					<div class="text-white text-base leading-tight">Free beta now available</div>
				</div>
				<div
					class="w-[65px] h-[35px] left-[2px] top-[2px] absolute bg-white bg-opacity-10 rounded-[50px] shadow backdrop-blur-[7.22px]"
				/>
				<div class="left-[16px] top-[9px] absolute text-white text-base leading-tight">New</div>
			</div>
			<div
				class="mt-8 flex flex-col items-center xl:text-[90px] text-[40px] w-full leading-tight xl:leading-[6rem] z-30 text-white"
			>
				<p class="whitespace-nowrap hidden xl:inline-block">We make your real</p>
				<p class="-ml-[17rem] hidden xl:inline-block">
					estate business <span id="text1" class="textGradient1" />
					<span id="text2" class="textGradient1" />
				</p>
				<!-- mobile styles  -->
				<p class="xl:hidden inline-block whitespace-nowrap">We make your</p>
				<p class="xl:hidden inline-block text-center">real estate</p>
				<p class="xl:hidden inline-block whitespace-nowrap">
					business <span class="textGradient1">faster </span>
					<!-- <span id="text1" class="textGradient1" /> -->
					<!-- <span id="text2" class="textGradient1" /> -->
				</p>
				<!--------------------------------->
				<!--------------------------------->
			</div>
		</div>
		<p
			class="text-white opacity-70 text-center z-20 text-[18px] xl:text-[22px] font-light mt-6 mb-12 whitespace-nowrap leading-normal"
		>
			The ultimate tech suite for real estate <br class="inline-block md:hidden" /> professionals has
			arrived.
		</p>

		<Button label="Join Free Beta" variant="landing-dark" classes="!z-[38]" />
		<div class="relative w-full">
			<div class="flex justify-center">
				<div class="w-[40rem] absolute h-full z-10 mask -rotate-90 -left-[8rem]" />
				<div class="w-[40rem] h-full z-10 mask rotate-90 -right-[12rem] absolute" />
				<div class="w-full absolute h-[35rem] xl:h-[40rem] mask rotate-180 z-30 bottom-0" />
				<img
					src={cityVector}
					alt=""
					class="xl:w-[80rem] xl:h-[42rem] h-[40rem] -mt-32 xl:mt-0 z-20 xl:z-0 w-full xl:inline-block object-cover"
				/>
				<p
					class="text-white opacity-40 text-center text-lg font-light w-full bottom-[10rem] xl:bottom-[13rem] z-[38] absolute"
				>
					BACKED BY THE BEST
				</p>
			</div>
		</div>
	</section>
	<section class="w-full flex flex-col items-center justify-center mt-40 relative">
		<BackgroundGradient />
		<p class="text-[30px] xl:text-6xl text-center text-white leading-tight">
			The <span class="textGradient2">Power of AI </span> in <br class="xl:hidden inline-block" /> real
			estate
		</p>
		<div class="text-center mt-6 text-base sm:text-lg text-slate font-light mb-12">
			<p class="whitespace-nowrap">
				Explore the tools that empower <br class="inline-block xl:hidden" /> you to work smarter &
				faster
				<br class="hidden xl:inline-block" />
				to <br class="inline-block xl:hidden" /> achieve your goals.
			</p>
		</div>
		<div class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5">
			<div
				class="xl:w-[1188px] xl:h-[643px] h-[225px] md:h-[400px] w-full md:w-[600px] lg:w-[800px] sm:w-[600px] bg-white bg-opacity-0 rounded-[19px] shadow border border-white border-opacity-40"
			>
				<video controls width="100%" class="rounded-[19px] h-full w-full">
					<track kind="captions" />
				</video>
			</div>
		</div>
		<!-- Mobile styles for under video feature section  -->
		<div class="xl:hidden w-full flex justify-center just sm:px-0 pt-4">
			<div
				class="p-8 grid grid-cols-2 lg:w-[800px] sm:w-[600px] h-[225px] md:w-[600px] items-center md:h-[400px] text-lg gap-y-8 gap-x-8 w-full text-center justify-center border-opacity-10 bg-black bg-opacity-0 rounded-[20px] shadow border border-white backdrop-blur-[14.35px]"
			>
				<p class="whitespace-nowrap">140 million+ <br /> property records</p>
				<p class="whitespace-nowrap">AI driven <br /> Property insights</p>
				<p class="whitespace-nowrap">Automated <br /> Social Media</p>
				<p class="">Marketing <br />Analytics</p>
			</div>
		</div>
		<!-- Desktop styles for under video feature section -->
		<div class="mt-12 hidden xl:flex xl:w-[1188px] justify-center w-full">
			<div class="flex items-center leading-9 text-[2rem] text-white font-normal">
				<p class="whitespace-nowrap">140 million+ <br /> property records</p>
				<div class="mx-10 hidden xl:inline-block">
					<LandingSeperator />
				</div>

				<p class="whitespace-nowrap">AI driven <br /> Property insights</p>
				<div class="mx-10 hidden xl:inline-block">
					<LandingSeperator />
				</div>
				<p class="whitespace-nowrap">Automated <br /> Social Media</p>
				<div class="mx-10 hidden xl:inline-block">
					<LandingSeperator />
				</div>
				<p class="">Marketing <br />Analytics</p>
			</div>
		</div>
	</section>
	<section class="mt-20 xl:mt-40 text-white relative z-50 bg-transparent">
		<p class="text-[30px] xl:text-6xl text-center leading-normal whitespace-nowrap">
			Effortless <span class="textGradient5">
				<br class="inline-block xl:hidden" /> Expertise & Exposure</span
			>
		</p>
		<div class="text-center my-8 text-lg text-slate font-light">
			<p>Get your competitive advantage. <br class="inline-block xl:hidden" /> Get Boosted.</p>
		</div>
		<div class="w-full flex flex-col items-center justify-center">
			<div class="bg-zinc-950 bg-opacity-0 rounded-[40px] border border-white border-opacity-10">
				<div
					class="bg-zinc-950 m-[.15rem] xl:m-[.25rem] bg-opacity-0 rounded-[40px] border border-white border-opacity-10 flex"
				>
					<Button
						variant="variant-filled-surface"
						label="Marketing"
						classes={section2ButtonStyle}
					/>
					<Button variant="variant-filled-surface" label="Insights" classes={section2ButtonStyle} />
					<Button variant="variant-filled-surface" label="Listings" classes={section2ButtonStyle} />
					<Button variant="variant-filled-surface" label="Buyers" classes={section2ButtonStyle} />
				</div>
			</div>
			<div
				class="p-1 xl:w-[1188px] sm:w-[600px] bg-zinc-950 bg-opacity-0 rounded-[20px] w-full md:w-[600px] lg:w-[800px] border border-white border-opacity-5 mt-8 xl:mt-16"
			>
				<div
					class="w-full h-full xl:h-[490px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] flex flex-col items-center p-8 sm:p-12"
				>
					<div
						class="flex flex-col w-full xl:flex-row items-start xl:justify-center justify-start xl:items-center opacity-100"
					>
						<div class="mr-4">
							<LandingBezier />
						</div>
						<p
							class="text-white text-xl xl:text-[32px] tracking-tight whitespace-nowrap mt-4 xl:mt-0"
						>
							Fully automated social media
						</p>
					</div>
					<p
						class="text-left xl:text-center whitespace-nowrap mt-4 text-slate font-light text-base w-full"
					>
						See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your
						best friend.
					</p>
					<div class="mt-8 w-full">
						<img
							src={landingScreenshot1}
							alt=""
							class="object-cover xl:w-full xl:h-full h-[300px] md:h-[400px] rounded-[18px]"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center mt-6">
			<div
				class="flex justify-between xl:w-[1188px] sm:w-[600px] w-full md:w-[600px] lg:w-[800px] xl:flex-row flex-col items-center"
			>
				<div
					class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
				>
					<div
						class="h-full md:w-[600px] sm:w-[600px] lg:w-[800px] xl:w-[576px] xl:h-[598px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 sm:p-12"
					>
						<div class="flex xl:items-center xl:flex-row flex-col">
							<div class="mr-4">
								<LandingBezier />
							</div>
							<p class="text-white text-xl xl:text-[32px] tracking-tight mt-4 xl:mt-0">
								Automated Campaigns
							</p>
						</div>
						<p
							class="text-left xl:text-center whitespace-nowrap mt-4 xl:mt-8 text-slate font-light text-base w-full"
						>
							See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your
							best friend.
						</p>
						<div class="mt-8">
							<img
								class="xl:w-[487px] xl:h-[335px] h-[300px] md:h-[400px] w-full mix-blend-lighten rounded-[18px] object-cover"
								src={landingPlaceholder}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div
					class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-6 xl:mt-0"
				>
					<div
						class="h-full md:w-[600px] lg:w-[800px] sm:w-[600px] xl:w-[576px] xl:h-[598px] border-opacity-10 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 sm:p-12"
					>
						<div class="flex xl:items-center xl:flex-row flex-col items-start justify-start">
							<div class="mr-4">
								<LandingBezier />
							</div>
							<p class="text-white text-xl xl:text-[32px] tracking-tight mt-4 xl:mt-0">
								Advanced analytics and ai generated suggestions
							</p>
						</div>
						<p
							class="text-left xl:text-center whitespace-nowrap mt-4 xl:mt-8 text-slate font-light text-base w-full"
						>
							See our feature packed app that’s <br class="inline-block xl:hidden" /> going to be your
							best friend.
						</p>
						<div class="mt-8">
							<img
								class="xl:w-[487px] xl:h-[335px] mix-blend-lighten rounded-[18px] h-[300px] md:h-[400px] w-full object-cover"
								src={landingPlaceholder}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="xl:mt-40 mt-20 text-white relative">
		<div class="w-full flex justify-center flex-col items-center">
			<p
				class="text-neutral-100 text-center text-[30px] xl:text-6xl leading-normal xl:leading-[75px]"
			>
				Message from <br /> <span class="textGradient2">the founders</span>
			</p>
			<div
				class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-12"
			>
				<div
					class="leading-normal w-full h-full xl:w-[1188px] md:w-[600px] lg:w-[800px] xl:h-[302px] flex p-4 xl:p-12 items-center border-opacity-10 bg-opacity-30 bg-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px]"
				>
					<div class="relative z-50 text-[18px] xl:text-2xl text-slate font-light">
						<p class="">
							At Agent Boost, our mission is to craft cutting-edge tools specifically tailored for
							realtors like you. We recognize that optimizing your efficiency is pivotal to your
							business success.
						</p>
						<p class="mt-4">
							Our platform will remain in a state of constant evolution, perpetually harnessing the
							latest and most thrilling advancements in technology and AI to propel you towards
							greater speed and effectiveness as an agent. Our journey is just beginning.
						</p>
					</div>
				</div>
			</div>
			<div class="mt-12 flex xl:flex-row flex-col items-center justify-center gap-x-8 w-full">
				<div
					class="p-1 w-full md:w-fit bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-10"
				>
					<div class="md:w-[576px] h-[179px] relative z-10 cta rounded-[18px]">
						<div class="absolute p-4 flex justify-center items-center w-full h-full">
							<img
								class="w-[133px] xl:h-[155px] h-full rounded-[17px] object-cover"
								src={sam}
								alt=""
							/>
							<div class="ml-6 whitespace-nowrap xl:inline-block hidden">
								<p class="text-white text-[22px] xl:text-[28px] leading-[35px]">Sam Hamilton</p>
								<p class="text-[#8298AB] text-[15px] xl:text-[17px] font-normal leading-[25px]">
									Founder & CEO
								</p>
							</div>
							<div class="hidden justify-end mr-8 w-full gap-x-4 xl:flex">
								<Instagram />
								<Twitter />
							</div>
							<!-- Mobile Styles for founder section -->
							<div class="xl:hidden ml-6 flex flex-col h-full w-full">
								<div class="whitespace-nowrap">
									<p class="text-white text-[22px] xl:text-[28px] leading-[35px]">Sam Hamilton</p>
									<p class="text-[#8298AB] text-[15px] xl:text-[17px] font-normal leading-[25px]">
										Founder & CEO
									</p>
								</div>
								<div class="flex flex-col w-full h-full justify-end">
									<div class="flex gap-x-2">
										<Instagram />
										<Twitter />
									</div>
								</div>
							</div>
							<!-- --------------->
						</div>
					</div>
				</div>
				<div
					class="p-1 mt-12 xl:mt-0 md:w-fit w-full bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-10"
				>
					<div class="md:w-[576px] h-[179px] relative z-10 cta rounded-[18px]">
						<div class="absolute p-4 flex justify-center items-center w-full h-full">
							<img
								class="w-[133px] xl:h-[155px] h-full rounded-[17px] object-cover"
								src={matt}
								alt=""
							/>
							<div class="ml-6 whitespace-nowrap xl:inline-block hidden">
								<p class="text-white text-[22px] xl:text-[28px] leading-[35px]">Matt Zamora</p>
								<p class="text-[#8298AB] text-[15px] xl:text-[17px] font-normal leading-[25px]">
									Tech Lead
								</p>
							</div>
							<div class="hidden justify-end mr-8 w-full gap-x-4 xl:flex">
								<Instagram />
								<Twitter />
							</div>
							<!-- Mobile Styles for founder section -->
							<div class="xl:hidden ml-6 flex flex-col h-full w-full">
								<div class="whitespace-nowrap">
									<p class="text-white text-[22px] xl:text-[28px] leading-[35px]">Matt Zamora</p>
									<p class="text-[#8298AB] text-[15px] xl:text-[17px] font-normal leading-[25px]">
										Tech Lead
									</p>
								</div>
								<div class="flex flex-col w-full h-full justify-end">
									<div class="flex gap-x-2">
										<Instagram />
										<Twitter />
									</div>
								</div>
							</div>
							<!-- --------------->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="xl:mt-40 mt-20 mb-12 flex justify-center">
		<div
			class="p-1 bg-zinc-950 bg-opacity-0 w-full md:w-fit rounded-[20px] border border-white border-opacity-10"
		>
			<div class="md:h-[500px] relative xl:w-[1188px] md:w-[600px] lg:w-[800px] w-full h-[388px]">
				<div class="absolute top-0 w-full h-full rounded-[20px] cta">
					<div class="w-full h-full relative flex justify-center items-center">
						<div class="absolute z-50 flex items-center">
							<div class="xl:mr-32 px-4 py-8">
								<p class="text-[30px] xl:text-[3.6rem] font-normal leading-normal text-white">
									Ready to boost your <br />
									<span class="textGradient textGradient5">real estate business?</span>
								</p>
								<p class="mt-4 text-[18px] text-slate font-light">
									Seize the opportunity to elevate your real estate business and <br
										class="hidden xl:inline-block"
									/>
									embrace a future of efficiency and expertise. Join Agent Boost AI
									<br class="hidden xl:inline-block" /> now and experience a revolution in realtor tools!
								</p>
								<Button variant="landing" label="Get started" classes="text-white mt-8 xl:mt-12" />
							</div>
							<div class="xl:inline-block hidden">
								<LogoIconBlue />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="postcss">
	.elipse {
		width: 179.625rem;
		height: 77.1875rem;
		border-radius: 2874px;
		background: linear-gradient(74deg, #3e80ff 32.14%, #49f9ea 87.5%);
		filter: blur(137px);
		-webkit-filter: blur(137px);
		-moz-filter: blur(137px);
		-o-filter: blur(137px);
		-ms-filter: blur(137px);
		top: -75rem;
		left: -50rem;
		z-index: 30;
		transform: translate3d(15px, 15px, -1px);
	}

	@media (max-width: 1500px) {
		.elipse {
			border-radius: 100%;
		}
	}

	@media (min-width: 1500px) {
		.elipse {
			top: -74rem;
			border-radius: 2874px;
		}
	}

	@media (min-width: 1800px) {
		.elipse {
			left: -28%;
		}
	}

	@media (min-width: 2000px) {
		.elipse {
			left: -20%;
		}
	}

	@media (min-width: 2300px) {
		.elipse {
			left: -10%;
		}
	}
	@media (min-width: 2500px) {
		.elipse {
			left: -4%;
		}
	}

	@media (min-width: 3000px) {
		.elipse {
			left: 7%;
		}
	}

	.textGradient1 {
		background: linear-gradient(88deg, #3f8bfd -50.22%, #49f9ea 89.43%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.textGradient2 {
		background: linear-gradient(89deg, #42aef8 24.63%, #48efed 60.38%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.textGradient3 {
		background: linear-gradient(93deg, #3f8bfd 26.03%, #49f9ea 100.66%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.textGradient4 {
		background: linear-gradient(93deg, #3f8bfd 39.11%, #49f9ea 92.48%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.textGradient5 {
		background: linear-gradient(81deg, #42adf8 6.82%, #48efec 84.99%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.mask {
		background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 77.08%);
	}

	.cta {
		/* background: linear-gradient(180deg, black 50%, #3d7fff 140%, #49f9ea 110%); */
		background: linear-gradient(to bottom, black 25%, rgba(0, 0, 0, 0.3)),
			linear-gradient(to right, #3d7fff 34.33%, #49f9ea 97.28%);
	}

	#text1,
	#text2 {
		position: absolute;
		margin-left: 1rem;
	}
</style>
