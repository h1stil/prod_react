import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { RouteConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">
      <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  </Suspense>
);

export default AppRouter;
