import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./pages/HomePage";
import ThemeProvider from "./providers/ThemeProvider";
import ContextApi from "./pages/ContextApi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {path:"/context-api",
        element:<ContextApi/>
      }
    ],
  },
]);
