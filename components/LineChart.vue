<template>
	<div>
		<div class="border-b border-gray-200 pb-5">
			<h3 class="text-base font-semibold leading-6 text-gray-900">
				Data Trends
			</h3>
		</div>
		<br />
		<br />
		<Line :data="chartData" :options="chartOptions" />
	</div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import { Chart as ChartJS } from "chart.js/auto";

const chartData = ref({
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Reward Purchases",
			backgroundColor: "purple",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
		{
			label: "Garbage Collected",
			backgroundColor: "yellow",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
		{
			label: "Users",
			backgroundColor: "brown",
			data: Array.from({ length: 7 }).map(
				(_, index) => Math.floor(Math.random() * 100) + index * 100
			),
		},
	],
});

const chartOptions = ref({
	responsive: true,
});
</script>
