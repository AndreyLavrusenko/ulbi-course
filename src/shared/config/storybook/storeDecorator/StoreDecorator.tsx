import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "features/EditableProfileCard";

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
