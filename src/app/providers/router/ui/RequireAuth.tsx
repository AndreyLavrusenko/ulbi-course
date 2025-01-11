import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { getUserAuthData, getUserRoles, UserRole } from "@/entities/User";
import { RouterPath } from "@/shared/const/router";

interface Props {
	children: JSX.Element
    roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: Props) => {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => userRoles?.includes(role));
    }, [userRoles, roles]);

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RouterPath.forbidden} state={{ from: location }} replace />;
    }

    return children;
};
