<script lang="ts">
  import cityVector from '$lib/assets/images/vector.png';
  import landingPlaceholder from '$lib/assets/images/landingPlaceholder.png';
  import Button from '$lib/components/Button/Button.svelte';
  import LandingBezier from '$lib/assets/svg/LandingBezier.svelte';
  import landingScreenshot1 from '$lib/assets/images/landingAppScreenshot1.png';
  import Instagram from '$lib/assets/svg/Instagram.svelte';
  import matt from '$lib/assets/images/matt.jpg';
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
      text2: document.getElementById('text2'),
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
    '!w-[8rem] !text-opacity-40 !text-white hover:!text-primary-500 hover:!bg-white hover:!bg-opacity-10';
</script>

<div class="w-full h-full relative">
  <div class="elipse absolute" />
  <section class="w-full flex flex-col h-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <div class="w-[278px] h-[39px] relative">
        <div
          class="w-[278px] h-[39px] pl-[75px] pr-4 pt-[9px] pb-2.5 left-0 top-0 absolute bg-white bg-opacity-10 rounded-[50px] shadow backdrop-blur-[7.22px] justify-end items-center inline-flex"
        >
          <div class="text-white text-base font-['Sequel Sans'] leading-tight">
            Free beta now available
          </div>
        </div>
        <div
          class="w-[65px] h-[35px] left-[2px] top-[2px] absolute bg-white bg-opacity-10 rounded-[50px] shadow backdrop-blur-[7.22px]"
        />
        <div
          class="left-[16px] top-[9px] absolute text-white text-base font-['Sequel Sans'] leading-tight"
        >
          New
        </div>
      </div>
      <div class="flex flex-col mt-8 items-center w-full">
        <div class="w-[45rem]">
          <p class="text-7xl text-center whitespace-nowrap text-white">
            We make your real
          </p>
          <p class="text-7xl text-white mt-1">
            estate business <span id="text1" class="textGradient" />
            <span id="text2" class="textGradient" />
          </p>
        </div>
      </div>
    </div>
    <p
      class="text-white opacity-70 text-center text-[22px] font-light mt-6 mb-12"
    >
      The ultimate tech suite for real estate professionals has arrived.
    </p>

    <Button label="Join Free Beta" variant="landing-dark" />
    <div class="relative w-full">
      <div class="flex justify-center">
        <div class="w-[40rem] absolute h-full z-10 mask -rotate-90 -left-20" />
        <div class="w-[40rem] absolute h-full z-10 mask rotate-90 -right-20" />
        <div class="w-full absolute h-[24rem] mask rotate-180 bottom-0" />
        <img src={cityVector} alt="" class="w-[80rem] h-[30rem]" />
        <p
          class="text-white opacity-40 text-center text-lg font-light w-full bottom-10 absolute"
        >
          BACKED BY THE BEST
        </p>
      </div>
    </div>
  </section>
  <section
    class="w-full flex flex-col items-center justify-center mt-40 relative"
  >
    <BackgroundGradient />
    <p class="text-6xl text-center text-white">
      The <span class="textGradient">Power of AI </span> in real estate
    </p>
    <div class="text-center mt-6 text-lg text-slate font-light mb-12">
      <p>
        Explore the tools that empower you to work smarter & faster <br /> to achieve
        your goals.
      </p>
    </div>
    <div
      class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
    >
      <div
        class="w-[1188px] h-[643px] bg-white bg-opacity-0 rounded-[19px] shadow border border-white border-opacity-40"
      >
        <video controls width="100%" class="rounded-[19px]" />
      </div>
    </div>

    <div class="mt-12 flex justify-center w-full">
      <div
        class="flex items-center leading-9 text-[2rem] text-white font-normal"
      >
        <p class="whitespace-nowrap">140 million+ <br /> property records</p>
        <div class="mx-10">
          <LandingSeperator />
        </div>

        <p class="whitespace-nowrap">AI driven <br /> Property insights</p>
        <div class="mx-10">
          <LandingSeperator />
        </div>
        <p class="whitespace-nowrap">Automated <br /> Social Media</p>
        <div class="mx-10">
          <LandingSeperator />
        </div>
        <p class="">Marketing <br />Analytics</p>
      </div>
    </div>
  </section>
  <section class="mt-40 text-white">
    <p class="text-6xl text-center">
      Effortless <span class="textGradient"> expertise & exposure</span>
    </p>
    <div class="text-center my-6 text-lg text-slate font-light">
      <p>Get your competitive advantage. Get Boosted.</p>
    </div>
    <div class="w-full flex flex-col items-center justify-center">
      <div
        class="p-[.25rem] bg-zinc-950 bg-opacity-0 rounded-[40px] border border-white border-opacity-10"
      >
        <div
          class="bg-zinc-950 bg-opacity-0 rounded-[40px] border border-white border-opacity-10"
        >
          <Button
            variant="variant-filled-surface"
            label="Marketing"
            classes={section2ButtonStyle}
          />
          <Button
            variant="variant-filled-surface"
            label="Insights"
            classes={section2ButtonStyle}
          />
          <Button
            variant="variant-filled-surface"
            label="Listings"
            classes={section2ButtonStyle}
          />
          <Button
            variant="variant-filled-surface"
            label="Buyers"
            classes={section2ButtonStyle}
          />
        </div>
      </div>
      <div
        class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-16"
      >
        <div
          class="w-[1188px] h-[490px] border-opacity-20 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] flex flex-col items-center p-12"
        >
          <div class="flex items-center opacity-100">
            <div class="mr-4">
              <LandingBezier />
            </div>
            <p class="text-white text-[32px] tracking-tight">
              Fully automated social media
            </p>
          </div>
          <p class="text-center mt-8 text-slate font-light text-lg">
            See our feature packed app that’s going to be your best friend.
          </p>
          <div class="mt-6">
            <img src={landingScreenshot1} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center mt-6">
      <div class="flex justify-between w-[1188px]">
        <div
          class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
        >
          <div
            class="w-[576px] h-[598px] border-opacity-20 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-12"
          >
            <div class="flex items-center">
              <div class="mr-4">
                <LandingBezier />
              </div>
              <p class="text-white text-[32px] tracking-tight">
                Automated Campaigns
              </p>
            </div>
            <p class="text-left mt-4 text-slate font-light text-lg">
              See our feature packed app that’s <br /> going to be your best friend.
            </p>
            <div class="mt-16">
              <img
                class="w-[487px] h-[335px] mix-blend-lighten rounded-[18px]"
                src={landingPlaceholder}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
        >
          <div
            class="w-[576px] h-[598px] border-opacity-20 bg-black bg-opacity-30 rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-12"
          >
            <div class="flex items-center">
              <div class="mr-4">
                <LandingBezier />
              </div>
              <p class="text-white text-[32px] tracking-tight">
                Advanced analytics and ai generated suggestions
              </p>
            </div>
            <p class="text-left mt-4 text-slate font-light text-lg">
              See our feature packed app that’s <br /> going to be your best friend.
            </p>
            <div class="mt-12">
              <img
                class="w-[487px] h-[335px] mix-blend-lighten rounded-[18px]"
                src={landingPlaceholder}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-40 text-white relative">
    <div class="w-full flex justify-center flex-col items-center">
      <p class="text-neutral-100 text-center text-6xl leading-[75px]">
        Message from <span class="textGradient">the founders </span>
      </p>
      <div
        class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-12"
      >
        <div
          class="w-[1188px] h-[302px] flex p-12 items-center border-opacity-20 bg-opacity-30 bg-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px]"
        >
          <div class="relative z-50">
            <p class="text-2xl text-slate font-light">
              At Agent Boost, our mission is to craft cutting-edge tools
              specifically tailored for realtors like you. We recognize that
              optimizing your efficiency is pivotal to your business success.
            </p>
            <p class="text-2xl mt-4 text-slate font-light">
              Our platform will remain in a state of constant evolution,
              perpetually harnessing the latest and most thrilling advancements
              in technology and AI to propel you towards greater speed and
              effectiveness as an agent. Our journey is just beginning.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 flex justify-center gap-x-8">
        <div
          class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
        >
          <div class="w-[576px] h-[179px] relative z-10 cta rounded-[18px]">
            <div class="absolute m-2 flex items-center w-full">
              <img
                class="w-[133px] h-[155px] rounded-[17px]"
                src="https://via.placeholder.com/133x155"
                alt=""
              />
              <div class="ml-4 whitespace-nowrap">
                <p class="text-white text-[28px] leading-[35px]">
                  Sam Hamilton
                </p>
                <p
                  class="text-slate-400 text-[17px] font-normal leading-[25px]"
                >
                  Founder & CEO
                </p>
              </div>
              <div class="flex justify-end mr-8 w-full gap-x-4">
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-1 w-full bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
        >
          <div class="w-[576px] h-[179px] relative z-10 cta rounded-[18px]">
            <div class="absolute m-2 flex items-center w-full">
              <img
                class="w-[133px] h-[155px] object-cover rounded-[17px]"
                src={matt}
                alt=""
              />
              <div class="ml-4 whitespace-nowrap">
                <p class="text-white text-[28px] leading-[35px]">Matt Zamora</p>
                <p
                  class="text-slate-400 text-[17px] font-normal leading-[25px]"
                >
                  Tech Lead
                </p>
              </div>
              <div class="flex justify-end mr-8 w-full gap-x-4">
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-36 mb-12 flex justify-center">
    <div
      class="p-1 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-10"
    >
      <div class="h-[500px] relative w-[1188px]">
        <div class="absolute top-0 w-full h-full rounded-[20px] cta">
          <div
            class="w-full h-[539px] relative flex justify-center items-center"
          >
            <div class="absolute z-50 flex items-center">
              <div class="mr-32">
                <p class="text-[3.6rem] font-normal leading-normal text-white">
                  Ready to boost your <br />
                  <span class="textGradient">real estate business?</span>
                </p>
                <p class="mt-4 text-slate text-base font-light">
                  Seize the opportunity to elevate your real estate business and <br
                  />
                  embrace a future of efficiency and expertise. Join Agent Boost
                  AI
                  <br /> now and experience a revolution in realtor tools!
                </p>
                <Button
                  variant="landing"
                  label="Get started"
                  classes="text-white mt-12"
                />
              </div>
              <LogoIconBlue />
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
    flex-shrink: 0;
    border-radius: 179.625rem;
    background: linear-gradient(74deg, #3e80ff 32.14%, #49f9ea 87.5%);
    filter: blur(137px);
    top: -78rem;
    left: -65rem;
  }

  .textGradient {
    background: linear-gradient(89deg, #42aef8 24.63%, #48efed 60.38%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mask {
    background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 77.08%);
  }

  .cta {
    /* background: linear-gradient(180deg, black 50%, #3d7fff 140%, #49f9ea 110%); */
    background: linear-gradient(to bottom, black 45%, rgba(0, 0, 0, 0.3)),
      linear-gradient(to right, #3d7fff 60%, #49f9ea 110%);
  }

  #text1,
  #text2 {
    position: absolute;
    margin-left: 1rem;
  }
</style>
