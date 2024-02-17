import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/config/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("test render", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("toggle sidebar", () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
