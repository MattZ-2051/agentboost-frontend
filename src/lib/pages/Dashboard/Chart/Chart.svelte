<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import gradient from 'chartjs-plugin-gradient';
	import { hexToRgba } from '$utils';

	export let color: string;
	export let chartId: string;
	export let chartData = [100, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80];

	const colorRgba = hexToRgba(color);

	onMount(async () => {
		const el = document.getElementById(chartId);
		const months = [
			'JAN',
			'FEB',
			'MAR',
			'APR',
			'MAY',
			'JUN',
			'JUL',
			'AUG',
			'SEP',
			'OCT',
			'NOV',
			'DEC'
		];

		const maxNum = Math.max(...chartData);

		const data = {
			labels: months,
			datasets: [
				{
					label: '',
					data: chartData,
					fill: true,
					gradient: {
						backgroundColor: {
							axis: 'y',
							colors: {
								[0]: 'rgba(196, 196, 196, 0.00)',
								[maxNum]: colorRgba
							}
						},
						borderColor: {
							axis: 'x',
							colors: {}
						}
					},
					borderColor: color,
					tension: 0.3
				}
			]
		};
		if (el) {
			Chart.register(gradient);
			new Chart(el, {
				type: 'line',
				data,
				options: {
					plugins: {
						legend: {
							display: false
						}
					},
					elements: {
						line: {
							borderJoinStyle: 'round'
						},
						point: {
							pointStyle: false
						}
					},
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});
		}
	});
</script>

<div>
	<canvas id={chartId} class="w-[500px] h-[147px]" />
</div>

<style lang="postcss">
</style>
