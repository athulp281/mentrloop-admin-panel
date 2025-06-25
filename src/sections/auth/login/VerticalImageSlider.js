import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { Box } from "@mui/material";

const VerticalImageSlider = ({ images }) => {
  const y = useMotionValue(0);

  // Set opacity and scale transformations based on position
  const opacity = useTransform(y, [-200, 0, 200], [0.2, 1, 0.2]);
  const scale = useTransform(y, [-200, 0, 200], [0.8, 1, 0.8]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{ y }}
        initial={{ y: "-100%" }} // Start animation above the screen
        animate={{ y: "100%" }} // Slide to below the screen
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            style={{
              opacity,
              scale,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30, // Space between images
              perspective: 1000, // Creates a 3D effect
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`slider-img-${index}`}
              sx={{
                width: "300px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default VerticalImageSlider;
