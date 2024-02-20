<script lang="ts">
	import ComparablePropertiesIcon from '$lib/assets/svg/ComparablePropertiesIcon.svelte';
	import Slider from '$lib/components/Slider/Slider.svelte';
	import ComparableCard from './ComparableCard.svelte';
</script>

<div class="flex h-full w-full flex-col rounded-[20px] bg-[#151719] p-8">
	<div class="flex items-center gap-x-2">
		<ComparablePropertiesIcon />
		<p class="text-[24px] font-semibold text-[#FFF]">Comparable Properties</p>
	</div>
	<div class="flex w-full justify-start">
		<Slider length={10} classes="gap-x-8 w-[88vw]">
			<ComparableCard />
		</Slider>
	</div>
</div>
