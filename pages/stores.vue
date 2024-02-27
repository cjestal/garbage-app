<template>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-base font-semibold leading-6 text-gray-900">Stores</h1>
				<p class="mt-2 text-sm text-gray-700">
					A list of all the stores registered with the system.
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
		<GTable />
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
