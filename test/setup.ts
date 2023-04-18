import "@testing-library/jest-dom";
import { setProjectAnnotations } from "@storybook/testing-react";
import * as projectAnnotations from "../.storybook/preview";

setProjectAnnotations(
	projectAnnotations as Parameters<typeof setProjectAnnotations>[0],
);
