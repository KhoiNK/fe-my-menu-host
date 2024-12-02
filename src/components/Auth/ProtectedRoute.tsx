import React, { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthed } from "../../views/Login/store/selectors";
import { useAppNavigation } from "../../hooks/navigation";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthed);
  const navigate = useAppNavigation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default ProtectedRoute;
