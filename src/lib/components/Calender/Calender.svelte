<script lang="ts">
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import ArrowLeft from '$lib/assets/svg/Arrow/ArrowLeft.svelte';
	import ArrowRight from '$lib/assets/svg/Arrow/ArrowRight.svelte';
	import CardModal from '../Modals/CardModal/CardModal.svelte';
	import Chip from '../Chip/Chip.svelte';
	import { getModalStore, type ModalSettings, type ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const modalStore = getModalStore();
	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: CardModal,
		// Add the component properties as key/value pairs
		props: {},
		// Provide a template literal for the default component slot
		slot: '<p>Skeleton</p>'
	};
	// Provide the modal settings
	const modal: ModalSettings = {
		type: 'component',
		component: modalComponent
	};

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
			month: 'September'
		},
		{
			id: 2,
			label: 'listing 2',
			day: '13',
			month: 'August'
		},
		{
			id: 3,
			label: 'listing 3',
			day: '10',
			month: 'September'
		}
	];

	const handleModal = () => {
		modalStore.trigger(modal);
	};

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

<div class="w-full flex justify-center">
	<div class="bg-secondary-600 h-full w-[1000px] p-12">
		<div class="flex justify-between">
			<div
				class="hover:cursor-pointer hover:scale-110"
				on:click={goToPrevMonth}
				on:keydown={goToPrevMonth}
			>
				<ArrowLeft />
			</div>
			<h1 class="text-3xl">{month}</h1>
			<div
				class="hover:cursor-pointer hover:scale-110"
				on:click={goToNextMonth}
				on:keydown={goToNextMonth}
			>
				<ArrowRight />
			</div>
		</div>
		<hr class="my-8" />
		<ul class="weekdays grid grid-cols-7">
			<li>Su</li>
			<li>Mo</li>
			<li>Tu</li>
			<li>We</li>
			<li>Th</li>
			<li>Fr</li>
			<li>Sa</li>
		</ul>
		<ul class="days grid grid-cols-7">
			{#each calender as item, i (item.id)}
				{#if i < firstDayIndex || i >= numberOfDays + firstDayIndex}
					<div class="cell">&nbsp;</div>
				{:else}
					<div
						use:dndzone={{
							items: item.items,
							dropTargetStyle: {}
						}}
						id={`${i - firstDayIndex + 1}`}
						class="cell flex flex-col h-full"
						on:consider={(e) => handleItemConsider(item.id, e)}
						on:finalize={(e) =>
							handleItemFinalize(
								item.id,
								{ day: (i - firstDayIndex + 1).toString(), month: month },
								e
							)}
					>
						{i - firstDayIndex + 1}
						{#each item.items as info, x (info.id)}
							{#if info.month === month}
								<div class={`${x > 0 ? 'mb-2' : ''}`}>
									<Chip title={info.label} variant="variant-filled" />
								</div>
							{/if}
						{/each}
					</div>{/if}
			{/each}
		</ul>
	</div>
</div>

<style>
	ul {
		list-style-type: none;
	}

	/* Weekdays (Mon-Sun) */
	.weekdays {
		margin: 0;
		padding: 10px 0;
	}

	.weekdays li {
		display: inline-block;
		border: 1px solid black;
		text-align: center;
	}

	/* Days (1-31) */
	.days {
		padding: 10px 0;
		margin: 0;
	}

	.cell {
		list-style-type: none;
		border: 1px solid black;
		padding: 9px;
		margin: 0 2px;
		height: 7rem;
		text-align: center;
		margin-bottom: 1px;
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
