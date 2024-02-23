import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";
import cls from "./LoginForm.module.scss";


interface LoginFormProps {
    className?: string;
}


export const LoginForm = ({ className }: LoginFormProps) => {
    const [login, setLogin] = useState("");

    const onChange = (val: string) => {
        setLogin(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus value={login} onChange={onChange} placeholder="Логин" />
            <Input type="password" placeholder="Пароль" />
            <Button theme={ButtonTheme.SECONDARY} className={classNames(cls.loginBtn)}>
                Войти
            </Button>
        </div>
    );
};
