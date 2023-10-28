<script>
  import Button from '$lib/components/Button/Button.svelte';
</script>

<div class="w-full p-6 flex items-center absolute top-0 z-30">
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
      <button class="landingButton">Get Started</button>
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

  .landingButton {
    border-radius: 3.125rem;
    border: 1px solid rgba(255, 255, 255, 0.51);
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0px 1.20417px 14.45px 0px rgba(195, 216, 231, 0.08);
    backdrop-filter: blur(3.612499952316284px);
    display: inline-flex;
    height: 3.25rem;
    padding: 0.875rem 1.5rem;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    flex-shrink: 0;
  }
</style>
