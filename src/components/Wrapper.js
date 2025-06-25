"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH } from "@/route/paths";
import Page from "./page";
import Breadcrumbs from "./Breadcrumbs";
import MainLoader from "./MainLoader";

const Title = React.memo(({ title }) => {
  const formattedTitle = useMemo(
    () =>
      typeof title === "string"
        ? title.replace(/\b\w/g, (char) => char.toUpperCase())
        : "",
    [title]
  );

  return (
    <Typography variant="h4" component="h1">
      {formattedTitle}
    </Typography>
  );
});
Title.displayName = "Title";

const Wrapper = ({ title, children, pageAction }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [layout, setLayout] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = useMemo(
    () => (typeof window !== "undefined" ? localStorage.getItem("user") : null),
    []
  );

  useEffect(() => {
    if (user) {
      setLayout({ auth: false, dashboard: true });
      setTimeout(() => setLoading(false), 2000); // Add 1 second delay
    } else {
      setLayout({ auth: true, dashboard: false });
      router.replace(PATH_AUTH.login);
    }
  }, [user, router]);

  const animationVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }),
    []
  );

  const renderBreadcrumbs = useCallback(() => <Breadcrumbs />, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Title title={title} />
            {renderBreadcrumbs()}
          </Box>
          {pageAction && (
            <Box sx={{ flexShrink: 0, paddingLeft: 2 }}>{pageAction}</Box>
          )}
        </Box>

        <Box sx={{ padding: 1, width: "100%" }}>
          {loading ? (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                mt: 25,
              }}
            >
              <MainLoader />
            </Box>
          ) : (
            <Page title={title}>{children}</Page>
          )}
        </Box>
      </motion.div>
    </Box>
  );
};
Wrapper.displayName = "Wrapper";

export default React.memo(Wrapper);
