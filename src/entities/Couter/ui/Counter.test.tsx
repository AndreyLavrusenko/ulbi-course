import { componentRender } from "shared/config/tests/componentRender/componentRender";
import { Counter } from "entities/Couter";
import { fireEvent, screen } from "@testing-library/react";


describe("Counter", () => {
    test("component render", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });

    test("increment button click", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const incrementButton = screen.getByTestId("increment");
        fireEvent.click(incrementButton);

        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });

    test("decrement button click", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const incrementButton = screen.getByTestId("decrement");
        fireEvent.click(incrementButton);

        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
