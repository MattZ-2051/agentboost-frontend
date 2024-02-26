<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let width: string | undefined = undefined;

	export let src: string | undefined;
	export let initials: string | undefined;
</script>

<Avatar {src} width={`${width ? width : 'w-12'}`} rounded="rounded-full" {initials} />
