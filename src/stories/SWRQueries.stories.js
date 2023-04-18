import { SWRQueries } from "./SWRQueries";

export default {
	title: "Example/SWRQueries",
	component: SWRQueries,
	tags: ["autodocs"],
};

export const Default = {
	args: {
		requestUrl: "https://cat-fact.herokuapp.com/facts/random",
	},
};
