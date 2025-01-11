import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import { DynamicModuleLoader, ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widget/Page/Page";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slice";
import {
    ArticleDetailsPageHeader,
} from "@/pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList";
import { ArticleDetailsComments } from "@/pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments";
import cls from "./ArticleDetailPage.module.scss";
import { ArticleRating } from "@/features/ArticleRating";


interface ArticleDetailPageProps {
	className?: string,
}

const reducerList: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};


const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                Статья не найдена
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducerList}>
            <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailPage;
