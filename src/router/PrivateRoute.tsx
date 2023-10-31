import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export const PrivateRoutes = () => {
    const isAuthenticated = useAppSelector(state => state.userDetails).user.isLogin;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
