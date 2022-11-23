import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderHook, waitFor } from "@testing-library/react";
import { useWindowYOffset } from "../useWindowYOffset";

describe("useWindowYOffset", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render with initial value of 0", async () => {
		const customHook = renderHook(useWindowYOffset);
		expect(customHook.result.current).toBe(0);
	});

	it("should be true if event is 'scroll'", async () => {
		let wasEventCalled = false;
		const windowEvent = window.addEventListener;
		const spy = jest.spyOn(window, "addEventListener");

		spy.mockImplementation((...args) => {
			windowEvent(...args);
			const [eventType] = args;
			if (eventType === "scroll") {
				wasEventCalled = true;
			}
		});

		renderHook(useWindowYOffset);
		await waitFor(() => expect(wasEventCalled).toBeTruthy());
	});
});
