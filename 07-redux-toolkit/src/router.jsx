import { createBrowserRouter } from "react-router";
import CounterProvider from "./providers/CounterProvider";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CounterProvider />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
