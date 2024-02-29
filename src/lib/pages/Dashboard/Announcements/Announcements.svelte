<script lang="ts">
	import Box from '$lib/components/Box/Box.svelte';
	import AnnouncementCard from './AnnouncementCard.svelte';
</script>

<Box bgColor="bg-[#151719]" height="!h-[398px]" width="w-full" classes="p-6">
	<p class="text-xl font-semibold text-[#EFEFEF]">Announcements</p>
	<div class="scrollbarStyle mt-6 h-[90%] w-full overflow-y-auto overflow-x-hidden pr-4">
		<div class="flex w-full flex-col items-start justify-start gap-y-3">
			<AnnouncementCard />
			<AnnouncementCard />
			<AnnouncementCard />
			<AnnouncementCard />
		</div>
	</div>
</Box>

<style lang="postcss">
	.scrollbarStyle::-webkit-scrollbar-track {
		background: #151719 !important;
		width: 1px !important;
	}

	.scrollbarStyle::-webkit-scrollbar-thumb {
		background: #515361 !important;
		width: 1px !important;
	}

	.scrollbarStyle::-webkit-scrollbar {
		width: 0.25rem !important;
		height: 0.25rem !important;
	}
</style>
