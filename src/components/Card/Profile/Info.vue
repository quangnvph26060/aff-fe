<template>
	<div>
		<a-card title="Thông tin cá nhân">
			<form  class="ant-form ant-form-horizontal css-dev-only-do-not-override-16xcw0g" style="max-width: 600px;">
				<div class="ant-form-item css-dev-only-do-not-override-16xcw0g">
					<div class="ant-row ant-form-row css-dev-only-do-not-override-16xcw0g">
						<div class="ant-col ant-form-item-label css-dev-only-do-not-override-16xcw0g" style="width: 100px;">
							<label class="" title="Tên">Tên</label>
						</div>
						<div class="ant-col ant-col-24 ant-form-item-control css-dev-only-do-not-override-16xcw0g">
							<div class="ant-form-item-control-input">
								<div class="ant-form-item-control-input-content">
									<input :readonly="editInfo"  type="text" 
									class="ant-input css-dev-only-do-not-override-16xcw0g"
									 v-model="user.name">
								</div>
							</div>
						</div>
					</div>
				</div>
					<div class="ant-form-item css-dev-only-do-not-override-16xcw0g">
						<div class="ant-row ant-form-row css-dev-only-do-not-override-16xcw0g">
							<div class="ant-col ant-form-item-label css-dev-only-do-not-override-16xcw0g" style="width: 100px;">
								<label class="" title="Số điện thoại">Số điện thoại</label>
							</div>
							<div class="ant-col ant-col-24 ant-form-item-control css-dev-only-do-not-override-16xcw0g">
								<div class="ant-form-item-control-input">
									<div class="ant-form-item-control-input-content">
										<input :readonly="editInfo"  type="text" class="ant-input css-dev-only-do-not-override-16xcw0g" v-model="user.phone">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ant-form-item css-dev-only-do-not-override-16xcw0g">
						<div class="ant-row ant-form-row css-dev-only-do-not-override-16xcw0g">
							<div class="ant-col ant-form-item-label css-dev-only-do-not-override-16xcw0g" style="width: 100px;">
								<label class="" title="Địa chỉ">Địa chỉ</label>
							</div>
							<div class="ant-col ant-col-24 ant-form-item-control css-dev-only-do-not-override-16xcw0g">
								<div class="ant-form-item-control-input">
									<div class="ant-form-item-control-input-content">
										<input type="text" class="ant-input css-dev-only-do-not-override-16xcw0g" v-model="user.address">
									</div>
								</div>
							</div>
						</div>
					</div>
			</form>

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
				<!-- <a-button class="w-1/2">
					<router-link :to="{ name: 'kyc' }"> Định danh </router-link>
				</a-button> -->
			</div>
		</a-card>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore} from "vuex";
const store = useStore();
const user = ref('');
onMounted(async () => {
	const userdata = await store.getters['user'];
	user.value = userdata;
});
const editInfo = ref<boolean>(true);

</script>

<style></style>
