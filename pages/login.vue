<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
	<!--
	  This example requires updating your template:
  
	  ```
	  <html class="h-full bg-white">
	  <body class="h-full">
	  ```
	-->
	<div
		class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
	>
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img
				class="mx-auto h-10 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
				alt="Your Company"
			/>
			<h2
				class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
			>
				Sign in to your <span class="text-green-600"> Green Coin </span> account
			</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900"
						>Email address</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-900"
							>Password</label
						>
						<div class="text-sm">
							<a
								href="#"
								class="font-semibold text-green-600 hover:text-green-500"
								>Forgot password?</a
							>
						</div>
					</div>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
						@click="loginAsUser()"
					>
						Sign in
					</button>
					<div class="flex gap-2">
						<button
							type="button"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
							@click="loginAsStore()"
						>
							Login as Store
						</button>
						<button
							type="button"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
							@click="loginAsAdmin()"
						>
							Login as Admin
						</button>
					</div>
				</div>
			</form>

			<p class="mt-10 text-center text-sm text-gray-500">
				Not a member?
				{{ " " }}
				<a
					href="#"
					class="font-semibold leading-6 text-green-600 hover:text-green-500"
					>Start a 14 day free trial</a
				>
			</p>
		</div>
	</div>
</template>

<script setup>

onMounted(() => {
  localStorage.removeItem("userType");
})

const loginAsStore = () => {
	localStorage.setItem("userType", "store");
	navigateTo("/dashboard");
};

const loginAsAdmin = () => {
	localStorage.setItem("userType", "admin");
	navigateTo("/dashboard");
};

const loginAsUser = () => {
	localStorage.setItem("userType", "user");
	navigateTo("/dashboard");
};
</script>
