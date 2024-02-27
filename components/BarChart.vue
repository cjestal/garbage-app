<template>
	<div>
		<div class="border-b border-gray-200 pb-5">
			<h3 class="text-base font-semibold leading-6 text-gray-900">
				Garbage Collected Breakdown
			</h3>
		</div>
        <br>
        <br>
		<Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
	</div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS } from "chart.js/auto";

const chartData = ref({
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Tim Hortons",
			backgroundColor: "#C8102F",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
		{
			label: "Starbucks",
			backgroundColor: "#00704A",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
		{
			label: "McDonalds",
			backgroundColor: "#FFCC00",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
		{
			label: "Subway",
			backgroundColor: "#9ACD32",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
		{
			label: "Wendy's",
			backgroundColor: "#00A0DD",
			data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000)),
		},
	],
});
const chartOptions = ref({
	responsive: true,
});
</script>
