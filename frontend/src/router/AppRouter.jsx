import React, { lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Customer = lazy(() => import("@/pages/Customer"));
const SelectCustomer = lazy(() => import("@/pages/SelectCustomer"));
const Lead = lazy(() => import("@/pages/Lead"));
const Product = lazy(() => import("@/pages/Product"));
const Admin = lazy(() => import("@/pages/Admin"));
const Logout = lazy(() => import("@/pages/Logout"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function AppRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Dashboard} exact />
          <Route path="/customer" component={Customer} exact />
          <Route path="/selectcustomer" component={SelectCustomer} exact />
          <Route path="/lead" component={Lead} exact />
          <Route path="/product" component={Product} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/logout" component={Logout} exact />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
