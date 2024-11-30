import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

const MainPage: FC = () => {

    const { t } = useTranslation("main");

    return (
        <Page>
            <h1>{t("Главная страница")}</h1>
        </Page>
    );

};

export default MainPage;
