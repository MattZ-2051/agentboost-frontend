<script lang="ts">
	import facebookIcon from '$lib/assets/images/Social/facebook-icon.png';
	import instagramIcon from '$lib/assets/images/Social/instagram-icon.png';
	import xIcon from '$lib/assets/images/Social/x-icon.png';
	import PostPopup from './PostPopup.svelte';

	$: showPopup = false;

	export let gridColNum: number;
</script>

<div class="relative">
	{#if showPopup}
		<div
			class={`${
				gridColNum > 5 || gridColNum === 0 ? 'right-[9.5rem] bottom-0' : 'left-[9.5rem]'
			} absolute bottom-0 z-50`}
		>
			<PostPopup
				classes={`${
					gridColNum > 5 || gridColNum === 0
						? 'rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] !rounded-br-[0px]'
						: ''
				}`}
			/>
		</div>
	{/if}
	<div
		class="w-[137px] h-7 px-2 py-1 bg-[#0085FF] bg-opacity-10 rounded justify-center items-center gap-2 inline-flex hover:bg-[#48E8ED] relative z-0"
		on:click={() => (showPopup = !showPopup)}
	>
		<img class="w-5 h-5 rounded-full" src={facebookIcon} alt="" />
		<img class="w-5 h-5 rounded-full" src={instagramIcon} alt="" />
		<img class="w-5 h-5 rounded-full" src={xIcon} alt="" />
		<div class="text-[#0085FF] text-sm font-medium font-['Inter']">12PM</div>
	</div>
</div>
