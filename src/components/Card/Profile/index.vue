//TODO: Add CardProfile to Dashboard
<template>
	<div>
		<a-card title="Tài khoản">
			<template #extra>
				<router-link :to="{ name: 'profile' }">
					<span class="color-secondary font-semibold"> Xem thêm</span>
				</router-link>
			</template>
			<a-form :model="props" label-width="auto" label-position="top">
				<a-form-item label="" class="">
					<a-tag v-if="props.isAdmin" color="success" size="small">
						{{
							props.isVerified
								? "đã được xác thực"
								: "chưa được xác thực"
						}}
					</a-tag>
				</a-form-item>
				<a-form-item label="Mã giới thiệu:">
					<div class="flex justify-between">
						<div
							v-text="props.referralCode"
							class="self-center"
						></div>
						<a-button @click="copy(source)">Giới thiệu </a-button>
					</div>
				</a-form-item>
				<a-form-item label="Số dư chính:">
					<div>
						{{ useFormatCurrency(props.mainWallet) }}
					</div>
				</a-form-item>
				<a-form-item label="Chờ thanh toán:">
					<div>
						{{ useFormatCurrency(props.pendingWallet) }}
					</div>
				</a-form-item>
			</a-form>
		</a-card>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useFormatCurrency } from "../../../composables/useFormatCurrency";
import { useClipboard } from "@vueuse/core";

const props = defineProps<{
	isAdmin: boolean;
	isVerified: boolean;
	referralCode: string;
	mainWallet: number;
	pendingWallet: number;
}>();
const source = ref(props.referralCode);
const { text, copy, copied, isSupported } = useClipboard({
	source,
});
</script>
