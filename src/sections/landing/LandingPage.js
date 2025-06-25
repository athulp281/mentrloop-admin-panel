"use client";
import React, { useState, useEffect } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import LogoLoader from "@/components/LogoLeader";
import { Box, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PATH_DASHBOARD, PATH_AUTH } from "@/route/paths";
import LogoHeader from "./LogoHeader";
import useResponsive from "@/components/Hooks/useResponsive";
import TutorLanding from "./tutor/TutorLanding";

const LandingPage = () => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const [showContent, setShowContent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigateToLogin = () => {
    setShowContent(false);
    setTimeout(() => {
      router.push(PATH_AUTH.login);
    }, 400);
  };
  const variant = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
    },
  };

  return (
    <div>
      {/* <TutorLanding /> */}
      <AnimatePresence>
        {!showContent ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LogoLoader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.85, x: "-50%" }} // Smooth slide-out with scaling
            transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }} // Smooth curve for easing
          >
            <motion.div initial="initial" animate="animate" variants={variant}>
              <Box padding={3}>
                <LogoHeader />
              </Box>
            </motion.div>
            <Stack direction={mdUp ? "row" : "column"} spacing={2}>
              <Box width={mdUp ? "60%" : "100%"}>
                <LeftSection handleNavigateToLogin={handleNavigateToLogin} />
              </Box>
              {mdUp ? (
                <Box sx={{ width: mdUp ? "40%" : "100%" }}>
                  <RightSection />
                </Box>
              ) : null}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
