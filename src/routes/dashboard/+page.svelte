<script lang="ts">
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
</script>

<div class="">
	<div class="w-full">
		<Tabs
			items={[
				{
					label: 'tab1',
					name: 'tab1'
				},
				{
					label: 'tab2',
					name: 'tab2'
				}
			]}
		/>
	</div>
</div>
