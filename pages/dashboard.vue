<template>
	<div v-if="userType === 'admin'" class="flex flex-col gap-6">
		<DataDisplay />
		<PointsHistory />
		<RewardsCards />
	</div>
	<div v-if="userType === 'store'" class="flex flex-col gap-6">
		<StoreDataDisplay />
		<StorePointsHistory />
	</div>
	<div v-else class="flex flex-col gap-6">
		<DataDisplay />
		<PointsHistory />
		<RewardsCards />
	</div>
</template>

<script setup>
import { ref } from "vue";

const userType = ref("store");
</script>
