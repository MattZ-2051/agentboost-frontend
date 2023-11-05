<script lang="ts">
  import LogoGradient from '$lib/assets/svg/LogoGradient.svelte';
  import Facebook from '$lib/assets/svg/Facebook.svelte';
  import InstagramFooter from '$lib/assets/svg/InstagramFooter.svelte';
  import Linkedin from '$lib/assets/svg/Linkedin.svelte';
</script>

<div
  class="w-full text-lg font-light py-12 px-20 items-start z-30 sticky flex justify-between text-[#9EA4C6] gap-x-10"
>
  <div class="flex flex-col">
    <LogoGradient />
    <p class="leading-[18px] whitespace-nowrap mt-4">
      Redefining real estate success.
    </p>
  </div>
  <div class="text-left leading-normal flex flex-col">
    <p class="mb-4">Support</p>
    <p>Contact</p>
  </div>
  <div class="text-left leading-normal flex flex-col">
    <p class="mb-4">Partners</p>
    <p>Partners Program</p>
  </div>
  <div class="text-left leading-normal flex flex-col gap-y-4">
    <p>Legal</p>
    <p>Terms</p>
    <p>Privacy Policy</p>
    <p>Refund Policy</p>
  </div>
  <div class="text-left leading-normal flex flex-col">
    <p class="mb-4">Social</p>
    <div class="flex gap-x-4">
      <Facebook />
      <Linkedin />
      <InstagramFooter />
    </div>
  </div>
</div>
<div class="flex flex-col items-center justify-center w-full">
  <div class="post-title-line" />
  <p class="opacity-80 p-5 text-[#9EA4C6] text-lg font-light leading-normal">
    © 2023 Agent Boost AI. All rights reserved.
  </p>
</div>

<style lang="postcss">
  .post-title-line {
    opacity: 0.6;
    width: 75rem;
    height: 0.0625rem;
    flex-shrink: 0;
    background: linear-gradient(
      90deg,
      rgba(71, 71, 65, 0) 0%,
      #474741 50%,
      rgba(71, 71, 65, 0) 100%
    );
  }
</style>
