<template>
	<div>
		<div class="py-24 text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900">
				Use your coins!
			</h1>
			<p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
				Congratulations on your coins ⦵. Now use it to get some cool stuff!
			</p>
		</div>
		<section aria-labelledby="products-heading" class="mt-8">
			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
			>
				<a
					v-for="product in products1"
					:key="product.id"
					:href="product.href"
					class="group"
				>
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
					>
						<img
							:src="product.imageSrc"
							:alt="product.imageAlt"
							class="h-80 w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<div
						class="mt-4 flex items-center justify-between text-base font-medium text-gray-900"
					>
						<h3>{{ product.name }}</h3>
						<p>⦵ {{ product.price }}</p>
					</div>
					<p class="mt-1 text-sm italic text-gray-500">
						{{ product.description }}
					</p>
				</a>
			</div>
		</section>

		<section
			aria-labelledby="featured-heading"
			class="relative mt-16 overflow-hidden rounded-lg lg:h-96"
		>
			<div class="absolute inset-0">
				<img
					src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
					alt=""
					class="h-full w-full object-cover object-center"
				/>
			</div>
			<div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
			<div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
			<div
				class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
			>
				<div>
					<h2 id="featured-heading" class="text-xl font-bold text-white">
						Workspace Collection
					</h2>
					<p class="mt-1 text-sm text-gray-300">
						Upgrade your desk with objects that keep you organized and
						clear-minded.
					</p>
				</div>
				<a
					href="#"
					class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
					>View the collection</a
				>
			</div>
		</section>

		<section aria-labelledby="more-products-heading" class="mt-16 pb-24">
			<h2 id="more-products-heading" class="sr-only">More products</h2>

			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
			>
				<a
					v-for="product in products2"
					:key="product.id"
					:href="product.href"
					class="group"
				>
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
					>
						<img
							:src="product.imageSrc"
							:alt="product.imageAlt"
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<div
						class="mt-4 flex items-center justify-between text-base font-medium text-gray-900"
					>
						<h3>{{ product.name }}</h3>
						<p>⦵ {{ product.price }}</p>
					</div>
					<p class="mt-1 text-sm italic text-gray-500">
						{{ product.description }}
					</p>
				</a>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref } from "vue";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
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
	QuestionMarkCircleIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
	categories: [
		{
			name: "Women",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
					imageAlt:
						"Models sitting back to back, wearing Basic Tee in black and bone.",
				},
				{
					name: "Basic Tees",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
					imageAlt:
						"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
				},
				{
					name: "Accessories",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
					imageAlt:
						"Model wearing minimalist watch with black wristband and white watch face.",
				},
				{
					name: "Carry",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
					imageAlt:
						"Model opening tan leather long wallet with credit card pockets and cash pouch.",
				},
			],
		},
		{
			name: "Men",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
					imageAlt:
						"Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
				},
				{
					name: "Basic Tees",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
					imageAlt: "Model wearing light heather gray t-shirt.",
				},
				{
					name: "Accessories",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
					imageAlt:
						"Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
				},
				{
					name: "Carry",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
					imageAlt:
						"Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
				},
			],
		},
	],
	pages: [
		{ name: "Company", href: "#" },
		{ name: "Stores", href: "#" },
	],
};
const sortOptions = [
	{ name: "Most Popular", href: "#" },
	{ name: "Best Rating", href: "#" },
	{ name: "Newest", href: "#" },
	{ name: "Price: Low to High", href: "#" },
	{ name: "Price: High to Low", href: "#" },
];
const filters = [
	{
		id: "category",
		name: "Category",
		options: [
			{ value: "tees", label: "Tees" },
			{ value: "crewnecks", label: "Crewnecks" },
			{ value: "hats", label: "Hats" },
			{ value: "bundles", label: "Bundles" },
			{ value: "carry", label: "Carry" },
			{ value: "objects", label: "Objects" },
		],
	},
	{
		id: "brand",
		name: "Brand",
		options: [
			{ value: "clothing-company", label: "Clothing Company" },
			{ value: "fashion-inc", label: "Fashion Inc." },
			{ value: "shoes-n-more", label: "Shoes 'n More" },
			{ value: "supplies-n-stuff", label: "Supplies 'n Stuff" },
		],
	},
	{
		id: "color",
		name: "Color",
		options: [
			{ value: "white", label: "White" },
			{ value: "black", label: "Black" },
			{ value: "grey", label: "Grey" },
			{ value: "blue", label: "Blue" },
			{ value: "olive", label: "Olive" },
			{ value: "tan", label: "Tan" },
		],
	},
	{
		id: "sizes",
		name: "Sizes",
		options: [
			{ value: "xs", label: "XS" },
			{ value: "s", label: "S" },
			{ value: "m", label: "M" },
			{ value: "l", label: "L" },
			{ value: "xl", label: "XL" },
			{ value: "2xl", label: "2XL" },
		],
	},
];
const products1 = [
	{
		id: 1,
		name: "20% off your next coffee",
		href: "#",
		price: "13",
		description: "Starbucks",
		imageSrc:
			"https://seeklogo.com/images/S/STARBUCKS-logo-1C7F61A348-seeklogo.com.png",
		imageAlt: "",
	},
	{
		id: 2,
		name: "Free Coffee",
		href: "#",
		price: "64",
		description: "Tim Hortons",
		imageSrc:
			"https://seeklogo.com/images/T/Tim_Hortons-logo-C043823AE9-seeklogo.com.png",
		imageAlt: "",
	},
	{
		id: 3,
		name: "Focus Carry Pouch",
		href: "#",
		price: "32",
		description: "McDonalds",
		imageSrc:
			"https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png",
		imageAlt:
			"Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
	},
	// More products...
];
const products2 = [
	{
		id: 7,
		name: "Electric Kettle",
		href: "#",
		price: "149",
		description: "Sephora",
		imageSrc:
			"https://seeklogo.com/images/B/Best_Buy-logo-742C14FC5E-seeklogo.com.png",
		imageAlt:
			"Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
	},
	{
		id: 8,
		name: "Leather Workspace Pad",
		href: "#",
		price: "165",
		description: "Walmart",
		imageSrc:
			"https://seeklogo.com/images/W/walmart-logo-E0D2232125-seeklogo.com.png",
		imageAlt:
			"Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
	},
	{
		id: 9,
		name: "Leather Long Wallet",
		href: "#",
		price: "118",
		description: "Natural",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-09.jpg",
		imageAlt:
			"Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
	},
	// More products...
];
const footerNavigation = {
	products: [
		{ name: "Bags", href: "#" },
		{ name: "Tees", href: "#" },
		{ name: "Objects", href: "#" },
		{ name: "Home Goods", href: "#" },
		{ name: "Accessories", href: "#" },
	],
	company: [
		{ name: "Who we are", href: "#" },
		{ name: "Sustainability", href: "#" },
		{ name: "Press", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Privacy", href: "#" },
	],
	customerService: [
		{ name: "Contact", href: "#" },
		{ name: "Shipping", href: "#" },
		{ name: "Returns", href: "#" },
		{ name: "Warranty", href: "#" },
		{ name: "Secure Payments", href: "#" },
		{ name: "FAQ", href: "#" },
		{ name: "Find a store", href: "#" },
	],
};

const mobileMenuOpen = ref(false);
const mobileFiltersOpen = ref(false);
</script>
