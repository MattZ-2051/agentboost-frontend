<script lang="ts">
	import cityVector from '$lib/assets/images/vector.png';
	import Button from '$lib/components/Button/Button.svelte';
	import Instagram from '$lib/assets/svg/Social/Instagram.svelte';
	import matt from '$lib/assets/images/matt-landing.jpeg';
	import sam from '$lib/assets/images/sam-landing.jpeg';
	import LogoIconBlue from '$lib/assets/svg/LogoIconBlue.svelte';
	import Twitter from '$lib/assets/svg/Social/Twitter.svelte';
	import { onMount } from 'svelte';
	import BackgroundGradient from '$lib/pages/Landing/BackgroundGradient.svelte';
	import LandingSeperator from '$lib/assets/svg/LandingSeperator.svelte';
	import FeatureTabs from '$lib/pages/Landing/FeatureTabs/FeatureTabs.svelte';
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
		'xl:!w-[8rem] w-[82px] !bg-transparent !text-sm xl:!text-lg !text-opacity-40 !text-white hover:!text-primary-500 hover:!bg-white hover:!bg-opacity-10';

	const section2ButtonActiveStyle =
		'xl:!w-[8rem] w-[82px] !bg-white !text-sm xl:!text-lg !text-primary-500 !bg-opacity-10';

	$: featureTabs = ['Marketing', 'Insights', 'Listings', 'Buyers'];

	$: selectedTab = featureTabs[0];
</script>

