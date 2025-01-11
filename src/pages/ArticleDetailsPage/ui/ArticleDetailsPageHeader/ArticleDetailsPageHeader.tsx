
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getArticleDetailsData } from "@/entities/Article";
import { getCanUserEditArticle } from "@/pages/ArticleDetailsPage";
import cls from "./ArticleDetailsPageHeader.module.scss";
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";


interface ArticleDetailsPageHeaderProps {
	className?: string
}


export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const isEditButtonVisible = useSelector(getCanUserEditArticle);
    
    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id ?? ""));
    }, [navigate, article?.id]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList} theme={ButtonTheme.CLEAR}>Назад к списку</Button>
            {isEditButtonVisible && (
                <Button
                    onClick={onEditArticle}
                    className={cls.editBtn}
                    theme={ButtonTheme.CLEAR}
                >
                    Редактировать
                </Button>
            )}
        </div>
    );
};
