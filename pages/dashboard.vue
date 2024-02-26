<template>
  <div>
    <h2>Current Data</h2>
		<!-- DATA DISPLAY -->
		<dl
			class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4"
		>
			<div
				v-for="stat in stats"
				:key="stat.name"
				class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
			>
				<dt class="text-sm font-medium leading-6 text-gray-500">
					{{ stat.name }}
				</dt>
				<dd
					:class="[
						stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
						'text-xs font-medium',
					]"
				>
					<!-- {{ stat.change }} -->
				</dd>
				<dd
					class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
				>
					{{ stat.value }}
				</dd>
			</div>
		</dl>

		<hr />
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
	{
		name: "Available Points",
		value: "300",
		change: "+1.39%",
		changeType: "positive",
	},
	{
		name: "Points Spent",
		value: "30",
		change: "+4.75%",
		changeType: "positive",
	},
	{
		name: "Garbage Submitted",
		value: "50",
		change: "+54.02%",
		changeType: "negative",
	},

	{
		name: "Expenses",
		value: "$30,156.00",
		change: "+10.18%",
		changeType: "negative",
	},
];

import { CheckIcon, HandThumbUpIcon, UserIcon, PlusIcon, MinusIcon } from "@heroicons/vue/20/solid";

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
		icon: MinusIcon,
		iconBackground: "bg-yellow-400",
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
