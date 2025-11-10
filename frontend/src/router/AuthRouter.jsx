import React, { lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/PageLoader";

const Login = lazy(() =>
  import(/*webpackChunkName:'LoginPage'*/ "@/pages/Login")
);

const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AuthRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
