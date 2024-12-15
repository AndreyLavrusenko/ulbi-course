import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useMemo } from "react";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { getCanUserEditArticle } from "pages/ArticleDetailsPage";
import cls from "./ArticleDetailsPageHeader.module.scss";


interface ArticleDetailsPageHeaderProps {
	className?: string
}


export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
    const navigate = useNavigate();

    const article = useSelector(getArticleDetailsData);
    const isEditButtonVisible = useSelector(getCanUserEditArticle);
    
    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RouterPath.articles}/${article?.id}/edit`);
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
