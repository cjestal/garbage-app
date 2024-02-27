<template>
	<div v-if="$route.path == '/login/'">
		<NuxtPage />
	</div>
	<div v-else class="min-h-full">
		<Navbar />
		<main class="-mt-32">
			<div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
				<div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
					<NuxtPage />
				</div>
			</div>
		</main>
	</div>
</template>

<script setup></script>
