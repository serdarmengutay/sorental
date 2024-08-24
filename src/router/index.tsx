import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Loading = lazy(() => import("../components/pages/Loading"));
const NotFound = lazy(() => import("../components/pages/NotFound"));
const Home = lazy(() => import("../components/pages/Home"));
const Category = lazy(() => import("../components/pages/Category"));
const Detail = lazy(() => import("../components/pages/Detail"));
const Payment = lazy(() => import("../components/pages/Payment"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/categories"
        element={
          <Suspense fallback={<Loading />}>
            <Category />
          </Suspense>
        }
      />
      <Route
        path="/detail"
        element={
          <Suspense fallback={<Loading />}>
            <Detail />
          </Suspense>
        }
      />
      <Route
        path="/payment"
        element={
          <Suspense fallback={<Loading />}>
            <Payment />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
