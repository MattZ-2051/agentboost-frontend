<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	export let width: string;
</script>

<ProgressRadial
	value={undefined}
	stroke={60}
	{width}
	meter={'stroke-primary-500'}
	font={0}
	track="stroke-[#272B30]"
/>
