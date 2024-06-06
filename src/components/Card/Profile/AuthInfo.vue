<template>
	<div>
		<a-card title="Thông tin đăng nhập">
			<a-descriptions :column="1">
				<a-descriptions-item
					v-for="(value, key) in userData"
					:key="key"
					:label="formatLabel(key)"
				>
					{{ value }}
				</a-descriptions-item>
			</a-descriptions>
		</a-card>
	</div>
</template>

<script setup lang="ts">
interface User {
	name: string;
	password: string;
}

const userData: User = {
	name: "Nguyễn Văn A",
	password: "0121223214",
};

const formatLabel = (key: keyof User) => {
	switch (key) {
		case "name":
			return "Tên đăng nhập";
		case "password":
			return "Mật khẩu";
		default:
			return key;
	}
};
</script>

<style></style>
