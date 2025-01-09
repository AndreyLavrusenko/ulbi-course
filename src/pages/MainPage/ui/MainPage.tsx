import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widget/Page/Page";
import { RatingCard } from "@/entities/Rating";

const MainPage: FC = () => {

    const { t } = useTranslation("main");

    return (
        <Page>
            <h1>{t("Главная страница")}</h1>
            <RatingCard title="Как вам статья?" feedbackTitle="Оставьте отзыв о статье" hasFeedback />
        </Page>
    );

};

export default MainPage;
