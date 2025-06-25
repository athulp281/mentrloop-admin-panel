"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@mui/material";
import Loader from "@/components/Loader";
import { PATH_AUTH, PATH_DASHBOARD } from "@/route/paths";
import { useSnackbar } from "notistack";

function AuthLayout({ children }) {
  const { enqueueSnackbar } = useSnackbar();
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    if (!user && pathname.startsWith(PATH_DASHBOARD.root)) {
      router.replace(PATH_AUTH.login);
    }
    if (user && pathname.startsWith(PATH_AUTH.root)) {
      router.replace(PATH_DASHBOARD.dashboard);
    }
  }, [router, pathname, user]);
  if (isAuthenticated === false && pathname.startsWith(PATH_DASHBOARD.root)) {
    enqueueSnackbar("Access Denied: You are not authorized...!", {
      variant: "error",
    });
  }
  if (isAuthenticated === null) {
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
    <div>
      {!isAuthenticated &&
      pathname.startsWith(PATH_DASHBOARD.root) ? null : isAuthenticated &&
        pathname.startsWith(PATH_AUTH.root) ? null : (
        <Box> {children}</Box>
      )}
    </div>
  );
}

export default AuthLayout;
