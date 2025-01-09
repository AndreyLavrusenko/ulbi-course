import { classNames } from "@/shared/lib/classNames/classNames";

import { useParams } from "react-router-dom";
import { Page } from "@/widget/Page/Page";
import cls from "./ArticleEditPage.module.scss";


interface ArticleEditPageProps {
	className?: string
}


const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
	
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? "Редактирование статьи" : "Создание статьи"}
        </Page>
    );
};

export default ArticleEditPage;
