const user = [
	{
		path: "/",
		component: () => import("../layouts/default.vue"),
		name: "home",
		meta: { requiresAdmin: true },
		redirect: { name: "dashboard" },
		children: [
			{
				path: "dashboard",
				name: "dashboard",
				component: () => import("../pages/index.vue"),
			},
			{
				path: "profile",
				name: "profile",
				component: () => import("../pages/profile/index.vue"),
				children: [
					{
						path: "kyc",
						name: "kyc",
						component: () =>
							import("../pages/profile/kyc/index.vue"),
					},
				],
			},
			{
				path: "cart",
				name: "cart",
				component: () => import("../pages/cart/index.vue"),
			},
			{
				path: "products",
				name: "products",
				component: () => import("../pages/products/index.vue"),
			},
			{
				path: "orders",
				name: "orders",
				component: () => import("../pages/orders/index.vue"),
			},
			{
				path: "teams",
				name: "teams",
				component: () => import("../pages/teams/index.vue"),
			},
			{
				path: "payments",
				name: "payments",
				component: () => import("../pages/payments/index.vue"),
			},
			{
				path: "transactions",
				name: "transactions",
				component: () => import("../pages/transactions/index.vue"),
			},
			{
				path: "animate",
				name: "animate",
				component: () => import("../pages/animate/index.vue"),
			},
		],
		// beforeEnter(to, from, next) {
		// 	// ...
		// 	if (!isAuthenticated()) {
		// 		next({ name: "login" });
		// 	} else {
		// 		if (localStorage.getItem("role") !== "admin") {
		// 			next();
		// 		} else {
		// 			next({ name: "manage-user" });
		// 		}
		// 	}
		// },
	},
];

function isAuthenticated() {
	return localStorage.getItem("token");
}

export default user;
