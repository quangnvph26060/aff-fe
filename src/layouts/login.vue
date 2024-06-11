<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Auth from '../api/auth/index.js';
const router = useRouter();
const{loginForm, submitLogin, errors, resultOtp,submitResgiter } = Auth();

// onMounted(async () => {
//     await register(formSignup);
// });
interface FormLogin {
	phone: string;
	password: string;
}

interface FormSignup {
	phone: string;
	password: string;
	confirmPassword: string;
	referral_code: string,
}

const formLogin = reactive<FormLogin>({
	phone: "",
	password: "",
});

const formSignup = reactive<FormSignup>({
	phone: "",
	password: "",
	confirmPassword: "",
	referral_code: "",
	name: "",
	email: "",
	otp:"",
});

// const onFinish = (values: any) => {
// 	console.log("Success:", values);
// };

const onFinishFailed = (errorInfo: any) => {
	
	console.log("Failed:", errorInfo);
};
const otpValue = ref('');
const submitOtp = (event) => {
  event.preventDefault();
  formSignup.otp = otpValue.value;
  submitResgiter(formSignup,'sendotp');
};
const submitOtp1 = (event) => {
  event.preventDefault();
  formSignup.otp = otpValue.value;
  submitResgiter(formSignup,'register');
};
type menu = {
	name: string;
	icon: string;
	url: string;
};
const switchForm = ref(false);

const headerMenu: menu[] = reactive([
	{
		name: "Dashboard",
		icon: "HomeFilled",
		url: "/",
	},
	{
		name: "Cá nhân",
		icon: "ShoppingCart",
		url: "/profile",
	},

	{
		name: "Đăng ký",
		icon: "Key",
		url: "/signup",
	},
	{
		name: "Đăng nhập",
		icon: "Avatar",
		url: "/login",
	},
]);

// const handleLogin: () => void = () => {
//     if (
//         (formLogin.phone === 'admin' && formLogin.password === 'admin') ||
//         (formLogin.phone === 'user' && formLogin.password === 'user')
//     ) {
//         formLogin.phone = formLogin.phone === 'admin' ? 'admin' : 'user'

//         // Thực hiện login với role_id tương ứng
//         formLogin.phone === 'admin' ? state.login(2) : state.login(1)
//     }
//     const { user, token } = await
// }

const handleLogin = async () => {
	interface ApiResponse {
		user: string;
	}
	console.log(formLogin.phone, formLogin.password);

	const user = await $fetch<ApiResponse>("/api/auth/login", {
		method: "POST",
		body: {
			email: formLogin.phone,
			password: formLogin.password,
		},
	});

	console.log(user);
};
</script>

