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
		class={`navLink hover:cursor-pointer flex flex-col text-sm sm:text-base h-full`}
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
			<span class={`bg-white inline-block h-[2px] line`} />
		{:else}
			<span class="w-full bg-transparent h-[2px]" />
		{/if}
	</div>
</div>
