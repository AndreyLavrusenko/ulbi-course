import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { RouterPath } from "shared/config/routeConfig/routeConfig";

interface Props {
	children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />;
    }

    return children;
};
