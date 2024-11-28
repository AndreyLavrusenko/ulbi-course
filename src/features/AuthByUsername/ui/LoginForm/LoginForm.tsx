import { classNames } from "shared/lib/classNames/classNames";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback, useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginLoading } from "../../model/selectors/getLoginLoading/getLoginLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";


interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}


const initialReducers: ReducerList = {
    loginForm: loginReducer,
}; 

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);
    

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);


    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title="Форма авторизации" />
                <Input autoFocus value={username} onChange={onChangeUsername} placeholder="Логин" />
                <Input onChange={onChangePassword} value={password} type="password" placeholder="Пароль" />
                <Button
                    disabled={isLoading}
                    theme={ButtonTheme.SECONDARY}
                    onClick={onLoginClick}
                    className={classNames(cls.loginBtn)}
                >
                    Войти
                </Button>
                {error && <Text text={error} theme={TextTheme.ERROR} />}
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
