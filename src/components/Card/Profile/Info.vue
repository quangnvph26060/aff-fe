<template>
	<div>
		<a-card title="Thông tin cá nhân">
			<a-form
				:label-col="labelCol"
				:wrapper-col="wrapperCol"
				style="max-width: 600px"
				:disabled="editInfo"
			>
				<a-form-item
					v-for="(value, key) in userData"
					:key="key"
					:label="formatLabel(key)"
				>
					<a-input :value="value" />
				</a-form-item>
			</a-form>
			<div class="flex justify-between gap-3">
				<a-button
					v-if="!editInfo"
					class="w-1/2"
					@click="() => (editInfo = true)"
					>Lưu</a-button
				>
				<a-button v-else class="w-1/2" @click="() => (editInfo = false)"
					>Cập nhật</a-button
				>
				<a-button class="w-1/2">
					<router-link :to="{ name: 'kyc' }"> Định danh </router-link>
				</a-button>
			</div>
		</a-card>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const labelCol = { style: { width: "100px" } };
const wrapperCol = { span: 24 };

const editInfo = ref<boolean>(true);

interface User {
	name: string;
	phone: string;
	
	address: string;
}

const userData: User = {
	name: "Nguyễn Văn A",
	phone: "0121223214",

	address: "Mộ Lao, Hà Đông, Hà Nội",
};

const formatLabel = (key: keyof User) => {
	switch (key) {
		case "name":
			return "Tên";
		case "phone":
			return "Số điện thoại";
		case "address":
			return "Địa chỉ";
		default:
			return key;
	}
};
</script>

<style></style>
