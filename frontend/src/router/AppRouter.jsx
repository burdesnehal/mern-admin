import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Customer = lazy(() =>
  import(/*webpackChunkName:'CustomerPage'*/ "@/pages/Customer")
);

const SelectCustomer = lazy(() =>
  import(/*webpackChunkName:'SelectCustomerPage'*/ "@/pages/SelectCustomer")
);

const Lead = lazy(() => import(/*webpackChunkName:'LeadPage'*/ "@/pages/Lead"));
const Product = lazy(() =>
  import(/*webpackChunkName:'ProductPage'*/ "@/pages/Product")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>

          {/* NOW NO LOGIN CHECK */}
          <PrivateRoute path="/" component={Dashboard} exact />
          <PrivateRoute component={Customer} path="/customer" exact />
          <PrivateRoute component={SelectCustomer} path="/selectcustomer" exact />
          <PrivateRoute component={Lead} path="/lead" exact />
          <PrivateRoute component={Product} path="/product" exact />
          <PrivateRoute component={Admin} path="/admin" exact />
          <Route path="/logout" component={Logout} exact />

          {/* login page → redirect to Dashboard now */}
          <Route path="/login" component={Dashboard} />

          <Route path="*" component={NotFound} />

        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
