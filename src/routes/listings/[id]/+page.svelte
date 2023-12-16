<script lang="ts">
	import ComparableProperties from '$lib/pages/Listings/ComparableProperties/ComparableProperties.svelte';
	import Insights from '$lib/pages/Listings/Insights/Insights.svelte';
	import PropertyInfo from '$lib/pages/Listings/PropertyInfo/PropertyInfo.svelte';
</script>

<div>
	<div>
		<PropertyInfo />
	</div>
	<div class="mt-16">
		<ComparableProperties />
	</div>
	<div class="mt-16">
		<Insights />
	</div>
</div>
