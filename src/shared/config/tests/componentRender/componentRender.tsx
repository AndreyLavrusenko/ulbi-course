import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import i18nForTest from "../../i18n/i18nForTest";

export interface componentRenderOptions {
	route?: string,
    initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {

    const { route = "/", initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
            ,
        </MemoryRouter>,
    );
}
