import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const FindEmployees = lazy(() =>
  import("../pages/findEmployees/FindEmployees"),
);

const Path = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage title="main page" />} exact />
        <Route
          path="/find"
          element={<FindEmployees title="Find employees" />}
          exact
        />
      </Routes>
    </Suspense>
  );
};

export default Path;
