<script lang="ts">
	import GradientBorder from './GradientBorder.svelte';
	import UserIcon from './UserIcon.svelte';
</script>

<div class="relative">
	<div class="absolute top-[-60%] right-[-60%]">
		<GradientBorder />
	</div>
	<div class="flex justify-center items-center">
		<UserIcon />
	</div>
</div>
