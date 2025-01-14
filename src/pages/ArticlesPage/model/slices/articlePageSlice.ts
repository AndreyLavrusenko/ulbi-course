import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, ArticleView } from "@/entities/Article";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticlePageSchema } from "@/pages/ArticlesPage";
import { fetchArticleList } from "@/pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { LOCALSTORAGE_ARTICLE_VIEW_KEY } from "@/shared/const/localstorage";
import { ArticlesSortField, ArticleType } from "@/entities/Article/model/types/article";
import { SortOrder } from "@/shared/types";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleAdapter = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
    name: "articlePage",
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        error: undefined,
        isLoading: false,
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _inited: false,
        sort: ArticlesSortField.CREATED,
        search: "",
        order: "asc",
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCALSTORAGE_ARTICLE_VIEW_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sort = action.payload;
        },
        initialState: (state) => {
            const view = localStorage.getItem(LOCALSTORAGE_ARTICLE_VIEW_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length === state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
