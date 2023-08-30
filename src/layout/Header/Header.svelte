<script lang="ts">
  import NavLink from '$lib/components/NavLink/NavLink.svelte';
  import { AppBar } from '@skeletonlabs/skeleton';
  import { drawerStore } from '@skeletonlabs/skeleton';
  import agentBoostLogo from '$lib/assets/images/agentBoostLogoEmptyWhite.png';
  import { logoutFx, $user as user } from '$store/user';
  function drawerOpen(): void {
    drawerStore.open({});
  }
</script>

<AppBar
  slotDefault="place-self-center"
  gridColumns="grid-cols-3"
  slotTrail="place-content-end"
  padding="px-20 py-4"
>
  <svelte:fragment slot="lead">
    <a href="/home">
      <img
        src={agentBoostLogo}
        class="w-[70px] h-[40px] hidden lg:block"
        alt="agentboost logo"
      />
    </a>
    <div class="flex items-center">
      <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
        <span>
          <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
            <rect width="100" height="20" />
            <rect y="30" width="100" height="20" />
            <rect y="60" width="100" height="20" />
          </svg>
        </span>
      </button>
    </div>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#if $user}
      <NavLink
        label="Signout"
        classes=""
        onClick={() => logoutFx({ userId: $user ? $user.id : '0' })}
      />
    {:else}
      <NavLink to="/login" label="Login" classes="" />
      <NavLink to="/signup" label="Signup" classes="" />
    {/if}
  </svelte:fragment>
</AppBar>
