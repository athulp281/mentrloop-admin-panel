import ImageSlider from "@/components/ImageSlider";
import { Box, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import useResponsive from "@/components/Hooks/useResponsive";

const RightSection = () => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const boxVariants = {
    top: {
      initial: { y: -100, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
      },
    },
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Vertical door animations */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.1 }}
        style={{
          position: "absolute",
          top: 0,
          borderRadius: 5,
          borderTopLeftRadius: 180,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: "#f9fafb",
          zIndex: 2,
        }}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.1 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          backgroundColor: "#f9fafb",
          zIndex: 2,
        }}
      />

      {/* Main content that appears after door animation */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={boxVariants.top}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Box sx={{ mr: 3 }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 5,
              borderTopLeftRadius: smUp ? 180 : 45,
              mt: 1,
              background: `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #b85fd3 100%)`,
              height: smUp ? "80vh" : "60vh",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Box sx={{ padding: 3 }}>
                <ImageSlider />
              </Box>
            </motion.div>
          </Paper>
        </Box>
      </motion.div>
    </div>
  );
};

export default RightSection;
