<script lang="ts">
	import './NavLink.css';
	$: showLine = false;
	export let label: string;
	export let to: string | undefined = undefined;
	export let classes: string | undefined = undefined;
	export let onClick: (() => void) | undefined = undefined;
</script>

<div class={classes}>
	<!-- svelte-ignore a11y-interactive-supports-focus -->
	<div
		class={`navLink flex h-full flex-col text-sm hover:cursor-pointer sm:text-base`}
		on:mouseenter={() => (showLine = true)}
		on:mouseleave={() => (showLine = false)}
		role="link"
	>
		{#if to}
			<a href={to}>{label}</a>
		{:else}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<p on:keydown={onClick} on:click={onClick}>{label}</p>
		{/if}
		{#if showLine}
			<span class={`line inline-block h-[2px] bg-white`} />
		{:else}
			<span class="h-[2px] w-full bg-transparent" />
		{/if}
	</div>
</div>
