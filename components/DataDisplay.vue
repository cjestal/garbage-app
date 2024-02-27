<template>
	<div>
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<div
				v-for="item in stats"
				:key="item.name"
				class="overflow-hidden rounded-lg  px-4 py-5 shadow sm:p-6"
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
	{ name: "Current Coins", stat: "⦵ 7,897", color: "bg-red-300" },
	{ name: "Total Coins Earned", stat: "⦵ 516", color: "bg-blue-300" },
	{ name: "Garbage Collected", stat: "240 pieces", color: "bg-green-300" },
];
</script>
