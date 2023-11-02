<script lang="ts">
  import LogoWhite from '$lib/assets/svg/LogoWhite.svelte';
  import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="w-full p-6 px-20 flex items-center z-30 sticky text-white">
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

<style>
  .textLink {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: normal;
  }
</style>
