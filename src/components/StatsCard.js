// components/StatsCard.js

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useResponsive from "./Hooks/useResponsive";

const StatsCard = ({ value, label, color }) => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        borderRadius: "12px",
        padding: smUp ? "1.9rem" : "1.5rem",
        width: smUp ? "100px" : "70px",
        height: smUp ? "90px" : "80px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        style={{
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        style={{
          fontSize: "0.5rem",
          color: "#fff",
          textTransform: "uppercase",
          fontWeight: smUp ? "500" : "300",
        }}
      >
        {label}
      </Typography>
    </motion.div>
  );
};

export default StatsCard;
