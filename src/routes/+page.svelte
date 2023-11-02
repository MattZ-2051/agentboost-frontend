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

    const morphTime = 1;
    const cooldownTime = 0.25;

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

    function setMorph(fraction) {
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
      let dt = (newTime - time) / 1000;
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

<div class="relative w-full h-full p-12">
  <div class="elipse absolute z-10" />
  <section class="w-full flex flex-col h-full items-center justify-center">
    <div class="mt-40">
      <p class="text-7xl text-white text-center">We make your real</p>
      <div class="flex mt-2">
        <p class="text-7xl text-white text-center">estate business</p>
        <div class="text-7xl text-white text-center">
          <span id="text1" class="textGradient" />
          <span id="text2" class="textGradient" />
        </div>
      </div>
    </div>
    <div class="mt-6 text-center opacity-40 text-lg font-light">
      The ultimate tech suite for real estate professionals has arrived.
    </div>
    <Button label="Join Free Beta" variant="landing-dark" />
    <div class="relative w-full">
      <div class="flex justify-center">
        <div class="w-[40rem] absolute h-full z-10 mask -rotate-90 -left-20" />
        <div class="w-[40rem] absolute h-full z-10 mask rotate-90 -right-20" />
        <div class="w-full z-0 absolute h-[24rem] mask rotate-180 bottom-0" />
        <img src={cityVector} alt="" class="w-[80rem] h-[30rem]" />
        <p
          class="text-white opacity-40 text-center text-lg font-light w-full bottom-10 absolute"
        >
          BACKED BY THE BEST
        </p>
      </div>
    </div>
  </section>
  <section class="w-full flex flex-col items-center justify-center mt-40">
    <p class="text-5xl text-center text-white">
      The <span class="textGradient">Power of AI </span> in real estate
    </p>
    <div class="text-center mt-4 text-lg text-slate font-light mb-12">
      <p>
        Explore the tools that empower you to work smarter & faster <br /> to achieve
        your goals.
      </p>
    </div>
    <div
      class="w-[1188px] h-[643px] bg-white bg-opacity-0 rounded-[19px] shadow border border-white border-opacity-40"
    >
      <video controls width="100%" />
    </div>
    <div class="mt-12 flex justify-center w-full">
      <div
        class="flex items-center leading-9 text-[2rem] text-white font-normal"
      >
        <p class="whitespace-nowrap">140 million+ <br /> property records</p>
        <div class="divider" />
        <p class="whitespace-nowrap">AI driven <br /> Property insights</p>
        <div class="divider" />
        <p class="whitespace-nowrap">Automated <br /> Social Media</p>
        <div class="divider" />
        <p class="">Marketing <br />Analytics</p>
      </div>
    </div>
  </section>
  <section class="mt-40 text-white">
    <p class="text-6xl text-center">
      Effortless <span class="textGradient"> expertise & exposure</span>
    </p>
    <div class="text-center my-10 text-lg text-slate font-light">
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
        class="p-2 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5 mt-16"
      >
        <div
          class="w-[1188px] h-[490px] border-opacity-20 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-10 flex flex-col items-center"
        >
          <div class="flex items-center">
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
          class="p-2 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
        >
          <div
            class="w-[576px] h-[598px] border-opacity-20 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-10"
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
              />
            </div>
          </div>
        </div>
        <div
          class="p-2 bg-zinc-950 bg-opacity-0 rounded-[20px] border border-white border-opacity-5"
        >
          <div
            class="w-[576px] h-[598px] border-opacity-20 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-10"
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-40 text-white z-30 relative">
    <div class="w-full flex justify-center flex-col items-center z-50">
      <p class="text-neutral-100 text-center text-6xl leading-[75px]">
        Message from <span class="textGradient">the founders </span>
      </p>
      <div
        class="w-[1188px] h-[302px] border-opacity-30 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 mt-12"
      >
        <p class="text-5xl text-center text-slate font-light">FBGM</p>
      </div>
      <div class="mt-12 z-0 flex justify-between w-[1188px]">
        <div class="w-[576px] h-[179px] relative">
          <div
            class="w-[576px] h-[179px] left-0 top-0 absolute bg-gradient-to-br from-blue-500 to-teal-300 rounded-[18px]"
          />
          <div
            class="w-[815px] h-[248px] left-[-59px] top-[-100px] absolute bg-black rounded-full blur-[100px]"
          />
          <div class="absolute m-2 flex items-center w-full">
            <img
              class="w-[133px] h-[155px] rounded-[17px]"
              src="https://via.placeholder.com/133x155"
            />
            <div class="ml-4 whitespace-nowrap">
              <p class="text-white text-[28px] leading-[35px]">Sam Hamilton</p>
              <p class="text-slate-400 text-[17px] font-normal leading-[25px]">
                Founder & CEO
              </p>
            </div>
            <div class="flex justify-end mr-8 w-full gap-x-4">
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
        <div class="w-[576px] h-[179px] relative">
          <div
            class="w-[576px] h-[179px] left-0 top-0 absolute bg-gradient-to-br from-blue-500 to-teal-300 rounded-[18px]"
          />
          <div
            class="w-[815px] h-[248px] left-[-59px] top-[-100px] absolute bg-black rounded-full blur-[100px]"
          />
          <div class="absolute m-2 flex items-center w-full">
            <img
              class="w-[133px] h-[155px] object-cover rounded-[17px]"
              src={matt}
            />
            <div class="ml-4 whitespace-nowrap">
              <p class="text-white text-[28px] leading-[35px]">Matt Zamora</p>
              <p class="text-slate-400 text-[17px] font-normal leading-[25px]">
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
  </section>
  <section class="mt-20 flex justify-center w-full">
    <div
      class="p-2 bg-opacity-0 rounded-[20px] border border-white border-opacity-10"
    >
      <div
        class="w-[74.25rem] cta h-[539px] bg-gradient-to-br from-black to-black rounded-[18px] shadow backdrop-blur-[14.35px] p-24 relative"
      >
        <div
          class="w-[140rem] rounded-full h-[55rem] bg-black blur-[200px] absolute z-10 -top-[22rem] -left-[25%]"
        />
        <div class="absolute z-50 flex items-center">
          <div class="mr-32">
            <p class="text-[3.6rem] font-normal leading-normal text-white">
              Ready to boost your <br />
              <span class="textGradient">real estate business?</span>
            </p>
            <p class="mt-4 text-slate text-base font-light">
              Seize the opportunity to elevate your real estate business and <br
              />
              embrace a future of efficiency and expertise. Join Agent Boost AI
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
  </section>
</div>

<style lang="postcss">
  .elipse {
    width: 100%;
    height: 20rem;
    flex-shrink: 0;
    border-radius: 2874px;
    background: linear-gradient(74deg, #3e80ff 32.14%, #49f9ea 87.5%);
    filter: blur(137px);
    top: -15rem;
  }

  #container {
    margin: auto;
    height: 400px;
    top: 0;
    bottom: 0;
    background-color: white;

    filter: url(#threshold) blur(0.6px);
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

  .divider {
    width: 1rem;
    height: 11rem;
    border-radius: 1.25rem;
    background: radial-gradient(
      50% 50% at 49.99% 50%,
      #e6e6e6 0%,
      #c6c6c6 3%,
      #9c9c9c 7%,
      #777 12%,
      #565656 18%,
      #3b3b3b 24%,
      #252525 31%,
      #141414 38%,
      #080808 48%,
      #010101 62%,
      #000 100%
    );
    margin: 0 2rem;
    background-blend-mode: color-dodge;
  }

  .cta {
    background: linear-gradient(115deg, #3d7fff 34.33%, #49f9ea 97.28%);
  }

  #text1,
  #text2 {
    position: absolute;
    margin-left: 1rem;
  }
</style>
