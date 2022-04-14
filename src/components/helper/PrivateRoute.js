import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user.token.length !== 0 ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}
