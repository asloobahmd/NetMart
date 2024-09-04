import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DefaultLayout from "../layout/DefaultLayout";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  { path: "/login", element: <h1>login</h1> },
  { path: "/register", element: <h1>register</h1> },
  { path: "*", element: <h1>not found</h1> },
]);

export default Router;
