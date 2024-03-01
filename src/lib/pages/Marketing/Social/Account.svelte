<script lang="ts">
	import facebookIcon from '$lib/assets/images/Social/facebook-icon.png';
	import instagramIcon from '$lib/assets/images/Social/instagram-icon.png';
	import xIcon from '$lib/assets/images/Social/x-icon.png';
	import Box from '$lib/components/Box/Box.svelte';
	import type { SocialTypes } from './types';

	export let socialType: SocialTypes;

	const icon =
		socialType === 'x' ? xIcon : socialType === 'instagram' ? instagramIcon : facebookIcon;
</script>

<Box
	bgColor="bg-[#1E2225]"
	width="w-full"
	height="h-[79px]"
	classes="p-4 flex flex-col items-center justify-center"
>
	<div class="flex gap-x-4">
		<div class="relative">
			<img class="h-[47px] w-[47px] rounded-full" src="https://via.placeholder.com/47x47" alt="" />
			<img alt="" src={icon} class="absolute -right-2 bottom-0 h-6 w-6 rounded-full" />
		</div>
		<div class="text-sm">
			<p class="mb-1">@jacob.jones</p>
			<p class="font-medium text-[#6F767E]">Followers 2,200</p>
		</div>
	</div>
</Box>
