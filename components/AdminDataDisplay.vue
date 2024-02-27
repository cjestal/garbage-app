<template>
	<div>
		<div class="border-b border-gray-200 pb-5">
			<h3 class="text-base font-semibold leading-6 text-gray-900">
				Data Monitor
			</h3>
		</div>
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<div
				v-for="item in stats"
				:key="item.name"
				class="overflow-hidden rounded-lg px-4 py-5 shadow sm:p-6"
				:class="item.color"
			>
				<dt class="truncate text-sm font-medium text-gray-900">
					{{ item.name }}
				</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
					{{ item.stat }}
				</dd>
			</div>
		</dl>
	</div>
</template>
<script setup>
const stats = [
	{ name: "Total Coins Granted", stat: "⦵ 5,300,450", color: "bg-red-300" },
	{ name: "Total Rewards Redeemed", stat: "480,000", color: "bg-blue-300" },
	{
		name: "Total Garbage Collected",
		stat: "2,340,328 pieces",
		color: "bg-green-300",
	},
];
</script>
