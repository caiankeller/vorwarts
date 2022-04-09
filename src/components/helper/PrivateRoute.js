import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute() {
    const { user } = useAuth();
    return user.token.length !== 0 ? <Outlet /> : <Navigate to="/" />;
}