<div class="relative h-full w-full p-12 !font-[Made-Evolve] xl:p-12">
	<div class="elipse absolute" />
	<section class="flex w-full flex-col items-center justify-center">
		<div class="flex flex-col items-center justify-center">
			<div class="relative z-30 mt-8 h-[39px] w-[278px]">
				<div
					class="absolute left-0 top-0 inline-flex h-[39px] w-fit items-center justify-start rounded-[50px] bg-white bg-opacity-10 pb-2.5 pl-[75px] pr-4 pt-[9px] text-base shadow backdrop-blur-[7.22px]"
				>
					<div class="text-base leading-tight text-white">Free beta now available</div>
				</div>
				<div
					class="absolute left-[2px] top-[2px] flex h-[35px] w-[65px] justify-center rounded-[50px] bg-white bg-opacity-10 shadow backdrop-blur-[7.22px]"
				/>
				<div class="absolute left-[20px] top-[9px] text-center text-base leading-tight text-white">
					New
				</div>
			</div>
			<div
				class="z-30 mt-8 flex w-full flex-col items-center text-[40px] leading-tight text-white xl:text-[90px] xl:leading-[6rem]"
			>
				<p class="hidden whitespace-nowrap xl:inline-block">We make your real</p>
				<p class="-ml-[15rem] hidden xl:inline-block">
					estate business <span id="text1" class="textGradient1" />
					<span id="text2" class="textGradient1" />
				</p>
				<!-- mobile styles  -->
				<p class="inline-block whitespace-nowrap xl:hidden">We make your</p>
				<p class="inline-block text-center xl:hidden">real estate</p>
				<p class="inline-block whitespace-nowrap xl:hidden">
					business <span class="textGradient1">faster </span>
					<!-- <span id="text1" class="textGradient1" /> -->
					<!-- <span id="text2" class="textGradient1" /> -->
				</p>
				<!--------------------------------->
				<!--------------------------------->
			</div>
		</div>
		<p
			class="z-20 mb-12 mt-6 whitespace-nowrap text-center text-[18px] font-light leading-normal text-[#C0C4DA] xl:text-[22px]"
		>
			The ultimate tech suite for real estate <br class="inline-block md:hidden" /> professionals has
			arrived.
		</p>

		<Button label="Join Free Beta" variant="landing-dark" classes="!z-[38]" />
		<div class="relative w-full">
			<div class="flex justify-center">
				<div class="mask absolute -left-[8rem] z-10 h-full w-[40rem] -rotate-90" />
				<div class="mask absolute -right-[12rem] z-10 h-full w-[40rem] rotate-90" />
				<div class="mask absolute bottom-0 z-30 h-[35rem] w-full rotate-180 xl:h-[40rem]" />
				<img
					src={cityVector}
					alt=""
					class="z-20 -mt-32 h-[40rem] w-full object-cover xl:z-0 xl:mt-0 xl:inline-block xl:h-[42rem] xl:w-[80rem]"
				/>
				<p
					class="absolute bottom-[10rem] z-[38] w-full text-center text-lg font-light text-white opacity-40 xl:bottom-[13rem]"
				>
					BACKED BY THE BEST
				</p>
			</div>
		</div>
	</section>
	<section class="relative mt-40 flex w-full flex-col items-center justify-center">
		<BackgroundGradient />
		<p class="text-center text-[30px] leading-tight text-white xl:text-6xl">
			The <span class="textGradient2">Power of AI </span> in <br class="inline-block xl:hidden" /> real
			estate
		</p>
		<div class="mb-[34px] mt-6 text-center text-[19px] font-light text-[#C0C4DA] sm:text-lg">
			<p class="whitespace-nowrap">
				Explore the tools that empower <br class="inline-block xl:hidden" /> you to work smarter &
				faster
				<br class="hidden xl:inline-block" />
				to <br class="inline-block xl:hidden" /> achieve your goals.
			</p>
		</div>
		<div class="rounded-[20px] border border-white border-opacity-5 bg-zinc-950 bg-opacity-0 p-1">
			<div
				class="h-[225px] w-full rounded-[19px] border border-white border-opacity-40 bg-white bg-opacity-0 shadow sm:w-[600px] md:h-[400px] md:w-[600px] lg:w-[800px] xl:h-[643px] xl:w-[1188px]"
			>
				<video controls width="100%" class="h-full w-full rounded-[19px]">
					<track kind="captions" />
				</video>
			</div>
		</div>
		<!-- Mobile styles for under video feature section  -->
		<div class="just flex w-full justify-center pt-4 sm:px-0 xl:hidden">
			<div
				class="grid h-[225px] w-full grid-cols-2 items-center justify-center gap-x-8 gap-y-8 rounded-[20px] border border-white border-opacity-10 bg-black bg-opacity-0 p-8 text-center text-lg shadow backdrop-blur-[14.35px] sm:w-[600px] md:h-[400px] md:w-[600px] lg:w-[800px]"
			>
				<p class="whitespace-nowrap">140 million+ <br /> property records</p>
				<p class="whitespace-nowrap">AI driven <br /> Property insights</p>
				<p class="whitespace-nowrap">Automated <br /> Social Media</p>
				<p class="">Marketing <br />Analytics</p>
			</div>
		</div>
		<!-- Desktop styles for under video feature section -->
		<div class="mt-12 hidden w-full justify-center xl:flex xl:w-[1188px]">
			<div class="flex items-center text-[2rem] font-normal leading-9 text-white">
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
	<section class="relative z-50 mt-20 bg-transparent text-white xl:mt-40">
		<p class="whitespace-nowrap text-center text-[30px] leading-normal xl:text-6xl">
			Effortless <span class="textGradient5">
				<br class="inline-block xl:hidden" /> expertise & exposure</span
			>
		</p>
		<div class="mb-[34px] mt-6 text-center text-lg font-light text-[#C0C4DA]">
			<p>Get your competitive advantage. <br class="inline-block xl:hidden" /> Get Boosted.</p>
		</div>
		<div class="flex w-full flex-col items-center justify-center">
			<div class="rounded-[40px] border border-white border-opacity-10">
				<div
					class="m-[.15rem] flex rounded-[40px] border border-white border-opacity-10 xl:m-[.25rem]"
				>
					{#each featureTabs as item, i}
						<Button
							variant="variant-filled-surface"
							label={item}
							classes={` ${
								selectedTab === item ? section2ButtonActiveStyle : section2ButtonStyle
							} `}
							onClick={() => (selectedTab = item)}
						/>
					{/each}
				</div>
			</div>
		</div>
		<FeatureTabs {selectedTab} />
	</section>
	<section class="relative mt-20 text-white xl:mt-40">
		<div class="flex w-full flex-col items-center justify-center">
			<p
				class="text-center text-[30px] leading-normal text-neutral-100 xl:text-6xl xl:leading-[75px]"
			>
				Message from <br /> <span class="textGradient2">the founders</span>
			</p>
			<div
				class="mt-12 rounded-[20px] border border-white border-opacity-5 bg-zinc-950 bg-opacity-0 p-1"
			>
				<div
					class="flex h-full w-full items-center rounded-[18px] border border-white border-opacity-10 bg-black bg-opacity-30 p-4 leading-normal shadow backdrop-blur-[14.35px] md:w-[600px] lg:w-[800px] xl:h-[302px] xl:w-[1188px] xl:p-12"
				>
					<div class="relative z-50 text-[18px] font-light text-slate xl:text-2xl">
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
			<div class="mt-12 flex w-full flex-col items-center justify-center gap-x-8 xl:flex-row">
				<div
					class="w-full rounded-[20px] border border-white border-opacity-10 bg-zinc-950 bg-opacity-0 p-1 md:w-fit"
				>
					<div class="cta relative z-10 h-[179px] rounded-[18px] md:w-[576px]">
						<div class="absolute flex h-full w-full items-center justify-center p-4">
							<img
								class="h-full w-[133px] rounded-[17px] object-cover xl:h-[155px]"
								src={sam}
								alt=""
							/>
							<div class="ml-6 hidden whitespace-nowrap xl:inline-block">
								<p class="text-[22px] leading-[35px] text-white xl:text-[28px]">Sam Hamilton</p>
								<p class="text-[15px] font-normal leading-[25px] text-[#8298AB] xl:text-[17px]">
									Founder & CEO
								</p>
							</div>
							<div class="mr-8 hidden w-full justify-end gap-x-4 xl:flex">
								<Instagram />
								<Twitter />
							</div>
							<!-- Mobile Styles for founder section -->
							<div class="ml-6 flex h-full w-full flex-col xl:hidden">
								<div class="whitespace-nowrap">
									<p class="text-[22px] leading-[35px] text-white xl:text-[28px]">Sam Hamilton</p>
									<p class="text-[15px] font-normal leading-[25px] text-[#8298AB] xl:text-[17px]">
										Founder & CEO
									</p>
								</div>
								<div class="flex h-full w-full flex-col justify-end">
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
					class="mt-12 w-full rounded-[20px] border border-white border-opacity-10 bg-zinc-950 bg-opacity-0 p-1 md:w-fit xl:mt-0"
				>
					<div class="cta relative z-10 h-[179px] rounded-[18px] md:w-[576px]">
						<div class="absolute flex h-full w-full items-center justify-center p-4">
							<img
								class="h-full w-[133px] rounded-[17px] object-cover xl:h-[155px]"
								src={matt}
								alt=""
							/>
							<div class="ml-6 hidden whitespace-nowrap xl:inline-block">
								<p class="text-[22px] leading-[35px] text-white xl:text-[28px]">Matt Zamora</p>
								<p class="text-[15px] font-normal leading-[25px] text-[#8298AB] xl:text-[17px]">
									Tech Lead
								</p>
							</div>
							<div class="mr-8 hidden w-full justify-end gap-x-4 xl:flex">
								<Instagram />
								<Twitter />
							</div>
							<!-- Mobile Styles for founder section -->
							<div class="ml-6 flex h-full w-full flex-col xl:hidden">
								<div class="whitespace-nowrap">
									<p class="text-[22px] leading-[35px] text-white xl:text-[28px]">Matt Zamora</p>
									<p class="text-[15px] font-normal leading-[25px] text-[#8298AB] xl:text-[17px]">
										Tech Lead
									</p>
								</div>
								<div class="flex h-full w-full flex-col justify-end">
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
	<section class="mb-12 mt-20 flex justify-center xl:mt-40">
		<div
			class="w-full rounded-[20px] border border-white border-opacity-10 bg-zinc-950 bg-opacity-0 p-1 md:w-fit"
		>
			<div class="relative h-[388px] w-full md:h-[500px] md:w-[600px] lg:w-[800px] xl:w-[1188px]">
				<div class="cta absolute top-0 h-full w-full rounded-[20px]">
					<div class="relative flex h-full w-full items-center justify-center">
						<div class="absolute z-50 flex items-center">
							<div class="px-4 py-8 xl:mr-32">
								<p class="text-[30px] font-normal leading-normal text-white xl:text-[3.6rem]">
									Ready to boost your <br />
									<span class="textGradient5">real estate business?</span>
								</p>
								<p class="mt-4 text-[18px] font-light text-slate">
									Seize the opportunity to elevate your real estate business and <br
										class="hidden xl:inline-block"
									/>
									embrace a future of efficiency and expertise. Join Agent Boost AI
									<br class="hidden xl:inline-block" /> now and experience a revolution in realtor tools!
								</p>
								<Button variant="landing" label="Get started" classes="text-white mt-8 xl:mt-12" />
							</div>
							<div class="hidden xl:inline-block">
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
