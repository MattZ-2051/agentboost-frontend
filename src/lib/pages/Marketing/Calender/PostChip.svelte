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
				gridColNum > 5 || gridColNum === 0 ? 'bottom-0 right-[9.5rem]' : 'left-[9.5rem]'
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
		class="relative z-0 inline-flex h-7 w-[137px] items-center justify-center gap-2 rounded bg-[#0085FF] bg-opacity-10 px-2 py-1 hover:bg-[#48E8ED]"
		on:click={() => (showPopup = !showPopup)}
	>
		<img class="h-5 w-5 rounded-full" src={facebookIcon} alt="" />
		<img class="h-5 w-5 rounded-full" src={instagramIcon} alt="" />
		<img class="h-5 w-5 rounded-full" src={xIcon} alt="" />
		<div class="font-['Inter'] text-sm font-medium text-[#0085FF]">12PM</div>
	</div>
</div>
