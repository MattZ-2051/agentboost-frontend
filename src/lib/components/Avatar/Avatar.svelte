<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let width: string | undefined = undefined;
</script>

<Avatar
	src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
	width={`${width ? width : 'w-12'}`}
	rounded="rounded-full"
/>
