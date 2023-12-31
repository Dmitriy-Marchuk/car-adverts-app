import { Suspense } from "react";
import { Outlet } from "react-router";

import AppBar from "Components/AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
