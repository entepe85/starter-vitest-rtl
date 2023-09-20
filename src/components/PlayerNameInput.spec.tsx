import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { PlayerNameInput } from "./PlayerNameInput";

describe("PlayerNameInput", () => {
    it("should render a text input", () => {
        const { getByRole } = render(<PlayerNameInput></PlayerNameInput>);
        expect(getByRole("input")).toBeVisible();
    });
    it("should render a label with a given text", () => {
        const { getByTestId } = render(<PlayerNameInput label="X"></PlayerNameInput>);
        expect(getByTestId("playerLabel").textContent).toEqual("X");
    });
});
