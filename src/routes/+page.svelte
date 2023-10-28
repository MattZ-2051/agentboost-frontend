<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import { goto } from '$app/navigation';
  import LandingHeader from '$lib/layout/Header/LandingHeader/LandingHeader.svelte';
  // const handleShare = () => {
  //   FB.ui(
  //     {
  //       method: 'share',
  //       href: 'https://developers.facebook.com/docs/',
  //     },
  //     function (response) {},
  //   );
  // };
</script>

<div class="bg-tertiary-500 h-screen relative">
  <div class="elipse absolute -top-64" />
  <LandingHeader />
</div>

<style lang="postcss">
  .elipse {
    width: 100%;
    height: 25rem;
    flex-shrink: 0;
    border-radius: 179.625rem;
    background: linear-gradient(74deg, #3e80ff 32.14%, #49f9ea 87.5%);
    filter: blur(137px);
  }
</style>
