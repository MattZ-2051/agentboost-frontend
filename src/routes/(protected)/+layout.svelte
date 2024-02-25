<script>
	import AppShell from '$lib/layout/AppShell/AppShell.svelte';
	import AppHeader from '$lib/layout/Header/AppHeader/AppHeader.svelte';
</script>

<AppHeader />
<AppShell>
	<slot />
</AppShell>
