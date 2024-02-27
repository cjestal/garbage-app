<template>
	<div>
		<dl class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
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
	{ name: "Customers Served", stat: "463", color: "bg-red-300" },
	{ name: "Coins Granted", stat: "⦵ 11,516", color: "bg-blue-300" },
	{ name: "Garbage Disposed", stat: "55,240 pieces", color: "bg-green-300" },
	{ name: "Rewards Redeemed", stat: "200", color: "bg-purple-300" },
];
</script>
