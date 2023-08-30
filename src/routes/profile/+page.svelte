<script lang="ts">
  import Avatar from '$lib/components/Avatar/Avatar.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import { updateUserProfileFx, $user as user } from '$store/user';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let areaOfExpertise = '';
  let brandDescription = '';

  onMount(() => {
    if (!$user) {
      goto('/signup');
    }
  });

  const handleUserUpdate = () => {
    updateUserProfileFx({
      email: $user ? $user.email : '',
      areaOfExpertise,
      brandDescription,
    });
  };
</script>

{#if $user}
  <div class="mt-12 w-full flex justify-center items-center">
    <div class="flex flex-col justify-center items-center w-full">
      <Avatar width="w-[100px]" />
      <h1 class="text-3xl mt-4 tracking-wide">My Profile</h1>
      <div class="w-1/2 mt-12">
        <div class="mb-4">
          <Input
            label="Email"
            placeholder="Email"
            bind:value={$user.email}
            type="text"
          />
        </div>
        <div class="mb-4">
          <Input
            label="Area of Expertise"
            placeholder="Expertise"
            bind:value={areaOfExpertise}
            type="text"
          />
        </div>
        <div>
          <Input
            label="Brand Description"
            placeholder="Brand Description"
            bind:value={brandDescription}
            type="textarea"
            rows={5}
          />
        </div>
        <div class="mt-12">
          <Button
            label="Update"
            variant="variant-filled-secondary"
            onClick={handleUserUpdate}
            classes="w-full"
          />
        </div>
      </div>
    </div>
  </div>
{/if}
