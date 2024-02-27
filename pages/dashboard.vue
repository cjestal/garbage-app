<template>
	<!-- {{ localStorage.getItem("userType") }} -->
	<div v-if="userType === 'admin'" class="flex flex-col gap-10">
		<AdminDataDisplay />
		<BarChart />
		<LineChart />
	</div>
	<div v-if="userType === 'store'" class="flex flex-col gap-10">
		<StoreDataDisplay />
		<StorePointsHistory />
	</div>
	<div v-if="userType === 'user'" class="flex flex-col gap-10">
		<DataDisplay />
		<PointsHistory />
		<RewardsCards />
	</div>
</template>

<script setup>
import { ref } from "vue";

const userType = ref("store");

userType.value = localStorage.getItem("userType");
</script>
