import React from "react";
import AppRouter from "./AppRouter";
import { Layout } from "antd";
import Navigation from "@/layout/Navigation";

export default function Router() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navigation />
      <Layout style={{ minHeight: "100vh" }}>
        <AppRouter />
      </Layout>
    </Layout>
  );
}
