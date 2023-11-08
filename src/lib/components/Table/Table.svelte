<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	export let sourceData: {
		head: string;
		position: number;
		name: string;
		attribute: string;
	}[];

	const tableData: TableSource = {
		head: sourceData.map((data) => data.head),
		body: tableMapperValues(sourceData, ['name', 'attribute'])
	};
</script>

<Table source={tableData} />
