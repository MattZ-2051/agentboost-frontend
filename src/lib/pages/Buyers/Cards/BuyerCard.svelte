<script lang="ts">
	import BuyerProfileIcon from '$lib/assets/svg/BuyerProfileIcon.svelte';
	import BuyersIcon from '$lib/assets/svg/BuyersIcon.svelte';
	import ShareIcon from '$lib/assets/svg/ShareIcon.svelte';
	import TrashIcon from '$lib/assets/svg/TrashIcon.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Card from '$lib/components/Card/Card.svelte';

	const buyers = [
		'10044 W Springdale Ct',
		'692 W Crimson Loop',
		'692 W Crimson Loop',
		'692 W Crimson Loop',
		'692 W Crimson Loop'
	];
</script>

<Card width="w-[402px]" height="h-[320px]" classes="!p-4">
	<div>
		<div class="flex w-full items-center justify-between">
			<div class="flex items-center gap-x-4">
				<div class="flex h-11 w-11 items-center justify-center rounded-full bg-[#2F3336]">
					<BuyerProfileIcon />
				</div>
				<p class="text-lg font-semibold text-white">Buyer name here</p>
			</div>
			<div class="flex items-center gap-x-4">
				<ShareIcon iconSize={16} />
				<TrashIcon iconSize={16} />
			</div>
		</div>
		<div class="relative my-6 h-[128px] w-full rounded-[10px] bg-[#2E2F37] p-4 pr-3">
			<div class="scrollbarStyle h-full w-full overflow-y-scroll">
				<div class="relative flex gap-x-2">
					{#if buyers.length > 1}
						<div class="relative mt-3 flex flex-col">
							{#each Array.from({ length: buyers.length }) as _, i}
								<!-- <div class={`${i > 0 ? '-mt-3' : ''}`}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="52"
									viewBox="0 0 12 42"
									fill="none"
								>
									<path
										d="M11 1.5C11.2761 1.5 11.5 1.27614 11.5 1C11.5 0.723858 11.2761 0.5 11 0.5V1.5ZM1 1.5H11V0.5H1V1.5Z"
										fill="#515361"
									/>
									<path d="M1 1L0.999998 41" stroke="#515361" stroke-linecap="round" />
									<path
										d="M11 41.5C11.2761 41.5 11.5 41.2761 11.5 41C11.5 40.7239 11.2761 40.5 11 40.5V41.5ZM1 41.5H11V40.5H1V41.5Z"
										fill="#515361"
									/>
								</svg>
							</div> -->
								<div
									class={` h-[36px] w-3 border-t border-[#515361] ${
										i + 1 === buyers.length ? '' : 'border-l'
									}`}
								/>
							{/each}
						</div>
					{/if}
					<div class="ml-2 flex flex-col gap-y-4">
						{#each buyers as buyer, i}
							<div class="flex gap-x-2">
								<BuyersIcon iconSize={20} />
								<p class="text-sm font-medium text-[#C6C7CD]">{buyer}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="-mb-1 flex gap-x-6">
			<Button
				label="Add to buyer"
				bg="bg-[#171A1C]"
				variant="variant-app-primary"
				classes="!h-[48px]"
			/>
			<Button
				label="View buyer"
				bg="bg-[#171A1C]"
				variant="variant-app-primary"
				classes="!h-[48px]"
			/>
		</div>
	</div>
</Card>

<style lang="postcss">
	.scrollbarStyle::-webkit-scrollbar-track {
		background: #2e2f37 !important;
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
