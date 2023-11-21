<script lang="ts">
	import ListingCard from '$lib/components/Cards/ListingCard.svelte';
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
	<div class="mt-12">
		<ListingCard address="10044  W Springdale Ct" status="Active" />
	</div>
</div>
