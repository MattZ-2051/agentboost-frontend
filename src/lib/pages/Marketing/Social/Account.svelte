<script lang="ts">
	import facebookIcon from '$lib/assets/images/Social/facebook-icon.png';
	import instagramIcon from '$lib/assets/images/Social/instagram-icon.png';
	import xIcon from '$lib/assets/images/Social/x-icon.png';
	import type { SocialTypes } from '$types/components';

	export let socialType: SocialTypes;

	const icon =
		socialType === 'x' ? xIcon : socialType === 'instagram' ? instagramIcon : facebookIcon;
</script>

<div
	class="max-w-[224px] w-full h-[79px] bg-[#1E2225] border border-white border-opacity-10 rounded-[10px] p-4 flex flex-col items-center justify-center"
>
	<div class="flex gap-x-4">
		<div class="relative">
			<img class="w-[47px] h-[47px] rounded-full" src="https://via.placeholder.com/47x47" alt="" />
			<img alt="" src={icon} class="rounded-full w-6 h-6 absolute bottom-0 -right-2" />
		</div>
		<div class="text-sm">
			<p class="mb-1">@jacob.jones</p>
			<p class="font-medium text-[#6F767E]">Followers 2,200</p>
		</div>
	</div>
</div>