<template>
	<div class="flex justify-center">
		<!-- begin::Header -->
		<header class="hidden md:flex fixed z-10 flex-col mt-6 w-4/5">
			<nav
				class="flex gap-5 justify-between items-center px-6 py-5 w-full text-xs font-bold leading-4 rounded-2xl border-2 border-white border-solid shadow-lg backdrop-blur-md bg-white/30"
			>
				<div class="flex gap-3 self-stretch my-auto text-sm">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/2447d51c75b5d3cbfdf3ce6e7427a3e37a9ef0eeb37868ad7a8ecad167ef218c?apiKey=b3083cca144a416593ef7615d067aac0&"
						alt="Logo"
						class="shrink-0 aspect-square w-[22px]"
					/>
					<div class="flex-auto my-auto">AFFILIATE </div>
				</div>
				<div
					class="flex gap-10 justify-between self-stretch my-auto text-center text-gray-700"
				>
					<div
						class="flex flex-col justify-center py-1.5 whitespace-nowrap"
						v-for="item in headerMenu"
					>
						<button class="flex gap-1 justify-center">
							<div class="text-sm">{{ item.name }}</div>
						</button>
					</div>
				</div>
				<button
					class="justify-center self-stretch px-2 py-2.5 text-center text-white rounded-[34.5px] max-md:px-5"
				></button>
			</nav>
		</header>
		<!-- end::Header -->

		<!-- begin::Login -->
		<div class="grid grid-cols-2 justify-center gap-5 w-screen">
			<!-- begin::Login Form -->
			<div class="col-span-2 lg:col-span-1 flex justify-center">
				<main class="mt-48">
					<div>
						<h1
							class="text-3xl font-bold leading-10 text-center text-teal-300"
						>
							{{
								switchForm ? "Chào mừng " : "Chào mừng trở lại"
							}}
						</h1>
					</div>
					<div class="mt-10">
						<!-- begin::Login From -->
						<a-form
							:model="formLogin"
							name="basic"
							autocomplete="off"
							@finish="onFinish"
							@finishFailed="onFinishFailed"
							class="w-full px-5 lg:px-0 lg:w-[400px] h-10"
							layout="vertical"
							v-if="!switchForm"
						>
							<a-form-item
								label="Tài Khoản"
								name="phone"
								
							>
								<a-input
									v-model:value="loginForm.phone"
									class="h-10" :class="[errors.phone ? 'border border-danger' : '']" 
								/>
							</a-form-item>
							<span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
							<a-form-item
								label="Mật khẩu"
								name="password"
								
							>
								<a-input-password
									v-model:value="loginForm.password"
									class="h-10" :class="[errors.password ? 'border border-danger' : '']" 
								/>
							</a-form-item>
							<span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
						
							<a-form-item>
								<a-button
									type="submit"
									class="w-full h-9 bg-secondary"
									@click="submitLogin">
									Đăng nhập
								</a-button>
							</a-form-item>
							<p
								class="text-sm font-bold leading-5 mt-7 text-center max-md:ml-2.5"
							>
								<span>Chưa có tài khoản? </span>
								<a
									href="#"
									class="text-teal-300"
									@click="switchForm = !switchForm"
									>Đăng ký</a
								>
							</p>
						</a-form>
						<!-- end::Login Form -->

						<!-- begin::Signup Form -->
						<a-form
							:model="formSignup"
							name="basic"
							autocomplete="off"
							@finish="onFinish"
							@submit="submitOtp"
							class="w-[360px] lg:w-[400px] h-10"
							layout="vertical"
							v-else
						>
						
						<a-form-item
								label="Họ và tên"
								name="name"
							>
								<a-input
									v-model:value="formSignup.name"
									class="h-10" :class="[errors.name ? 'border border-danger' : '']" 
								/>
						</a-form-item>
							<span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
							<a-form-item
								label="Email"
								name="email"
							>
								<a-input
									v-model:value="formSignup.email"
									class="h-10" :class="[errors.email ? 'border border-danger' : '']" 
								/>
							</a-form-item>
							<span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
							<a-form-item
								label="Số diện thoại"
								name="phone"
							>
								<a-input
									v-model:value="formSignup.phone"
									class="h-10" :class="[errors.phone ? 'border border-danger' : '']" 
								/>
							</a-form-item>
							<span class="text-danger" v-if="errors.phone">{{ errors.phone }}</span>
							<a-form-item
								label="Mật khẩu"
								name="password"
							>
								<a-input-password
									v-model:value="formSignup.password"
									class="h-10"  :class="[errors.password ? 'border border-danger' : '']" 
								/>
							</a-form-item>
							<span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
							<a-form-item
								label="Xác nhận mật khẩu"
								name="confirmPassword"
							>
								<a-input-password
									v-model:value="formSignup.confirmPassword"
									class="h-10"  :class="[errors.confirmPassword ? 'border border-danger' : '']" 
								/>
							</a-form-item>
							<span class="text-danger" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
							<a-form-item
								label="Mã giới thiệu"
								name="referral_code"
							>
								<a-input
									v-model:value="formSignup.referral_code"
									class="h-10"
								/>
							</a-form-item>
							<div>
							<div v-if="resultOtp.status === true" class="mb-2">
								<form @submit="submitOtp1">
									<div class="flex">
										<div class="form-group mr-2">
											<input type="text" class="form-control" v-model="otpValue" placeholder="Nhập Mã OTP" />
										</div>
										<button type="submit" class="btn  css-dev-only-do-not-override-16xcw0g ant-btn ant-btn-primary  h-9 bg-secondary">Xác Nhận</button>
									</div>
								</form>
								</div>
							</div>

							<a-form-item>
								<a-button
									type="primary"
									html-type="submit"
									class="w-full h-9 bg-secondary"
									>Đăng Ký</a-button
								>
							</a-form-item>
							<p
								class="text-sm font-bold leading-5 mt-7 text-center max-md:ml-2.5"
							>
								<span>Đã có tài khoản? </span>
								<a
									href="#"
									class="text-teal-300"
									@click="switchForm = !switchForm"
									>Đăng nhập</a
								>
							</p>
						</a-form>
						<!-- end::Signup Form -->
					</div>
				</main>
			</div>
			<!-- end::Login Form -->

			<!-- begin::Banner -->
			<div class="hidden lg:block col-span-1">
				<a-image
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b6afb56aecf96cb91282d9c4221d0ed42465a149c8908d687bc58e604e84e5?apiKey=b3083cca144a416593ef7615d067aac0&"
					alt="Decorative image"
					:preview="false"
					class="h-full w-full"
				/>
			</div>
			<!-- end::Banner -->
		</div>
		<!-- end::Login -->
	</div>
</template>

<style></style>
