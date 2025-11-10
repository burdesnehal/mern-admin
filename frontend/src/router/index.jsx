import React from "react";
import { Router as RouterHistory } from "react-router-dom";
import { Provider } from "react-redux";

import AppRouter from "./AppRouter"; // force load AppRouter always
import history from "@/utils/history";
import store from "@/redux/store";

export default function Router() {
  return (
    <RouterHistory history={history}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </RouterHistory>
  );
}
