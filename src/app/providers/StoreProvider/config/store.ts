import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { CombinedState, Reducer } from "redux";
import { articleDetailsReducer } from "entities/Article";
import { scrollRestorationReducer } from "features/ScrollRestoration";
import { rtkApi } from "shared/api/rtkApi";
import { profileReducer } from "features/EditableProfileCard";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        user: userReducer,
        articleDetails: articleDetailsReducer,
        scrollRestore: scrollRestorationReducer,
        profile: profileReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
