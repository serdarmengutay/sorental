import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HistoryRouter } from "./router/HistoryRouter.tsx";
import AppRoutes from "./router/index.tsx";
import { customHistory } from "./router/History.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HistoryRouter history={customHistory}>
      <AppRoutes />
    </HistoryRouter>
  </StrictMode>
);
