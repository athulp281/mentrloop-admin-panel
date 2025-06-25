import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const MotionWrapper = ({ children, directions, delay }) => {
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 3,
        delay: delay ? delay : 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  };
  return (
    <motion.div
      custom={`${directions}`}
      initial="hidden"
      animate="visible"
      style={{ width: "100%" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
