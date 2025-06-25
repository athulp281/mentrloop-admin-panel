"use client";
import React, { Children, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH } from "@/route/paths";
import Loader from "@/components/Loader";
import { Box } from "@mui/material";

function AuthGuard({ Children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const data = "tokenActive";
  useEffect(() => {
    const user =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (!user) {
      router.push(pathname);
      setLayout({ auth: false, dashboard: true });
    } else {
      router.replace(PATH_AUTH.login);
      setLayout({ auth: true, dashboard: false });
    }
  }, [router, pathname]);
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
  return <>{Children}</>;
}

export default AuthGuard;
