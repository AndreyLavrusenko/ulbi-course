import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widget/Navbar";
import { Sidebar } from "widget/Sidebar";

import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInitied, userActions } from "entities/User";


export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const initiated = useSelector(getUserInitied);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initiated && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );

};
