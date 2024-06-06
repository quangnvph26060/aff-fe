<script setup lang="ts">
import { ref } from "vue";
import { useFormatCurrency } from "../../composables/useFormatCurrency";

const method = ref("Chọn phương thức");

const balance = ref<number>(1000000000);
const withdraw = ref<number>(10000);

const focus = () => {
	// console.log('focus')
};

const handleChange = (value: string) => {
	// console.log(`selected ${value}`)
};
</script>

<template>
	<div>
		<a-card title="Yêu cầu rút tiền" :bordered="false" class="w-100">
			<a-descriptions title="Số dư">
				<a-descriptions-item label="Số dư khả dụng">{{
					useFormatCurrency(balance)
				}}</a-descriptions-item>
			</a-descriptions>

			<div class="flex gap-5">
				<!-- begin::Withdraw Input -->
				<a-input-number
					v-model:value="withdraw"
					:formatter="
						(value) =>
							`đ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
					"
					:parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
					:min="10000"
					:step="1000"
					:max="balance"
					class="w-[200px]"
				/>
				<!-- end::Withdraw Input -->

				<!-- begin::Method Withdraw -->
				<a-select
					ref="select"
					v-model:value="method"
					style="width: 200px"
					@focus="focus"
					@change="handleChange(method)"
				>
					<a-select-option value="0">Tiền mặt</a-select-option>
					<a-select-option value="1">Chuyển khoản</a-select-option>
				</a-select>
				<!-- end::Method Withdraw -->

				<!-- begin::Submit Request -->
				<a-button class="bg-secondary text-white"
					>Tạo yêu cầu rút tiền</a-button
				>
				<!-- end::Submit Request -->
			</div>
		</a-card>
	</div>
</template>

<style lang=""></style>
