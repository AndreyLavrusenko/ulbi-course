import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultASyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
    <StoreProvider initialState={state} asyncReducer={{ ...defaultASyncReducer, ...asyncReducer }}>
        <Story />
    </StoreProvider>
);
