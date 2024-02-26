<script lang="ts">
	import { goto } from '$app/navigation';
	import GrowthIndicatorIcon from '$lib/assets/svg/GrowthIndicatorIcon.svelte';
	import Box from '$lib/components/Box/Box.svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import Dropdown from '$lib/components/Dropdown/Dropdown.svelte';
	import RadioDropdown from '$lib/components/Dropdown/RadioDropdown.svelte';
	import ProgressRadial from '$lib/components/ProgressRadial/ProgressRadial.svelte';
	import type { User } from '$types/models';
	import Chart from '../Chart/Chart.svelte';

	$: showRadioContent = false;
	$: showSocialContent = false;
	$: showDateContent = false;

	export let user: User;

	const items = [
		'10165 W Burntwood Ct',
		'10165 W Burntwood Ct',
		'10165 W Burntwood Ct',
		'10165 W Burntwood Ct'
	];

	$: socialDropdownLabel = user.facebook
		? 'facebook'
		: user.instagram
			? 'instagram'
			: user.x
				? 'x'
				: 'No Accounts';
</script>

{#if socialDropdownLabel === 'No Accounts'}
	<div class="h-full w-full">
		<Box bgColor="bg-[#151719]" width="w-full" height="h-[623px]" classes="p-6 !col-span-2">
			<div class="flex h-full w-full flex-col items-center justify-center">
				<p class="pb-12 text-3xl font-semibold">Connect A Social Account</p>
				<Button
					label="Click Here to Get Started"
					bg="bg-[#151719]"
					variant="variant-app-primary"
					classes="!w-1/3 !h-16 !text-[18px]"
					onClick={() => goto('/marketing')}
				/>
			</div>
		</Box>
	</div>
{:else}
	<div class="grid h-full w-full grid-cols-2 gap-x-6">
		<Box bgColor="bg-[#151719]" width="w-full" height="h-full" classes="p-6">
			<div class="flex w-full items-center justify-between">
				<p class="title">Social media activity</p>
				<div class="flex gap-x-4">
					<Dropdown
						showContent={showDateContent}
						classes="bg-[#1E2225] w-[98px] h-[38px] px-2 py-[10px] !text-xs"
						label="Annually"
						iconSize={16}
					/>
					<Dropdown
						showContent={showSocialContent}
						classes="bg-[#1E2225] w-[123px] h-[38px] px-2 py-[10px] !text-xs"
						label={socialDropdownLabel}
						iconSize={16}
					>
						<div slot="content">
							{#if socialDropdownLabel !== 'No Accounts'}
								{#if user.instagram}
									<p>Instagram</p>
								{/if}
								{#if user.x}
									<p>X</p>
								{/if}
								{#if user.facebook}
									<p>Facebook</p>
								{/if}
							{/if}
						</div>
					</Dropdown>
				</div>
			</div>
			<div class="mt-6 flex items-baseline gap-x-3">
				<p class="title">12.5k</p>
				<div class="flex items-center gap-x-1">
					<GrowthIndicatorIcon />
					<p class="text-[10px] font-semibold text-primary-500">1.3%</p>
					<p class="text-[10px] font-light text-[#9291A5]">VS LAST YEAR</p>
				</div>
			</div>
			<div class="mt-10 flex w-full items-center justify-between gap-x-8">
				<Box
					bgColor="bg-[#151719]"
					width="w-full"
					height="h-[71px]"
					classes="p-3 flex justify-between items-center"
				>
					<div class="flex-col items-center justify-center">
						<div class="flex items-center gap-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#3E8AFD" />
							</svg>
							<p class="statTitle">Reach</p>
						</div>
						<p class="statValue">1k</p>
					</div>
					<ProgressRadial value={20} width="w-[40px]" color="stroke-[#3E8AFD]" />
				</Box>
				<Box
					bgColor="bg-[#151719]"
					width="w-full"
					height="h-[71px]"
					classes="p-3 flex justify-between items-center"
				>
					<div class="flex-col items-center justify-center">
						<div class="flex items-center gap-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#FD853A" />
							</svg>
							<p class="statTitle">Profile Views</p>
						</div>
						<p class="statValue">1k</p>
					</div>
					<ProgressRadial value={60} width="w-[40px]" color="stroke-[#FD853A]" />
				</Box>
				<Box
					bgColor="bg-[#151719]"
					width="w-full"
					height="h-[71px]"
					classes="p-3 flex justify-between items-center"
				>
					<div class="flex-col items-center justify-center">
						<div class="flex items-center gap-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#FE6D8E" />
							</svg>
							<p class="statTitle">Interactions</p>
						</div>
						<p class="statValue">1k</p>
					</div>
					<ProgressRadial value={70} width="w-[40px]" color="stroke-[#FE6D8E]" />
				</Box>
			</div>
			<div class="mt-4">
				<Chart color={'#49F9EA'} chartId="chart1" />
			</div>
		</Box>
		<Box bgColor="bg-[#151719]" width="w-full" height="h-full" classes="p-6">
			<div class="flex w-full justify-between">
				<RadioDropdown
					{items}
					iconSize={14}
					classes="w-[253px] text-[20px] !text-white !bg-transparent flex items-center gap-x-2"
					showContent={showRadioContent}
					dropdownClasses="!top-[2.2rem]"
				/>
				<Dropdown
					showContent={showDateContent}
					classes="bg-[#1E2225] w-[98px] h-[38px] px-2 py-[10px] !text-xs"
					label="Annually"
					iconSize={16}
				/>
			</div>
			<div class="mt-[89px] flex w-full items-center justify-between gap-x-8">
				<Box
					bgColor="bg-[#151719]"
					width="w-full"
					height="h-[71px]"
					classes="p-3 flex justify-between items-center"
				>
					<div class="flex-col items-center justify-center">
						<div class="flex items-center gap-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#3E8AFD" />
							</svg>
							<p class="statTitle">Open rate</p>
						</div>
						<p class="statValue">25k</p>
					</div>
					<ProgressRadial value={20} width="w-[40px]" color="stroke-[#3E8AFD]" />
				</Box>

				<Box
					bgColor="bg-[#151719]"
					width="w-full"
					height="h-[71px]"
					classes="p-3 flex justify-between items-center"
				>
					<div class="flex-col items-center justify-center">
						<div class="flex items-center gap-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#FD853A" />
							</svg>
							<p class="statTitle">Clickthrough</p>
						</div>
						<p class="statValue">33%</p>
					</div>
					<ProgressRadial value={60} width="w-[40px]" color="stroke-[#FD853A]" />
				</Box>
				<Box
					bgColor="bg-[#151719]"
					width="w-full"
					height="h-[71px]"
					classes="p-3 flex justify-between items-center"
				>
					<div class="flex-col items-center justify-center">
						<div class="flex items-center gap-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="8"
								viewBox="0 0 8 8"
								fill="none"
							>
								<circle cx="4" cy="4" r="4" fill="#FE6D8E" />
							</svg>
							<p class="statTitle">Conversion</p>
						</div>
						<p class="statValue">8%</p>
					</div>
					<ProgressRadial value={70} width="w-[40px]" color="stroke-[#FE6D8E]" />
				</Box>
			</div>
			<div class="mt-4">
				<Chart color={'#3E89FD'} chartId="chart2" />
			</div>
		</Box>
	</div>
{/if}

<style lang="postcss">
	.title {
		color: #efefef;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.statTitle {
		color: #6f767e;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.statValue {
		color: #efefef;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin-top: 1px;
	}
</style>
