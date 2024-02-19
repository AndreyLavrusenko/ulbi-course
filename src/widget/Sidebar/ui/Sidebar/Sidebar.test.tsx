import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
    test("test render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("toggle sidebar", () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
