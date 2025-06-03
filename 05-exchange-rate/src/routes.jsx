import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./pages/HomePage";
import { getCurrencyRates } from "./api/get-currency-rates";
import CurrencyProvider from "./providers/CurrencyProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CurrencyProvider />,
    loader: getCurrencyRates,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
