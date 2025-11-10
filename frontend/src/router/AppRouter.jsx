import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Dashboard} exact />
          <Route
            path="*"
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
