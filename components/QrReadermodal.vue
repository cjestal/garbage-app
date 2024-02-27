<template>
	<button
		@click="showModal"
		class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
	>
		<span class="flex gap-2">
			<QrCodeIcon class="-ml-1.5 h-5 w-5" aria-hidden="true" /> Scan QR Code
		</span>
	</button>

	<fwb-modal v-if="isShowModal" @close="closeModal" size="md">
		<template #header>
			<div class="flex items-center text-lg">QR Code</div>
		</template>
		<template #body>
			<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
				Present this QR code to the store to earn points!
			</p>

			<fwb-img
				alt="flowbite-vue"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1920px-QR_code_for_mobile_English_Wikipedia.svg.png"
			/>
		</template>
		<template #footer>
			<div class="flex justify-end">
				<fwb-button @click="closeModal" color="green"> Done </fwb-button>
			</div>
		</template>
	</fwb-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { FwbButton, FwbModal, FwbImg } from "flowbite-vue";
import { QrCodeIcon } from "@heroicons/vue/24/outline";

const isShowModal = ref(false);

function closeModal() {
	isShowModal.value = false;
}
function showModal() {
	isShowModal.value = true;
}
</script>
