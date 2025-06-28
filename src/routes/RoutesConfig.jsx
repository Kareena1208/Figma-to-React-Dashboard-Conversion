import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ROUTES } from "./constants";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Tasks = lazy(() => import("../pages/Tasks"));

const RoutesConfig = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTES.TASkS} element={<Tasks />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
