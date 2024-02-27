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
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="mobileMenuOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      as="template"
                      v-for="category in navigation.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                        ]"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="(category, categoryIdx) in navigation.categories"
                    :key="category.name"
                    class="space-y-12 px-4 pb-6 pt-10"
                  >
                    <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            :id="`mobile-featured-heading-${categoryIdx}`"
                            class="font-medium text-gray-900"
                          >
                            Featured
                          </p>
                          <ul
                            role="list"
                            :aria-labelledby="`mobile-featured-heading-${categoryIdx}`"
                            class="mt-6 space-y-6"
                          >
                            <li
                              v-for="item in category.featured"
                              :key="item.name"
                              class="flex"
                            >
                              <a :href="item.href" class="text-gray-500">{{
                                item.name
                              }}</a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p
                            id="mobile-categories-heading"
                            class="font-medium text-gray-900"
                          >
                            Categories
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-categories-heading"
                            class="mt-6 space-y-6"
                          >
                            <li
                              v-for="item in category.categories"
                              :key="item.name"
                              class="flex"
                            >
                              <a :href="item.href" class="text-gray-500">{{
                                item.name
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id="mobile-collection-heading"
                            class="font-medium text-gray-900"
                          >
                            Collection
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-collection-heading"
                            class="mt-6 space-y-6"
                          >
                            <li
                              v-for="item in category.collection"
                              :key="item.name"
                              class="flex"
                            >
                              <a :href="item.href" class="text-gray-500">{{
                                item.name
                              }}</a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p
                            id="mobile-brand-heading"
                            class="font-medium text-gray-900"
                          >
                            Brands
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-brand-heading"
                            class="mt-6 space-y-6"
                          >
                            <li
                              v-for="item in category.brands"
                              :key="item.name"
                              class="flex"
                            >
                              <a :href="item.href" class="text-gray-500">{{
                                item.name
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div
                  v-for="page in navigation.pages"
                  :key="page.name"
                  class="flow-root"
                >
                  <a
                    :href="page.href"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >{{ page.name }}</a
                  >
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <!-- Currency selector -->
                <form>
                  <div class="inline-block">
                    <label for="mobile-currency" class="sr-only"
                      >Currency</label
                    >
                    <div
                      class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
                    >
                      <select
                        id="mobile-currency"
                        name="currency"
                        class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                      >
                        <option v-for="currency in currencies" :key="currency">
                          {{ currency }}
                        </option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                      >
                        <ChevronDownIcon
                          class="h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative"></header>

    <main
      class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8"
    >
      <div class="max-w-xl">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Your Recent Orders
        </h1>
        <p class="mt-2 text-sm text-gray-500">
          Check the status of recent orders.
        </p>
      </div>

      <div class="mt-12 space-y-16 sm:mt-16">
        <section
          v-for="order in orders"
          :key="order.number"
          :aria-labelledby="`${order.number}-heading`"
        >
          <div
            class="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0"
          >
            <h2
              :id="`${order.number}-heading`"
              class="text-lg font-medium text-gray-900 md:flex-shrink-0"
            >
              Order #{{ order.number }}
            </h2>
            <div
              class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
            >
              <p class="text-sm font-medium text-gray-500">
                {{ order.status }}
              </p>
            </div>
          </div>

          <div
            class="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200"
          >
            <div
              v-for="product in order.products"
              :key="product.id"
              class="py-6 sm:flex"
            >
              <div
                class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                />
                <div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    <a :href="product.href">{{ product.name }}</a>
                  </h3>
                  <p class="truncate text-sm text-gray-500">
                    <span>{{ product.color }}</span>
                    {{ " " }}
                    <span class="mx-1 text-gray-400" aria-hidden="true"
                      >&middot;</span
                    >
                    {{ " " }}
                    <span>{{ product.size }}</span>
                  </p>
                  <p class="mt-1 font-medium text-gray-900">
                    {{ product.price }}
                  </p>
                </div>
              </div>
              <div class="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                <span
                  v-if="product.status == 'redeemed'"
                  class="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700"
                  >Redeemed</span
                >
                <span
                  v-if="product.status == 'available'"
                  class="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                  >Available</span
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer
      aria-labelledby="footer-heading"
      class="border-t border-gray-200 bg-white"
    >
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4"
        >
          <div
            class="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0"
          ></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        { name: "Sleep", href: "#" },
        { name: "Swimwear", href: "#" },
        { name: "Underwear", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
        { name: "Bottoms", href: "#" },
        { name: "Underwear", href: "#" },
        { name: "Accessories", href: "#" },
      ],
      brands: [
        { name: "Full Nelson", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Significant Other", href: "#" },
      ],
    },
    {
      name: "Men",
      featured: [
        { name: "Casual", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Outdoor", href: "#" },
      ],
      collection: [
        { name: "Everything", href: "#" },
        { name: "Core", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
      ],
      categories: [
        { name: "Artwork Tees", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Boxers", href: "#" },
        { name: "Basic Tees", href: "#" },
      ],
      brands: [
        { name: "Significant Other", href: "#" },
        { name: "My Way", href: "#" },
        { name: "Counterfeit", href: "#" },
        { name: "Re-Arranged", href: "#" },
        { name: "Full Nelson", href: "#" },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const orders = [
  {
    // first order
    number: "76292",
    status: "Purchased on february 17, 2024",
    href: "#",
    invoiceHref: "#",
    products: [
      {
        id: 1,
        name: "Focus Carry pounch",
        href: "#",
        price: "⦵ 32",
        size: "McDonalds",
        status: "available",
        imageSrc:
          "https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png",
        imageAlt: "",
      },
      // More products...
    ],
  },
  {
    // second  order
    number: "44673",
    status: "Purchased on december 30, 2023",
    href: "#",
    invoiceHref: "#",
    products: [
      {
        id: 1,
        name: "Free coffee",
        href: "#",
        price: "⦵ 64",
        size: "Tim Hortons",
        status: "redeemed",
        imageSrc:
          "https://seeklogo.com/images/T/Tim_Hortons-logo-C043823AE9-seeklogo.com.png",
        imageAlt: "",
      },
      {
        id: 1,
        name: "Focus Carry pounch",
        href: "#",
        price: "⦵ 32",
        size: "McDonalds",
        status: "redeemed",
        imageSrc:
          "https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png",
        imageAlt: "",
      },
      // More products...
    ],
  },
  {
    // third order
    number: "35783",
    status: "Purchased on september 22, 2023",
    href: "#",
    invoiceHref: "#",
    products: [
      {
        id: 1,
        name: "20% off your next coffee",
        href: "#",
        price: "⦵ 13",
        size: "Starbucks",
        status: "redeemed",
        imageSrc:
          "https://seeklogo.com/images/S/STARBUCKS-logo-1C7F61A348-seeklogo.com.png",
        imageAlt: "",
      },
      // More products...
    ],
  },
  // More orders...
];
const footerNavigation = {};

const mobileMenuOpen = ref(false);
</script>
