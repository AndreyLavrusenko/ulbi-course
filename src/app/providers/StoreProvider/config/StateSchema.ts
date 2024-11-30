import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, 
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { To } from "history";
import { NavigateOptions } from "react-router";
import { ArticleDetailsSchema } from "entities/Article";
import { ArticleDetailsCommentSchema } from "pages/ArticleDetailsPage";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { ArticlePageSchema } from "pages/ArticlesPage";
import { ScrollRestorationSchema } from "features/ScrollRestoration";

export interface StateSchema {
	user: UserSchema,
	profile: ProfileSchema,
	articleDetails: ArticleDetailsSchema,
	scrollRestore: ScrollRestorationSchema,

	// async
	loginForm?: LoginSchema,
	articleDetailsComments?: ArticleDetailsCommentSchema,
	addCommentForm?: AddCommentFormSchema,
	articlePage?: ArticlePageSchema,
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>,
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	// true - вмонтирован
	getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance,
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArg,
	state: StateSchema,
}
