import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";
import { type AppDispatch, createReduxStore } from "app/providers/StoreProvider/config/store";
import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
} from "app/providers/StoreProvider/config/StateSchema";


export {
    StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch, ThunkExtraArg, ThunkConfig,
};
