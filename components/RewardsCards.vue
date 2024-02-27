<template>
	<div class="flex flex-col gap-6">
		<div class="flex justify-between">
			<h2>Available Rewards</h2>
			<router-link to="/my-rewards" class="text-green-600"
				>Show All</router-link
			>
		</div>

		<div class="flex flex-col gap-4 md:flex-row md:gap-4">
			<fwb-card
				img-alt="Desk"
				img-src="https://flowbite.com/docs/images/blog/image-4.jpg"
				variant="horizontal"
			>
				<div class="p-5">
					<h5
						class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
					>
						Noteworthy technology acquisitions 2021
					</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
				</div>
			</fwb-card>

			<fwb-card
				img-alt="Desk"
				img-src="https://flowbite.com/docs/images/blog/image-4.jpg"
				variant="horizontal"
			>
				<div class="p-5">
					<h5
						class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
					>
						Noteworthy technology acquisitions 2021
					</h5>
					<p class="font-normal text-gray-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
				</div>
			</fwb-card>
		</div>
	</div>
</template>

<script setup>
import { FwbCard } from "flowbite-vue";
</script>
