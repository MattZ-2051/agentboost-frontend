<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="w-full p-6 flex items-center z-30 absolute top-0 text-white">
  <div class="grid grid-cols-3 w-full">
    <div class="flex items-center">Logo</div>
    <div
      class="flex gap-x-14 textLink hover:text-white hover:cursor-pointer items-center justify-center"
    >
      <p>Features</p>
      <p>Platform</p>
      <p>About</p>
    </div>
    <div class="flex items-center justify-end gap-x-6">
      <p class="textLink !font-semibold">Login</p>
      <Button label="Get Started" variant="landing-header" />
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
