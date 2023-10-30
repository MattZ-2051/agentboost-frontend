<script lang="ts">
  import './Button.css';
  import type { ButtonVariant } from '$types/components';

  export let label: string;
  export let classes: string | undefined = undefined;
  export let variant: ButtonVariant | undefined = undefined;
  export let onClick: (() => void) | undefined = undefined;

  let styles: string;
  if (variant === 'landing-header') {
    styles = 'landingButton';
  } else {
    styles = 'btn';
  }
</script>

<button
  type="button"
  class={`${styles} ${variant} ${classes} hover:cursor-pointer`}
  on:click={onClick}
>
  {#if variant === 'landing-header'}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 17.5002H3.5M6.5 12.0002H2M9 6.50024H4M17 3.00024L10.4036 12.2353C10.1116 12.644 9.96562 12.8484 9.97194 13.0188C9.97744 13.1671 10.0486 13.3054 10.1661 13.3961C10.3011 13.5002 10.5522 13.5002 11.0546 13.5002H16L15 21.0002L21.5964 11.7652C21.8884 11.3565 22.0344 11.1521 22.0281 10.9817C22.0226 10.8334 21.9514 10.6951 21.8339 10.6044C21.6989 10.5002 21.4478 10.5002 20.9454 10.5002H16L17 3.00024Z"
        stroke="white"
        stroke-width="1.80625"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  {/if}
  {label}</button
>

<style lang="postcss">
  .landingButton {
    border-radius: 3.125rem;
    border: 1px solid rgba(255, 255, 255, 0.51);
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0px 1.20417px 14.45px 0px rgba(195, 216, 231, 0.08);
    backdrop-filter: blur(3.612499952316284px);
    display: inline-flex;
    height: 3.25rem;
    width: 11rem;
    padding: 0.875rem 1.5rem;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    flex-shrink: 0;
    display: inline-flex;
  }
</style>
