import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HistoryRouter } from "./router/HistoryRouter.tsx";
import AppRoutes from "./router/index.tsx";
import { Provider } from "react-redux";
import { customHistory } from "./router/History.ts";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <HistoryRouter history={customHistory}>
        <AppRoutes />
      </HistoryRouter>
    </StrictMode>
  </Provider>
);
