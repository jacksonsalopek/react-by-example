import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "./CommonHooks.stories";

const { Default, WithNoItems, WithLotsOfItems } = composeStories(stories);

describe("CommonHooks", () => {
	it("should match snapshot (default)", () => {
		render(<Default />);
		expect(screen.getByTestId("common-hooks")).toMatchSnapshot();
	});

	it("should match snapshot (with no items)", () => {
		render(<WithNoItems />);
		expect(screen.getByTestId("common-hooks")).toMatchSnapshot();
	});

	it("should match snapshot (with lots of items)", () => {
		render(<WithLotsOfItems />);
		expect(screen.getByTestId("common-hooks")).toMatchSnapshot();
	});
});
