<script lang="ts">
	import GmcIcon from '$lib/assets/svg/GmcIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Gmc from '$lib/pages/Shared/Gmc/Gmc.svelte';
	import { $user as user } from '$store/user';
</script>

<div
	class="mb-12 flex h-full w-full max-w-[95vw] flex-col overflow-auto rounded-[20px] bg-[#151719] p-6"
>
	<div class="flex w-full items-center justify-between">
		<div class="flex items-center gap-x-2">
			<GmcIcon />
			<p class="text-[24px] font-semibold text-[#fff]">Generate marketing content</p>
		</div>
		<Button
			label="Generate new content"
			variant="variant-app-primary"
			bg="bg-[#151719]"
			classes="!w-[210px] !h-12"
		/>
	</div>
	<div class="mt-[22px]">
		<Gmc gmcs={[]} />
	</div>
</div>
