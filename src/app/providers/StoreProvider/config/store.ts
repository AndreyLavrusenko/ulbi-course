import { configureStore, DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Couter";
import { userReducer } from "entities/User";
import { To } from "history";
import { NavigateOptions } from "react-router";
import { $api } from "shared/api/api";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject = {
        ...asyncReducer,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
