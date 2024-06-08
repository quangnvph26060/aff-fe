<script setup lang="ts">
import { ref, computed, reactive, watch, onMounted } from "vue";
import { gsap } from "gsap";
import { useFormatCurrency } from "../../composables/useFormatCurrency";
import { ArrowRightOutlined, ClearOutlined } from "@ant-design/icons-vue";
import Cart from '../../api/carts/cart.js';

const{getToCart, responseCart, delToCart, updateToCart} = Cart();
interface FormState {
	name: string;
	phone: string;
	address: string;
}

const formState: FormState = reactive({
	name: "",
	phone: "",
	address: "",
});
const totalPrice = ref('');
const data = ref('');
onMounted(async () => {
    await getToCart();
	console.log(responseCart.data);
	
    data.value = responseCart.data;
});


function handleChange(item,value) {
    updateToCart(item.id, value)
}

function delProduct(id){
    delToCart(id);
}
const getImageUrl = (imagePath) => {
  const baseUrl = 'http://127.0.0.1:8000';
  const modifiedImagePath = imagePath.replace('public', 'storage');
  return `${baseUrl}/${modifiedImagePath}`;
};
</script>

<template>
	<div class="grid grid-cols-10 gap-6">
		<div class="flex flex-col max-md:mt-10 col-span-10 lg:col-span-6">
			<section
				class="flex flex-col mt-5 font-medium text-neutral-700 max-md:max-w-full"
			>
				<p class="mt-1 text-sm text-stone-900 max-md:max-w-full">
					You have {{ responseCart.data.length }} items in your cart
				</p>
				<article
					class="flex gap-5 justify-between items-center py-2.5 pr-10 pl-2.5 mt-8 w-full bg-white rounded-2xl shadow-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full"
					v-for="(item, index) in responseCart.data"
                    :key="index"
				>
					<div class="flex gap-5 self-stretch text-stone-900">
						<a-image
						v-if="item.product && item.product.images && item.product.images.length > 0"
						:src="getImageUrl(item.product.images[0].image_path)"
						:preview="false"
						class="object-fill"
						style="width: 100px; height: 100px;"
						@click="handleSelected(product.id)"
						></a-image>
						<a-image
						v-else
						:src="'Capture.PNG'" 
						:preview="false"
						class="object-fill"
						style="width: 100px; height: 100px;"
						@click="handleSelected(product.id)"
						></a-image>
						<div class="flex flex-col my-auto">
							<h3 class="text-lg ">{{ item.product.name }}</h3>
							<p class="mt-2.5 text-sm text-gray" >{{ useFormatCurrency(item.product.price) }}</p>
						</div>
					</div>
					<div
						class="flex gap-2.5 self-stretch my-auto text-2xl font-semibold leading-6 whitespace-nowrap"
					>
					<a-input-number
                            v-model:value="item.amount" 
                            size="large"
                            :min="1"
                            :max="100000"
                            @change="handleChange(item,item.amount)"
                        />
					</div>
					<div
						class="flex gap-5 justify-between self-stretch my-auto text-sm text-right whitespace-nowrap"
					>
						<span class="my-auto">{{
							 useFormatCurrency(item.amount * item.product.price)
						}}</span>
						 <ClearOutlined class="text-xl cursor-pointer" @click="delProduct(item.id)"/>
					</div>
				</article>
			</section>
		</div>
		<div
			class="flex flex-col grow px-5 py-5 mx-auto col-span-10 lg:col-span-4 w-full font-medium bg-[#1216d3] rounded-3xl mt-10"
		>
			<header class="flex gap-5 text-2xl font-semibold text-white">
				<h1 class="flex-auto my-auto">Thông tin nhận hàng</h1>
			</header>
			<section>
				<a-form layout="vertical" :model="formState" class="text-white">
					<a-form-item label="Họ và tên" class="mt-5 mb-2 text-white">
						<a-input
							class="h-[40px] custom-input"
							v-model:value="formState.name"
							placeholder="ex: Nguyễn Văn A"
						/>
					</a-form-item>
					<a-form-item class="mb-2" label="Số điện thoại">
						<a-input
							class="h-[40px]"
							v-model:value="formState.phone"
							placeholder="ex: 0987654321"
						/>
					</a-form-item>
					<a-form-item class="mb-2" label="Địa chỉ">
						<a-input
							class="h-[40px]"
							v-model:value="formState.address"
							placeholder="ex: 123 Đường ABC, Phường XYZ, Quận 1"
						/>
					</a-form-item>
					<hr
						class="shrink-0 mt-5 h-px bg-indigo-500 border border-indigo-500 border-solid"
					/>
					<section
						class="flex gap-5 justify-between mt-5 text-sm text-white"
					>
						<div class="flex flex-col">
							<div>Giỏ hàng</div>
							<div class="mt-4">Phí ship</div>
							<div class="mt-2.5">Tổng tiền</div>
						</div>
						<div class="flex flex-col text-right whitespace-nowrap">
							<div>
								{{ useFormatCurrency(responseCart.total) }}
							</div>
							<div class="mt-3.5">{{ useFormatCurrency(0) }}</div>
							<div class="mt-4">
								{{ useFormatCurrency(responseCart.total) }}
							</div>
						</div>
					</section>
					<a-form-item class="mt-5">
						<a-button
							type="primary"
							class="w-full h-[60px] flex justify-between items-center text-base bg-secondary"
						>
							<span class="font-semibold">{{
								 useFormatCurrency(responseCart.total)
							}}</span>
							<span class="font-semibold">
								Thanh toán <ArrowRightOutlined class="ml-2" />
							</span>
						</a-button>
					</a-form-item>
				</a-form>
			</section>
		</div>
	</div>
</template>

<style scoped>
:deep(label) {
	color: white !important;
}

.ant-input {
	color: white;
	background-color: #4244c9;
	backdrop-filter: blur(12px);
}

.ant-input::placeholder {
	color: #a1a1aa;
}

.ant-input:focus {
	backdrop-filter: blur(5px);
}
</style>
