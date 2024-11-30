import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	children: ReactNode,
	reducers: ReducerList,
	removeAfterUnmount?: boolean
}


export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children, reducers, removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        // @ts-ignore
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (mounted) return;

            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                // @ts-ignore
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
	}, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
