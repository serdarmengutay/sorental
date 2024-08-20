import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
const Home = lazy(() => import("../components/pages/Home"));
const Category = lazy(() => import("../components/pages/Category"));
// const NotFound = lazy(() => import("../components/pages/NotFound"));
const Detail = lazy(() => import("../components/pages/Detail"));
const Payment = lazy(() => import("../components/pages/Payment"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/categories"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Category />
          </Suspense>
        }
      />
      <Route
        path="/detail"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Detail />
          </Suspense>
        }
      />
      <Route
        path="/payment"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Payment />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
