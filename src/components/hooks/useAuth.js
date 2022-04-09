import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector((state) => state.user);
  return useMemo(() => ({ user }), [user]);
};