// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(cleanup);

function expectCount(expected: number) {
  const heading = screen.getByRole("heading", { name: /^Count:/ });
  expect(heading.textContent).toBe(`Count: ${expected}`);
}

describe("Counter interaction cases", () => {
  it("TC-01: starts at zero", () => {
    render(<App />);

    expectCount(0);
  });

  it("TC-02: increments once", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Increment" }));

    expectCount(1);
  });

  it.fails("TC-03: known defect — decrement should produce -1", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Decrement" }));

    expectCount(-1);
  });

  it("TC-04: two increments followed by reset returns to zero", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Increment" }));
    await user.click(screen.getByRole("button", { name: "Increment" }));
    await user.click(screen.getByRole("button", { name: "Reset" }));

    expectCount(0);
  });

  it.fails(
    "TC-05: known defect — two increments then decrement should produce 1",
    async () => {
      const user = userEvent.setup();
      render(<App />);

      await user.click(screen.getByRole("button", { name: "Increment" }));
      await user.click(screen.getByRole("button", { name: "Increment" }));
      await user.click(screen.getByRole("button", { name: "Decrement" }));

      expectCount(1);
    },
  );
});
