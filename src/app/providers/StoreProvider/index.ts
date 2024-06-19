import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";
import { AppDispatch, createReduxStore } from "app/providers/StoreProvider/config/store";
import {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
} from "app/providers/StoreProvider/config/StateSchema";


export {
    StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch, ThunkExtraArg, ThunkConfig,
};
