<script lang="ts">
	import Box from '$lib/components/Box/Box.svelte';
	import AnnouncementCard from './AnnouncementCard.svelte';
</script>

<Box bgColor="bg-[#151719]" height="!h-[398px]" width="w-full" classes="p-6">
	<p class="text-[#EFEFEF] text-xl font-semibold">Announcements</p>
	<div class="mt-6 scrollbarStyle pr-4 w-full h-[90%] overflow-y-auto overflow-x-hidden">
		<div class="flex flex-col items-start justify-start w-full gap-y-3">
			<AnnouncementCard />
			<AnnouncementCard />
			<AnnouncementCard />
			<AnnouncementCard />
		</div>
	</div>
</Box>

<style lang="postcss">
	.announcementCard {
	}

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
