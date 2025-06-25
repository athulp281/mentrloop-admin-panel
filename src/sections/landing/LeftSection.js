import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import NavigationButton from "./NavigationButton";
import LogoHeader from "./LogoHeader";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import StatsCard from "@/components/StatsCard";
import useResponsive from "@/components/Hooks/useResponsive";
import RightSection from "./RightSection";

const statsData = [
  { value: "54+", label: "Countries We Serve", color: "#26A69A" },
  { value: "40K+", label: "Total Students Enrolled", color: "#EF5350" },
  { value: "1M+", label: "Total Class Hours", color: "#AB47BC" },
  { value: "5K+", label: "Total Strength", color: "#FFA726" },
];
// Define animations with different directions and a 5-second delay before starting
const boxVariants = {
  left: {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
    },
  },
  right: {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.6 },
    },
  },
  top: {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 },
    },
  },
  bottom: {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
    },
  },
  bottomIcon: {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 2 },
    },
  },
};

const LeftSection = ({ handleNavigateToLogin }) => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 1,
        paddingLeft: smUp ? 10 : 3,
      }}
    >
      <Box>
        {/* Logo Header Animation - From Left */}
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.left}
        >
          <Box>
            <LogoHeader />
          </Box>
        </motion.div> */}

        {/* Main Typography Animation - From Right */}

        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.right}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Space Grotesk, serif",
                fontSize: smUp ? 60 : 35,
              }}
            >
              Transforming <br />
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Education
              </Box>
              , <br />
              <ReactTyped
                strings={[
                  "Empowering you.",
                  "Unleashing Brilliance.",
                  "Igniting Potential.",
                ]}
                typeSpeed={30}
                backSpeed={20}
                loop
              />
            </Typography>
          </Box>
        </motion.div>
        {mdUp ? null : (
          <Box>
            <RightSection />
          </Box>
        )}

        {/* Placeholder Text Animation - From Top */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.top}
        >
          <Box sx={{ pt: 2 }}>
            <Typography sx={{ fontSize: 18, color: "grey.500" }}>
              Presenting the Best Online learning platform you&apos;ll ever need
              for your child to be fully investing in their learning journey
            </Typography>
          </Box>
        </motion.div>

        {/* Navigation Button Animation - From Bottom */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.bottom}
        >
          <Box mt={2}>
            <NavigationButton handleNavigateToLogin={handleNavigateToLogin} />
          </Box>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={boxVariants.bottomIcon}
        >
          <Box sx={{ padding: smUp ? 3 : 1, ml: smUp ? 6 : 0 }}>
            <Stack direction={smUp ? "row" : "column"} spacing={1}>
              <Box
                sx={{
                  display: smUp ? null : "flex",
                  justifyContent: smUp ? null : "center",
                }}
              >
                <Image
                  src={
                    "https://portal.teaminterval.net/static/media/map.7dd1ec7c87cddefd09e4.gif"
                  }
                  alt="png img"
                  height={smUp ? 190 : 180}
                  width={smUp ? 200 : 180}
                />
              </Box>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Kablammo, system-ui",
                    paddingTop: 3,
                  }}
                >
                  Hello Welcome
                </Typography>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  gap={3}
                  flexWrap="wrap"
                >
                  {statsData.map((stat, index) => (
                    <StatsCard
                      key={index}
                      value={stat.value}
                      label={stat.label}
                      color={stat.color}
                    />
                  ))}
                </Box>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default LeftSection;
