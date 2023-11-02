<script lang="ts">
  import cityVector from '$lib/assets/images/vector.png';
  import Button from '$lib/components/Button/Button.svelte';
  import LandingBezier from '$lib/assets/svg/LandingBezier.svelte';
  import landingScreenshot1 from '$lib/assets/images/landingAppScreenshot1.png';
  import Instagram from '$lib/assets/svg/Instagram.svelte';
  import Twitter from '$lib/assets/svg/Twitter.svelte';
  // const handleShare = () => {
  //   FB.ui(
  //     {
  //       method: 'share',
  //       href: 'https://developers.facebook.com/docs/',
  //     },
  //     function (response) {},
  //   );
  // };

  const section2ButtonStyle =
    '!w-[8rem] !text-opacity-40 !text-white hover:!text-secondary-500 hover:!bg-white hover:!bg-opacity-[0.06]';
</script>

<div class="bg-tertiary-500 relative w-full h-full p-12">
  <div class="elipse z-10" />
  <section
    class="w-full flex flex-col items-center justify-center z-20 text-white"
  >
    <div>
      <p class="text-center text-7xl max-w-3xl">
        Your real estate business just became <span class="textGradient"
          >10x faster</span
        >
      </p>
    </div>
    <div class="mt-6 text-center opacity-40 text-lg">
      <p>Agent Boost AI keeps you consistent, makes your life easier,</p>
      <p>and guides you to level up your realtor game.</p>
    </div>
    <img src={cityVector} alt="" class="w-full h-[400px]" />
  </section>
  <section class="w-full flex flex-col items-center justify-center mt-40">
    <p class="text-5xl text-center text-white">
      Features that <span class="textGradient">empower you</span>
    </p>
    <div class="text-center mt-4 text-lg opacity-40 text-white mb-12">
      <p>Explore the tools that put you in the real estate fast lane.</p>
      <p>Join us and revolutionize your real estate game!</p>
    </div>
    <div
      class="w-[1188px] h-[643px] bg-white bg-opacity-0 rounded-[19px] shadow border border-white border-opacity-40"
    >
      <video controls width="100%" />
    </div>
    <div
      class="w-[1188px] mt-12 textGradient text-[2rem] justify-evenly flex gap-x-12 items-center leading-9"
    >
      <p class="whitespace-nowrap">140 million+ <br /> property records</p>
      <div class="divider" />
      <p>AI driven Property insights</p>
      <div class="divider" />
      <p>Automated Marketing</p>
      <div class="divider" />
      <div class="flex justify-end">
        <p class="">Automated Marketing</p>
      </div>
    </div>
  </section>
  <section class="mt-40 text-white">
    <p class="text-6xl text-center">
      The <span class="textGradient"> Power of AI </span> in the real <br /> estate
      business
    </p>
    <p class="opacity-40 mt-6 text-center text-lg">
      See our feature packed app that’s going to be your best friend.
    </p>
    <div class="w-full flex flex-col items-center justify-center mt-16">
      <div
        class="p-[.25rem] bg-zinc-950 bg-opacity-0 rounded-[40px] border border-white border-opacity-10"
      >
        <Button
          variant="variant-filled-tertiary"
          label="Marketing"
          classes={section2ButtonStyle}
        />
        <Button
          variant="variant-filled-tertiary"
          label="Insights"
          classes={section2ButtonStyle}
        />
        <Button
          variant="variant-filled-tertiary"
          label="Listings"
          classes={section2ButtonStyle}
        />
        <Button
          variant="variant-filled-tertiary"
          label="Buyers"
          classes={section2ButtonStyle}
        />
      </div>
      <div
        class="w-[1188px] h-[490px] border-opacity-40 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] mt-16 p-10 flex flex-col items-center"
      >
        <div class="flex items-center">
          <div class="mr-4">
            <LandingBezier />
          </div>
          <p class="text-white text-[32px] tracking-tight">
            Fully automated social media
          </p>
        </div>
        <p class="text-center mt-8 opacity-40 text-lg">
          See our feature packed app that’s going to be your best friend.
        </p>
        <div class="mt-6">
          <img src={landingScreenshot1} alt="" />
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center mt-6">
      <div class="flex justify-between w-[1188px]">
        <div
          class="w-[576px] h-[598px] border-opacity-30 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-10"
        >
          <div class="flex items-center">
            <div class="mr-4">
              <LandingBezier />
            </div>
            <p class="text-white text-[32px] tracking-tight">
              Automated Campaigns
            </p>
          </div>
          <p class="text-left mt-4 opacity-40 text-lg">
            See our feature packed app that’s <br /> going to be your best friend.
          </p>
          <div class="mt-16">
            <img
              class="w-[487px] h-[335px] mix-blend-lighten rounded-[18px]"
              src="https://via.placeholder.com/487x335"
            />
          </div>
        </div>
        <div
          class="w-[576px] h-[598px] border-opacity-30 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-10"
        >
          <div class="flex items-center">
            <div class="mr-4">
              <LandingBezier />
            </div>
            <p class="text-white text-[32px] tracking-tight">
              Advanced analytics and ai generated suggestions
            </p>
          </div>
          <p class="text-left mt-4 opacity-40 text-lg">
            See our feature packed app that’s <br /> going to be your best friend.
          </p>
          <div class="mt-12">
            <img
              class="w-[487px] h-[335px] mix-blend-lighten rounded-[18px]"
              src="https://via.placeholder.com/487x335"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-40 text-white">
    <div class="w-full flex justify-center flex-col items-center z-50">
      <p class="text-neutral-100 text-center text-6xl leading-[75px]">
        Message from the founders
      </p>
      <div
        class="w-[1188px] h-[302px] border-opacity-30 bg-gradient-to-br from-black to-black rounded-[18px] shadow border border-white backdrop-blur-[14.35px] p-8 mt-12"
      >
        <p class="text-slate-300 text-2xl font-light leading-9 mb-4">
          “At Agent Boost, our mission is to craft cutting-edge tools
          specifically tailored for realtors like you. We recognize that
          optimizing your efficiency is pivotal to your business success.
        </p>
        <p class="text-slate-300 text-2xl font-light leading-9">
          Our platform will remain in a state of constant evolution, perpetually
          harnessing the latest and most thrilling advancements in technology
          and AI to propel you towards greater speed and effectiveness as an
          agent. Our journey is just beginning.”
        </p>
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
              class="w-[133px] h-[155px] rounded-[17px]"
              src="https://via.placeholder.com/133x155"
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
</div>

<style lang="postcss">
  .elipse {
    width: 100%;
    height: 15rem;
    flex-shrink: 0;
    border-radius: 100%;
    background: linear-gradient(74deg, #3e80ff 32.14%, #49f9ea 87.5%);
    filter: blur(117px);
  }

  .textGradient {
    background: linear-gradient(93deg, #3f8bfd 39.11%, #49f9ea 92.48%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .divider {
    width: 0.07525rem;
    height: 4.66613rem;
    border-radius: 1.25rem;
    opacity: 0.4;
    background: var(
      --Secondary,
      linear-gradient(80deg, #a4daff 19.69%, #e3f4ff 80.46%)
    );
  }
</style>
