<script lang="ts">
	import ComparablePropertiesIcon from '$lib/assets/svg/ComparablePropertiesIcon.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import ComparableCard from './ComparableCard.svelte';
</script>

<div class="bg-[#151719] rounded-[20px] w-full h-full p-8 flex flex-col">
	<div class="flex items-center gap-x-2">
		<ComparablePropertiesIcon />
		<p class="text-[#FFF] font-semibold text-[24px]">Comparable Properties</p>
	</div>
	<div class="w-full flex justify-start">
		<Slider length={10} classes="gap-x-8 w-[88vw]">
			<ComparableCard />
		</Slider>
	</div>
</div>
