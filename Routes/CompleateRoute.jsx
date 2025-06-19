import { createBrowserRouter } from "react-router-dom";
import IndexRoute from "./IndexRoute";
import DashboardRoute from "./DashboardRoute";

const router = createBrowserRouter([
  IndexRoute,
  DashboardRoute
]);

export default router;