import { Outlet, useLoaderData } from "react-router";
import { CurrencyContext } from "../store/store";

export default function CurrencyProvider() {
  const data = useLoaderData();

  return (
    <CurrencyContext.Provider value={data}>
      <Outlet />
    </CurrencyContext.Provider>
  );
}
