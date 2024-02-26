<template>
	<div>
		<!-- DATA DISPLAY -->

		<h3 class="text-base font-semibold leading-6 text-gray-900">Latest Data</h3>
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<div
				v-for="item in stats"
				:key="item.name"
				class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        :class="item.color"
			>
				<dt class="truncate text-sm font-medium text-gray-500">
					{{ item.name }}
				</dt>
				<dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
					{{ item.stat }}
				</dd>
			</div>
		</dl>

		<br />
		<!-- HISTORY -->
		<h2>Recent History</h2>
		<br />
		<div class="flow-root">
			<ul role="list" class="-mb-8">
				<li v-for="(event, eventIdx) in timeline" :key="event.id">
					<div class="relative pb-8">
						<span
							v-if="eventIdx !== timeline.length - 1"
							class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
							aria-hidden="true"
						/>
						<div class="relative flex space-x-3">
							<div>
								<span
									:class="[
										event.iconBackground,
										'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
									]"
								>
									<component
										:is="event.icon"
										class="h-5 w-5 text-white"
										aria-hidden="true"
									/>
								</span>
							</div>
							<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
								<div>
									<p class="text-sm text-gray-500">
										{{ event.content }}
										<a :href="event.href" class="font-medium text-gray-900">{{
											event.target
										}}</a>
									</p>
								</div>
								<div class="whitespace-nowrap text-right text-sm text-gray-500">
									<time :datetime="event.datetime">{{ event.date }}</time>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const stats = [
	{ name: "Current Coins", stat: "7,897", color: "bg-blue-300" },
	{ name: "Total Coins Earned", stat: "516", color: "bg-orange-300" },
	{ name: "Garbage Collected", stat: "240 pieces", color: "bg-green-300" },
];

import {
	CheckIcon,
	HandThumbUpIcon,
	UserIcon,
	PlusIcon,
	MinusIcon,
	ShoppingCartIcon,
} from "@heroicons/vue/20/solid";

const timeline = [
	{
		id: 4,
		content: "Earned 5 Points from Tim Hortons",
		target: "Tim Hortons",
		href: "#",
		date: "Sep 30",
		datetime: "2020-09-30",
		icon: PlusIcon,
		iconBackground: "bg-green-500",
	},
	{
		id: 5,
		content: "Spent points on Winners -$20 Gift Certificate",
		target: "Winners",
		href: "#",
		date: "Oct 4",
		datetime: "2020-10-04",
		icon: ShoppingCartIcon,
		iconBackground: "bg-purple-500",
	},
	{
		id: 4,
		content: "Earned 5 Points from Tim Hortons",
		target: "Tim Hortons",
		href: "#",
		date: "Sep 30",
		datetime: "2020-09-30",
		icon: PlusIcon,
		iconBackground: "bg-green-500",
	},
	{
		id: 5,
		content: "Spent points on Winners -$20 Gift Certificate",
		target: "Winners",
		href: "#",
		date: "Oct 4",
		datetime: "2020-10-04",
		icon: MinusIcon,
		iconBackground: "bg-red-500",
	},
	{
		id: 4,
		content: "Earned 5 Points from Tim Hortons",
		target: "Tim Hortons",
		href: "#",
		date: "Sep 30",
		datetime: "2020-09-30",
		icon: PlusIcon,
		iconBackground: "bg-green-500",
	},
	{
		id: 5,
		content: "Spent points on Winners -$20 Gift Certificate",
		target: "Winners",
		href: "#",
		date: "Oct 4",
		datetime: "2020-10-04",
		icon: MinusIcon,
		iconBackground: "bg-red-500",
	},
	{
		id: 4,
		content: "Earned 5 Points from Tim Hortons",
		target: "Tim Hortons",
		href: "#",
		date: "Sep 30",
		datetime: "2020-09-30",
		icon: PlusIcon,
		iconBackground: "bg-green-500",
	},
	{
		id: 5,
		content: "Spent points on Winners -$20 Gift Certificate",
		target: "Winners",
		href: "#",
		date: "Oct 4",
		datetime: "2020-10-04",
		icon: MinusIcon,
		iconBackground: "bg-red-500",
	},
];
</script>
