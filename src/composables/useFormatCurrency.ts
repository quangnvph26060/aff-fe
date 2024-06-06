export const useFormatCurrency = (value: number) => {
	return Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(value);
};
