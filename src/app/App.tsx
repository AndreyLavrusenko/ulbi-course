import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widget/Navbar";
import { Sidebar } from "@/widget/Sidebar";

import { getUserInitied, initAuthData } from "@/entities/User";
import { PageLoader } from "@/widget/PageLoader";

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const initiated = useSelector(getUserInitied);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!initiated) {
        return (
            <PageLoader />
        )
    }

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
