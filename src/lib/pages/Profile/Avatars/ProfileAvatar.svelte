<script lang="ts">
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
	import { $user as user } from '$store/user';

	export let src: string = '';
	const initials =
		$user?.fullName &&
		$user.fullName
			.split(' ')
			.map((item) => item[0])
			.join('');

	export let width: string = 'w-10';
</script>

{#if $user}
	<Avatar src={src?.length > 0 ? src : $user.profileImg} {width} {initials} />
{/if}
