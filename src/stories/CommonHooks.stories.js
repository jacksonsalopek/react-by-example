import { CommonHooks } from "./CommonHooks";

export default {
	title: "Example/CommonHooks",
	component: CommonHooks,
	tags: ["autodocs"],
};

export const Default = {};

export const WithNoItems = {
	args: {
		initialItems: [],
	},
};

export const WithLotsOfItems = {
	args: {
		initialItems: Array(100)
			.fill({})
			.map((_, i) => {
				return {
					id: i,
					name: `Item ${i}`,
					quantity: i,
				};
			}),
	},
};
