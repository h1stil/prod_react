import { getuserAuthData } from "entities/User";
import { Suspense, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { RouteConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  const isAuth = useSelector(getuserAuthData);

  const routes = useMemo(
    () => Object.values(RouteConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    }),
    [isAuth],
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);
