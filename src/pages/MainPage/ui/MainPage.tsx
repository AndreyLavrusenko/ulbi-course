import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "entities/Couter";

const MainPage: FC = () => {

    const { t } = useTranslation("main");

    return (
        <div>
            <h1>{t("Главная страница")}</h1>
            <Counter />
        </div>
    );

};

export default MainPage;
