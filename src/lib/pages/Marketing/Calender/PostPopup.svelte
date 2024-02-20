<script lang="ts">
	import facebookIcon from '$lib/assets/images/Social/facebook-icon.png';
	import instagramIcon from '$lib/assets/images/Social/instagram-icon.png';
	import xIcon from '$lib/assets/images/Social/x-icon.png';
	import ClockIcon from '$lib/assets/svg/ClockIcon.svelte';

	export let classes: string | undefined = undefined;
</script>

<div
	class={`${classes} h-full min-h-[296px] w-[451px] overflow-hidden rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] border border-white border-opacity-10 bg-[#1E2225] px-6 py-3 text-[#CFD0D5] shadow`}
>
	<div class="flex w-full justify-between">
		<div class="flex gap-x-2">
			<img class="h-6 w-6 rounded-full" src={facebookIcon} />
			<img class="h-6 w-6 rounded-full" src={instagramIcon} />
			<img class="h-6 w-6 rounded-full" src={xIcon} />
		</div>
		<div class="flex gap-x-2 text-base font-medium leading-[21px]">
			<ClockIcon />
			<p>12:00 PM</p>
		</div>
	</div>
	<div class="my-2 h-[0px] w-full border border-white opacity-10" />
	<div class="grid w-full grid-cols-2">
		<p class="text-left text-sm font-normal leading-snug">
			Step into tranquility with this charming home in Boise, ID. Experience the beauty of nature in
			your own private atrium. 🏡🌿 #BoiseRealEstate #HomeSweetHome #AtriumLiving #NatureLovers
			#SunshineandGreenery
		</p>
		<div class="flex h-full h-full w-full items-center justify-center">
			<img class="h-[170px] w-[170px] rounded-[10px]" src="https://via.placeholder.com/170x170" />
		</div>
	</div>
	<div class="my-2 h-[0px] w-full border border-white opacity-10" />
	<div class="flex items-center justify-between">
		<p class="text-base font-medium leading-[21px] text-[#48E8ED] hover:cursor-pointer">Approve</p>
		<div class="flex gap-x-4 text-white">
			<p class="text-base font-medium leading-[21px] hover:cursor-pointer">Delete</p>
			<p class="text-base font-medium leading-[21px] hover:cursor-pointer">Edit</p>
		</div>
	</div>
</div>
