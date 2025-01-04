import { classNames } from "@/shared/lib/classNames/classNames";

import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Произошла ошибка</p>
            <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>
                Обновить страницу
            </Button>
        </div>
    );
};
