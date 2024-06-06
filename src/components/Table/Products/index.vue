<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useFormatCurrency } from "@/composables/useFormatCurrency";
import { onMounted, reactive, ref } from "vue";
import { gsap } from "gsap";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";

import Product from '../../../api/products/product.js';
import Cart from '../../../api/carts/cart.js';
import { useStore} from "vuex"
const {getProduct, responseProduct} = Product();
const{addToCart} = Cart();
const store = useStore();
onMounted(() => {
	console.log( store.getters['user']);
});
const productList: {
	index: number;
	images: string;
	name: string;
	describe: string;
	price: number;
	discounted_price: number;
}[] = reactive([
	{
		index: 1,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 2,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt, mang đến niềm vui cho người ...",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 3,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 4,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 5,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 6,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 7,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 8,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 9,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 10,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 11,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 12,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 13,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 14,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 15,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 16,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 17,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 18,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 19,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
	{
		index: 20,
		images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
		name: "Tai nghe Bluetooth Apple AirPods 3 MagSafe",
		describe: "sản phẩm chất liệu tốt",
		price: 1000000,
		discounted_price: 600000,
	},
]);

// xử lý chuyển trang
const handleSelected = (index: number) => {
	router.push("/products/describe");
};

//Infinite Scroll
const loading = ref(true);
const index = 0;
const limit = 8;
let newProducts = productList.splice(index, limit);

const load = () => {
	setTimeout(() => {
		loading.value = false;
		if (productList.length > 0) {
			newProducts = newProducts.concat(productList.splice(index, limit));
		} else {
			loading.value = false;
		}
	}, 2000);
};

const beforeEnter = (el: HTMLElement) => {
	el.style.opacity = "0";
	el.style.transform = "translateX(-100px)";
};

const enter = (el: HTMLElement, done: () => void) => {
	setTimeout(() => {
		gsap.to(el, {
			opacity: 1,
			x: 0,
			duration: 0.8,
			onComplete: done,
		});
	});
};
function addcart(id) {
    addToCart(id);
}
onMounted(() => {
  getProduct();
	const elements = document.querySelectorAll(".product-grid .product");
	elements.forEach((el, index) => {
		gsap.fromTo(
			el,
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, duration: 0.5, delay: index * 0.1 }
		);
	});
});
const getImageUrl = (imagePath) => {
  const baseUrl = 'http://127.0.0.1:8000';
  const modifiedImagePath = imagePath.replace('public', 'storage');
  return `${baseUrl}/${modifiedImagePath}`;
};
</script>
<template>
	<transition-group
		name="fade"
		tag="div"
		appear
		@before-enter="beforeEnter as any"
		@enter="enter as any"
		class="product-grid grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-6 justify-around bg-white rounded-[10px] mt-[10px]"
	>
		<div
			v-for="(product, index) in responseProduct.data"
			:key="index"
			:data-index="index"
			class="product shadow-xl transition duration-300 rounded-[10px] hover:shadow-2xl cursor-pointer pb-3"
		>
			<div class="space-y-2 relative group">
				<div class="">
					<a-image
                    @click="handleSelected(index)"
						:src="getImageUrl(product.images[0]['image_path'])"
						:preview="false"
						class="object-fill"
					/>
					<div
						class="h-7 w-[40px] md:w-[60px] icon-center justify-center absolute top-[5px] right-[5px] bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-md text-center text-white text-sm"
					>
						{{ product.commission_rate }}%
					</div>
				</div>
				<div class="px-3 space-y-3 relative group">
					<div class="text-xs font-thin text-slate-500">
                        {{ product.name }}
					</div>
					<div class="text-start md:text-base line-clamp-2">
						{{ product.name }}
					</div>
					<div class="flex space-x-3">
						<span
							class="color-secondary self-center font-semibold inline-block align-middle"
							>{{
								useFormatCurrency(product.price)
							}}</span
						>
						<!-- <span
							class="self-center font-thin text-xs inline-block align-middle line-through"
							>{{
								useFormatCurrency(product.discounted_price)
							}}</span
							overlay absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-end
						> -->
					</div>

					<div
						class="overlay absolute" style="border: 1px solid;    position: relative;
    bottom: 239px;"
					>
						<div class="bg-white p-4 rounded-md">
							<div class="flex justify-center">
								<a-button
									class="icon-center rounded-2xl bg-secondary"
								>
                                <span @click="addcart(product.id)">Thêm vào giỏ</span>
                                    <ShoppingCartOutlined class="text-xl" />
								</a-button>
							</div>
							<div class="mt-3">
								<ul
									class="list-disc list-inside text-xs font-thin text-slate-500"
								>
                                <li>Loại: {{ product.category['name'] }}</li>
									<li>Ngày tạo: {{ product.created_at }}</li>
									<!-- <li>HSD: 1 tháng</li> -->
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition-group>
	<p
		class="text-center ml-auto mr-auto mb-[20px] text-xl mt-5"
		:class="loading ? 'text-[#39a39e]' : 'text-[#cf6363]'"
	>
		{{ loading ? "Đang tải thêm..." : "Không còn sản phẩm nào" }}
	</p>
</template>

<style scoped>
/* .group .overlay {
    transform: translateY(100%);
    z-index: 10 !important;
}
.group-hover .overlay {
    transform: translateY(0);
} */

.group {
	z-index: 1;
	position: relative;
}

.group .overlay {
	z-index: 2;
	display: none;
}

.group:hover .overlay {
	display: block;
}
</style>