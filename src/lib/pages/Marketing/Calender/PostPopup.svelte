<script lang="ts">
	import facebookIcon from '$lib/assets/images/Social/facebook-icon.png';
	import instagramIcon from '$lib/assets/images/Social/instagram-icon.png';
	import xIcon from '$lib/assets/images/Social/x-icon.png';
	import ClockIcon from '$lib/assets/svg/ClockIcon.svelte';

	export let classes: string | undefined = undefined;
</script>

<div
	class={`${classes} text-[#CFD0D5] w-[451px] h-full min-h-[296px] bg-[#1E2225] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] shadow border border-white border-opacity-10 py-3 px-6 overflow-hidden`}
>
	<div class="flex w-full justify-between">
		<div class="flex gap-x-2">
			<img class="w-6 h-6 rounded-full" src={facebookIcon} />
			<img class="w-6 h-6 rounded-full" src={instagramIcon} />
			<img class="w-6 h-6 rounded-full" src={xIcon} />
		</div>
		<div class="flex gap-x-2 text-base font-medium leading-[21px]">
			<ClockIcon />
			<p>12:00 PM</p>
		</div>
	</div>
	<div class="w-full h-[0px] opacity-10 border border-white my-2" />
	<div class="grid grid-cols-2 w-full">
		<p class="text-sm font-normal text-left leading-snug">
			Step into tranquility with this charming home in Boise, ID. Experience the beauty of nature in
			your own private atrium. 🏡🌿 #BoiseRealEstate #HomeSweetHome #AtriumLiving #NatureLovers
			#SunshineandGreenery
		</p>
		<div class="flex w-full h-full justify-center items-center h-full">
			<img class="w-[170px] h-[170px] rounded-[10px]" src="https://via.placeholder.com/170x170" />
		</div>
	</div>
	<div class="w-full h-[0px] opacity-10 border border-white my-2" />
	<div class="flex justify-between items-center">
		<p class="text-[#48E8ED] text-base font-medium leading-[21px] hover:cursor-pointer">Approve</p>
		<div class="text-white flex gap-x-4">
			<p class="text-base font-medium leading-[21px] hover:cursor-pointer">Delete</p>
			<p class="text-base font-medium leading-[21px] hover:cursor-pointer">Edit</p>
		</div>
	</div>
</div>
