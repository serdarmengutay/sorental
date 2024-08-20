import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>{/* <App /> */}</Suspense>
        }
      />
      {/* <Route
        path="/detail"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Detail />
          </Suspense>
        }
      /> */}
      {/* <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
