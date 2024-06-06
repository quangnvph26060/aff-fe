<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
// import { useFormatCurrency } from "../../composables/useFormatCurrency";
import Product from '../../../api/products/product.js';
import { useFormatCurrency } from "@/composables/useFormatCurrency";
const {getProduct, responseProduct, findProduct} = Product();

const url = window.location.href;
const id = url.substring(url.lastIndexOf('/') + 1);
   findProduct(id);
// const imgs: {
// 	index: number;
// 	image: string;
// }[] = reactive([
// 	{
// 		index: 1,
// 		image: "https://odinshop.vn/wp-content/uploads/2022/05/IMG_8227.jpg",
// 	},
// 	{
// 		index: 2,
// 		image: "https://lili.vn/wp-content/uploads/2020/11/vong-tay-bac-925-dinh-pha-le-swarovski-1.jpg",
// 	},
// ]);
// const productList: {
// 	index: number;
// 	name: string;
// 	describe: string;
// 	oldPrice: number;
// 	price: number;
// 	quantitySold: number;
// }[] = reactive([
// 	{
// 		index: 1,
// 		name: "Vòng tay huyết áp",
// 		describe:
// 			"Sản phẩm với các thành phần có nguồn gốc tự nhiên như rau má là các dưỡng chất quan trọng để có một làn da được dưỡng ẩm mềm mại, ngoài ra còn giúp làn da ngăn chặn quá trình oxy hóa cũng như duy trì độ ẩm để làn da của bạn luôn luôn trẻ trung, đẹp tự nhiên.",
// 		oldPrice: 1000000,
// 		price: 500000,
// 		quantitySold: 2500,
// 	},
// ]);

// interface Product {
// 	brand: string;
// 	model: string;
// 	availability: number;
// 	name: string;
// 	description: string;
// 	type: string;
// 	price: number;
// 	discount: number;
// 	images: string;
// }

// const productData: Product = reactive({
// 	brand: "Apple",
// 	model: "AirPods Pro",
// 	availability: 10,
// 	name: "Tai nghe không dây Apple AirPods Pro",
// 	description:
// 		"-Tai nghe không dây Apple AirPods Pro chính hãng\n- Chống ồn hiệu quả\n- Âm thanh chất lượng\n- Thiết kế sang trọng\n- Kết nối nhanh chóng\n- Sạc nhanh",
// 	type: "Tai nghe",
// 	price: 5000000,
// 	discount: 10,
// 	images: "https://tiki.vn/blog/wp-content/uploads/2023/01/airpod-3-va-airpod-pro.jpg",
// });

// const option = ref(null);
// const quantity = ref(1);

// const descriptionList = computed(() => {
// 	return productData.description
// 		.split("\n")
// 		.map((item) => item.replace(/^-/, "").trim());
// });

// const activeKey = ref("1");
const getImageUrl = (imagePath) => {
  const baseUrl = 'http://127.0.0.1:8000';
  const modifiedImagePath = imagePath.replace('public', 'storage');
  return `${baseUrl}/${modifiedImagePath}`;
};
</script>
<template>
	<div class="bg-[white] p-5 space-y-5">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-x-[20px]">
			<div class="col-span-1 flex justify-center">
				<a-image
				:src="getImageUrl(responseProduct.data?.images[0]['image_path'] ?? [])"
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
						class="h-[40px] col-span-3 lg:col-span-2"
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Harum deserunt, eos repellat dignissimos expedita obcaecati
					sunt sed doloremque illo itaque adipisci aperiam similique!
					Laborum rerum minima quam cumque, quis ipsum quos sunt
					repudiandae culpa totam iure fugit facilis molestiae
					blanditiis ab perferendis voluptatem obcaecati. Ipsam vitae
					ipsum maiores veritatis dolorem officiis enim commodi, natus
					aliquid dolores, cum veniam modi. Vel enim quidem
					exercitationem vitae accusantium aperiam obcaecati esse
					saepe vero cumque consequatur, quo hic aliquid alias?
					Eligendi suscipit, deserunt maiores nostrum doloribus quos
					ipsam alias error quibusdam veritatis fuga corrupti. Quae
					placeat error, pariatur distinctio repellat tempore nam
					odio. Corporis dolorum est, quos quae blanditiis nobis fugit
					ea sit. Qui ullam, similique voluptatibus placeat iste
					impedit cupiditate perferendis nemo corrupti! Expedita earum
					accusantium alias quis labore maiores vitae mollitia.
					Nesciunt ipsum pariatur, unde, nulla nobis ducimus
					voluptatibus omnis nam iure hic temporibus earum atque,
					soluta eligendi totam modi! Pariatur, officiis eius eveniet
					saepe non id veniam eum in sequi qui eaque quos modi tempora
					vero assumenda molestiae nobis maiores exercitationem soluta
					earum ab velit minima? Magni doloremque voluptatibus,
					recusandae reiciendis accusantium libero sapiente,
					laboriosam deleniti cumque porro quibusdam obcaecati aliquam
					vero doloribus officia maxime sit distinctio quo delectus
					ullam dicta.
				</a-tab-pane>
				<a-tab-pane key="2" tab="Đánh giá">{{
					productData.description
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
			<CardProductList />
		</div>
	</div>
</template>

<style scoped>
:deep(.ant-tabs-nav-wrap) {
	width: 80%;
}
</style>
