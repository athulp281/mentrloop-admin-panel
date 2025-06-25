"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH } from "@/route/paths";
import Loader from "@/components/Loader";
import { Box } from "@mui/material";
import IndexPage from "@/sections/IndexPage";

function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const data = "tokenActive";
  useEffect(() => {
    const user =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    if (user) {
      router.push(pathname);
      setLayout({ auth: false, dashboard: true });
    } else {
      setTimeout(() => {
        router.push(PATH_AUTH.login);
        setLayout({ auth: true, dashboard: false });
      }, 7000);
    }
  }, [data, router, pathname]);
  if (layout === null) {
    // Return a loading state or nothing while determining the layout
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
  return <IndexPage />;
}

export default Home;
