<script lang="ts">
	import GradientBorder from './GradientBorder.svelte';
	import UserIcon from './UserIcon.svelte';
</script>

<div class="relative">
	<div class="absolute right-[-60%] top-[-60%]">
		<GradientBorder />
	</div>
	<div class="flex items-center justify-center">
		<UserIcon />
	</div>
</div>
