<script lang="ts">
	import AddIconHover from '$lib/assets/AddIcon/AddIconHover.svelte';

	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import ArrowLeft from '$lib/assets/svg/Arrow/ArrowLeft.svelte';
	import ArrowRight from '$lib/assets/svg/Arrow/ArrowRight.svelte';
	import Chip from '../Chip/Chip.svelte';
	import { onMount } from 'svelte';
	import CalenderIcon from '$lib/assets/svg/CalenderIcon.svelte';
	import Add from '$lib/pages/Marketing/Calender/Add.svelte';

	const date = new Date();

	const today = {
		dayNumber: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear()
	};

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let monthIndex = date.getMonth();
	// let monthIndex = 9;
	// const currentMonth = date.toLocaleString('en-US', { month: 'long' })
	$: month = monthNames[monthIndex];

	let year = date.getFullYear();

	$: firstDayIndex = new Date(year, monthIndex, 1).getDay();
	// const currentDay = date.getDate();
	$: numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

	$: calendarCellsQty = numberOfDays + firstDayIndex;

	$: adding = false;

	$: calender = monthIndex !== undefined ? handleCalender() : [];

	type CalenderItem = {
		id: number;
		items: ListingItem[];
	};

	const handleCalender = (): CalenderItem[] => {
		const days = new Array(calendarCellsQty);
		const result: CalenderItem[] = [];
		for (let i = 0; i < days.length; i++) {
			const day = i - firstDayIndex + 1;
			const item = items.filter((item) => parseInt(item.day, 10) === day);

			result.push({
				id: i + 1,
				items: [...item]
			});
		}

		return result;
	};

	onMount(() => {
		calender = handleCalender();
	});

	const goToNextMonth = () => {
		if (monthIndex >= 11) {
			year += 1;
			return (monthIndex = 0);
		}
		return (monthIndex += 1);
	};

	const goToPrevMonth = () => {
		if (monthIndex <= 0) {
			year -= 1;
			return (monthIndex = 11);
		}
		return (monthIndex -= 1);
	};

	type ListingItem = {
		id: number;
		label: string;
		day: string;
		month: string;
	};

	let items: ListingItem[] = [
		{
			id: 1,
			label: 'listing 1',
			day: '10',
			month: 'November'
		},
		{
			id: 2,
			label: 'listing 2',
			day: '13',
			month: 'November'
		},
		{
			id: 3,
			label: 'listing 3',
			day: '10',
			month: 'November'
		}
	];

	const handleItemConsider = (id: number, e: CustomEvent<DndEvent<ListingItem>>) => {
		const colIdx = calender.findIndex((c) => c.id === id);
		calender[colIdx].items = e.detail.items;
		calender = [...calender];
	};

	const handleItemFinalize = (
		id: number,
		itemInfo: { day: string; month: string },
		e: CustomEvent<DndEvent<ListingItem>>
	) => {
		const colIdx = calender.findIndex((c) => c.id === id);
		for (const info of e.detail.items) {
			const { day, month } = itemInfo;
			info.day = day;
			info.month = month;
		}
		calender[colIdx].items = e.detail.items;
		calender = [...calender];
	};
</script>

<div class="bg-[#151719] h-[1288px] w-[1270px] rounded-[20px] py-6 px-8">
	<div class="flex justify-between">
		<div class="flex items-center">
			<CalenderIcon />
			<p class="text-white text-xl font-semibold ml-2">Your Monthly Marketing Calender</p>
		</div>
		<div class="flex items-center gap-x-4">
			<h1 class="text-xl">{month} {year}</h1>
			<div class="flex items-center gap-x-6">
				<div
					class="hover:cursor-pointer hover:scale-110"
					on:click={goToPrevMonth}
					on:keydown={goToPrevMonth}
				>
					<ArrowLeft />
				</div>
				<div
					class="hover:cursor-pointer hover:scale-110"
					on:click={goToNextMonth}
					on:keydown={goToNextMonth}
				>
					<ArrowRight />
				</div>
			</div>
		</div>
	</div>
	<div class="mt-12" />
	<ul class="weekdays grid grid-cols-7 font-[500]">
		<li class="!border-r-[0.937px] !border-l-0 !border-t-0 !border-b-0">SUN</li>
		<li class="!border-t-0 !border-b-0 !border-l-0 !border-r-[0.937px]">MON</li>
		<li class="!border-t-0 !border-b-0 !border-l-0 !border-r-[0.937px]">TUE</li>
		<li class="!border-t-0 !border-b-0 !border-l-0 !border-r-[0.937px]">WED</li>
		<li class="!border-t-0 !border-b-0 !border-l-0 !border-r-[0.937px]">THUR</li>
		<li class="!border-t-0 !border-b-!border-b-0 !border-l-0 !border-r-[0.937px]">FRI</li>
		<li class="border-l !border-t-0 !border-r-0 !border-b-0">SAT</li>
	</ul>
	<ul class="days grid grid-cols-7">
		{#each calender as item, i (item.id)}
			{#if i < firstDayIndex || i >= numberOfDays + firstDayIndex}
				<div
					class={`cell  ${
						i === 0
							? '!border-l-[0.937px] !border-r-[0.937px] !border-b-[0.937px] !border-t-0'
							: i < 6
							? '!border-r-[0.937px] !border-l-0 !border-b-[0.937px] !border-t-0'
							: '!border-none'
					}`}
				>
					&nbsp;
				</div>
			{:else}
				<div
					class={`cell  ${'flex flex-col h-full !border-l-0 !border-r-[0.937px] !border-b-[0.937px] !border-t-0'}`}
				>
					<span class="flex justify-between w-full items-start !text-neutral-400 !text-opacity-70">
						{i - firstDayIndex + 1}
						<!-- <AddIconHover /> -->
						<Add />
					</span>
					<div
						use:dndzone={{
							items: item.items,
							dropTargetStyle: {}
						}}
						on:consider={(e) => handleItemConsider(item.id, e)}
						on:finalize={(e) =>
							handleItemFinalize(
								item.id,
								{ day: (i - firstDayIndex + 1).toString(), month: month },
								e
							)}
						id={`${i - firstDayIndex + 1}`}
						class="flex flex-col h-full"
					>
						{#each item.items as info, x (info.id)}
							{#if info.month === month}
								<div class={`${x > 0 ? 'mb-2' : ''}`}>
									<!-- <Chip title={info.label} variant="variant-filled" /> -->
								</div>
							{/if}
						{/each}
					</div>
				</div>{/if}
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style-type: none;
	}

	/* Weekdays (Mon-Sun) */
	.weekdays {
		border-radius: 10.5px 10.5px 0px 0px;
		border: 0.937px solid rgba(232, 232, 232, 0.1);
		color: rgba(150, 150, 150, 0.7);
	}

	.weekdays li {
		display: inline-block;
		border: 0.937px solid rgba(232, 232, 232, 0.1);
		text-align: left;
		padding: 11.25px;
	}

	/* Days (1-31) */
	.days {
		margin: 0;
	}

	.days div:nth-child(7n - 6) {
		border-left: 0.937px solid rgba(232, 232, 232, 0.1) !important;
	}

	.cell {
		list-style-type: none;
		border: 0.937px solid rgba(232, 232, 232, 0.1);
		padding: 11px;
		height: 180px;
		/* width: 173.429px; */
		width: 100%;
		text-align: center;
		margin: 0;
		font-size: 1.2rem;
		cursor: pointer;
	}

	/* Highlight the "current" day */
	.active {
		padding: 5px;
		/* @apply bg-secondary-400; */
		color: white !important;
	}
</style>
