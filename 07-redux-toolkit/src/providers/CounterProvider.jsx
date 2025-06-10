import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "../store/store";

export default function CounterProvider() {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
}
