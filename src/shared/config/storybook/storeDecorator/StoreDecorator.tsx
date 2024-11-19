import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducer: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?: ReducerList,
) => (Story: Story) => (
    <StoreProvider initialState={state} asyncReducer={{ ...defaultAsyncReducer, ...asyncReducer }}>
        <Story />
    </StoreProvider>
);
