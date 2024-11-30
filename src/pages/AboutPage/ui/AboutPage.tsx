import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widget/Page/Page";

const AboutPage: FC = () => {

    const { t } = useTranslation("about");

    return (
        <Page>
            <h1>{t("О сайте")}</h1>
        </Page>
    );

};

export default AboutPage;
