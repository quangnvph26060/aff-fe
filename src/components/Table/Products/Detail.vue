<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
// import { useFormatCurrency } from "../../composables/useFormatCurrency";
import Product from '../../../api/products/product.js';
import CardProductList  from "../../Card/ProductList.vue";
import { useFormatCurrency } from "../../../composables/useFormatCurrency";
 import { useRouter } from 'vue-router'
const router = useRouter()
const { responseProduct, findProduct} = Product();

onMounted( async() => {
	const url = window.location.href;
	const id = url.substring(url.lastIndexOf('/') + 1);
 	await findProduct(id);
});
 const option = ref(null);
 const quantity = ref(1);



const activeKey = ref("1");
const getImageUrl = (imagePath) => {
  const baseUrl = 'http://127.0.0.1:8000';
  const modifiedImagePath = imagePath.replace('public', 'storage');
  return `${baseUrl}/${modifiedImagePath}`;
};
const handleSelected = (index: number) => {
	findProduct(index);
}
</script>
<template>
	<div class="bg-[white] p-5 space-y-5">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-x-[20px]">
			<div class="col-span-1 flex justify-center">
				
				<a-image v-if="responseProduct.data && responseProduct.data.images && responseProduct.data.images.length > 0"
					:src="getImageUrl(responseProduct.data.images[0]['image_path'])"
					class="object-cover max-w-[500px]"
					:preview="false"
				></a-image>
				
			</div>
			<div class="col-span-1 space-y-4 mt-5">
				<span class="text-2xl">
					<!-- {{ productData.name }} --> 
					{{ responseProduct.data.name }}
				</span>
				<!-- begin::Description -->
				<div>
					<!-- <ul class="list-disc list-inside space-y-1">
						<li
							v-for="(item, index) in descriptionList"
							:key="index"
							class="font-extralight text-sm"
						>
							{{ item }}
						</li>
					</ul> -->
					{{ responseProduct.data.description }}
				</div>
				<!-- end::Description -->
				<a-divider />
				<!-- begin::Option -->
				<!-- <div>
                    <a-radio-group
                        v-model:value="option"
                        class="grid grid-cols-4 lg:grid-cols-3 gap-2"
                    >
                        <a-radio-button value="blue" class="text-center rounded"
                            >Xanh</a-radio-button
                        >
                        <a-radio-button
                            value="black"
                            class="text-center rounded"
                            >Đen</a-radio-button
                        >
                        <a-radio-button value="gray" class="text-center rounded"
                            >Xám</a-radio-button
                        >
                    </a-radio-group>
                </div> -->
				<!-- end::Option -->
				<a-divider />
				<!-- begin::Price -->
				<div>
					<a-descriptions title="Giá tiền:">
						<a-descriptions-item>
							<span class="text-xl">
								<!-- {{ useFormatCurrency(productData.price) }} --> {{ useFormatCurrency(responseProduct.data.price) }}
							</span>
							<span
								class="text-base ml-3 line-through text-slate-400"
							>
								<!-- {{ useFormatCurrency(productData.price) }}   -->{{ responseProduct.data.commission_rate }} %
							</span>
						</a-descriptions-item>
					</a-descriptions>
				</div>
				<!-- end::Price -->

				<!-- begin::Quantity&Cart -->
				<div class="grid grid-cols-6 gap-4">
					<a-input-number
						v-model:value="quantity"
						:min="1"
						:max="100000"
						size="large"
						class="w-full col-span-6 lg:col-span-2"
					/>

					<a-button
						type="primary"
						class="h-[40px] col-span-3 lg:col-span-2 bg-secondary "
					>
						Mua ngay
					</a-button>
					<a-button
						class="h-[40px] color-secondary col-span-3 lg:col-span-2"
					>
						Thêm vào giỏ
					</a-button>
				</div>
				<!-- end::Quantity&Cart -->
			</div>
		</div>

		<!-- begin::Product Detail -->
		<div>
			<a-tabs v-model:activeKey="activeKey" class="xl:px-5">
				<a-tab-pane key="1" tab="Chi tiết sản phẩm">
					{{ responseProduct.data.description }}
				</a-tab-pane>
				<a-tab-pane key="2" tab="Đánh giá">{{
					responseProduct.data.description 
				}}</a-tab-pane>
			</a-tabs>
		</div>
		<!-- end::Product Detail -->

		<!-- sản phẩm tương tự -->
		<a-divider />
		<div class="mb-10">
			<div class="text-center">
				<span class="text-[18px] font-semibold"
					>Sản phẩm tương tự
				</span>
			</div>
			 <div class="scrollbar-flex-content space-x-4 my-4">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					<div
						v-for="product in responseProduct.productCategory"
						:key="product.index"
						class="shadow-xl transition duration-300 rounded-[10px] hover:shadow-2xl cursor-pointer pb-3 scrollbar-demo-item"
						@click="handleSelected(product.id)"
					>
						<div class="space-y-2">
						<div class="relative">
	
							<a-image
							v-if="product && product.images && product.images.length > 0"
							:src="getImageUrl(product.images[0]['image_path'])"
							:preview="false"
							class="object-fill h-[150px] lg:h-[200px]"
							></a-image>
							<div
							class="h-7 w-[60px] icon-center justify-center absolute top-[5px] right-[5px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-center text-white text-sm"
							>
							{{ product.commission_rate }} % off
							</div>
						</div>
						<div class="px-3 space-y-3">
							<div class="line-clamp-2 text-start">
							{{ product.name }}
							</div>
							<div class="flex justify-between">
							<span
								class="color-secondary self-center font-bold inline-block align-middle"
							>{{ useFormatCurrency(product.price) }}</span
							>
							<a-button
								type="primary"
								class="icon-center self-center rounded-2xl"
							>
								<ShoppingCartOutlined class="text-xl" />
							</a-button>
							</div>
						</div>
						</div>
					</div>
				</div>
    		</div>
		</div>
	</div>
</template>

<style scoped>
:deep(.ant-tabs-nav-wrap) {
	width: 80%;
}
</style>
