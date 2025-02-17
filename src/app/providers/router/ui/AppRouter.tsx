import { Route, Routes } from "react-router-dom";
import {
    memo, Suspense, useCallback,
} from "react";
import { PageLoader } from "@/widget/PageLoader";
import { AppRoutesProps, routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { RequireAuth } from "@/app/providers/router/ui/RequireAuth";

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );

});
