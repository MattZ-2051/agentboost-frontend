<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<div class="h-full flex justify-center flex-col items-center mt-12">
  <div class="h-screen w-1/4">
    <h1 class="text-center text-5xl">AgentBoost AI</h1>
    <div class="grid grid-cols-2 gap-x-3 mt-8">
      <Button
        label="Start Free Trial"
        variant="variant-filled-secondary"
        onClick={async () => await goto('/signup')}
        classes="w-full p-4"
      />
      <Button
        label="How It Works"
        variant="variant-filled"
        onClick={() => {}}
        classes="w-full"
      />
    </div>
  </div>
</div>
