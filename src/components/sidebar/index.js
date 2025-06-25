"use client";
import React, { useEffect, useState } from "react";
import SidebarLayout from "./SidebarLayout";
import { usePathname, useRouter } from "next/navigation";
import AuthLayout from "./authLayout/AuthLayout";
import { PATH_AUTH, PATH_DASHBOARD } from "@/route/paths";
import Loader from "../Loader";
import { Box, Container } from "@mui/material";
import AppSideBar from "./AppSideBar/AppSideBar";
import store from "../../redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { SnackBarProvider } from "../snackBar";

export default function Index({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  useEffect(() => {
    if (user) {
      // router.push(PATH_DASHBOARD.dashboard);
      setLayout({ auth: false, dashboard: true });
    } else {
      // router.replace(PATH_AUTH.login);
      setLayout({ auth: true, dashboard: false });
    }
    if (!user && pathname.startsWith(PATH_DASHBOARD.root)) {
      router.replace(PATH_AUTH.login);
    }
    if (user && pathname.startsWith(PATH_AUTH.root)) {
      router.replace(PATH_DASHBOARD.dashboard);
    }
  }, [user, router, pathname]);

  if (layout === null) {
    return (
      <Box
        sx={{
          marginTop: 35,
        }}
      >
        <Loader />
      </Box>
    );
  }

  return (
    <>
      {user ? (
        <ReduxProvider store={store}>
          <SnackBarProvider>
            <AppSideBar>
              <Box sx={{ overflow: "hidden" }}>
                <AuthLayout>{children}</AuthLayout>
              </Box>
            </AppSideBar>
          </SnackBarProvider>
        </ReduxProvider>
      ) : (
        <ReduxProvider store={store}>
          <SnackBarProvider>
            <AuthLayout>{children}</AuthLayout>
          </SnackBarProvider>
        </ReduxProvider>
      )}
    </>
  );
}
