<script lang="ts">
  export let label: string;
  export let value: string | number | Date;
  export let type: HTMLInputElement['type'];
  export let placeholder: string;
  export let disabled = false;
  export let rows = 4;
  export let name: string | undefined = undefined;
</script>

<label class="label">
  <span class="ml-2">{label}</span>
  {#if type === 'text'}
    <input
      class="input w-full"
      type="text"
      {name}
      {placeholder}
      bind:value
      {disabled}
    />
  {/if}
  {#if type === 'email'}
    <input
      class="input w-full"
      type="email"
      {name}
      {placeholder}
      bind:value
      {disabled}
    />
  {/if}
  {#if type === 'date'}
    <input
      class="input w-full"
      type="date"
      {placeholder}
      {name}
      bind:value
      {disabled}
    />
  {/if}
  {#if type === 'password'}
    <input
      class="input w-full"
      type="password"
      {placeholder}
      {name}
      bind:value
      {disabled}
    />
  {/if}
  {#if type === 'textarea'}
    <textarea
      class="textarea"
      {rows}
      {placeholder}
      bind:value
      {disabled}
      {name}
    />
  {/if}
</label>
