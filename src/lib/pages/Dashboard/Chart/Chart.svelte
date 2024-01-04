<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import gradient from 'chartjs-plugin-gradient';
	import { hexToRgba } from '$utils';

	export let color: string;
	export let classes: string = '';
	export let chartId: string;
	export let hideAxes: boolean = false;
	export let chartData = [100, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80];

	const colorRgba = hexToRgba(color);

	onMount(async () => {
		const plugin = {
			id: 'verticalLiner',
			afterInit: (chart, args, opts) => {
				chart.verticalLiner = {};
			},
			afterEvent: (chart, args, options) => {
				const { inChartArea } = args;
				chart.verticalLiner = { draw: inChartArea };
			},
			beforeTooltipDraw: (chart, args, options) => {
				const { draw } = chart.verticalLiner;
				if (!draw) return;

				const { ctx } = chart;
				const { top, bottom } = chart.chartArea;
				const { tooltip } = args;
				const x = tooltip?.caretX;
				if (!x) return;

				ctx.save();

				ctx.beginPath();
				ctx.moveTo(x, top);
				ctx.lineTo(x, bottom);
				ctx.stroke();

				ctx.restore();
			}
		};
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
					label: 'My first label',
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
				plugins: [plugin],
				options: {
					interaction: {
						mode: 'index'
					},
					plugins: {
						verticalLiner: {},
						legend: {
							display: false
						},
						tooltip: {
							backgroundColor: 'rgb(255,255,255)',
							bodyColor: '#151719',
							titleColor: '#151719',
							titleFont: {
								weight: 500,
								size: 15
							},
							bodyFont: {
								weight: 400
							},
							padding: 6,
							titleAlign: 'center',
							bodyAlign: 'center',
							callbacks: {
								title: function (context) {
									return '3,004';
								},
								label: function () {
									return 'Interactions';
								},
								labelColor: function () {
									return {
										borderColor: 'transparent',
										backgroundColor: 'transparent',
										borderWidth: 0
									};
								}
							}
						}
					},
					elements: {
						line: {
							borderJoinStyle: 'round',
							backgroundColor: 'rgb(255,255,255)'
						},
						point: {
							pointStyle: false
						}
					},
					scales: {
						y: {
							display: !hideAxes,
							ticks: {
								padding: 12
							},
							position: 'right',
							grid: {
								color: '#e5e5ef30',
								borderColor: '#e5e5ef30',
								tickColor: '#e5e5ef30'
							}
						},
						x: {
							display: !hideAxes,
							ticks: {
								padding: 12
							},
							grid: {
								color: 'transparent',
								borderColor: 'transparent',
								tickColor: 'transparent'
							}
						}
					}
				}
			});
		}
	});
</script>

<div>
	<canvas id={chartId} class={`${classes} w-[500px] h-[147px]`} />
</div>
