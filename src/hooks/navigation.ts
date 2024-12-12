import { NavigateOptions, useLocation, useNavigate } from "react-router";

export const useAppNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = (to: string, options?: NavigateOptions) => {
    const navigateOptions: NavigateOptions = {
      ...options,
      state: { ...options?.state, prevPath: location.pathname },
    };
    return navigate(to, navigateOptions);
  };

  return navigateTo;
};
