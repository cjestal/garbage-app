<template>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-base font-semibold leading-6 text-gray-900">Rewards</h1>
				<p class="mt-2 text-sm text-gray-700">
					A list of all the rewards registered with the system.
				</p>
			</div>
			<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
				<fwb-button color="green" size="lg">
					<span class="flex gap-2">
						<PlusIcon class="-ml-1.5 h-5 w-5" aria-hidden="true" /> Add Store
					</span>
				</fwb-button>
			</div>
		</div>
		<div class="mt-8 flow-root">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<table class="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
								>
									Name
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Title
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Email
								</th>
								<th
									scope="col"
									class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>
									Role
								</th>
								<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							<tr v-for="person in people" :key="person.email">
								<td
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
								>
									{{ person.name }}
								</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									{{ person.title }}
								</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									{{ person.email }}
								</td>
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
									{{ person.role }}
								</td>
								<td
									class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
								>
									<a href="#" class="text-indigo-600 hover:text-indigo-900"
										>Edit<span class="sr-only">, {{ person.name }}</span></a
									>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/24/outline";
import { FwbButton } from "flowbite-vue";
const people = [
	{
		name: "Lindsay Walton",
		title: "Front-end Developer",
		email: "lindsay.walton@example.com",
		role: "Member",
	},
	// More people...
];
</script>
