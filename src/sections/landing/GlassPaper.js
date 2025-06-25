import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "./student.jpg";

const GlassPaper = () => {
  return (
    <Box
      sx={{
        width: 400,
        height: 200,
        backgroundImage:
          "linear-gradient(135deg, white, rgba(0, 137, 208, 0.2))",
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
        backdropFilter: "blur(10px)", // Blurring effect
        borderRadius: 3,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
        border: "1px solid rgba(255, 255, 255, 0.2)", // Optional border for a frosted look
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ zIndex: 2 }}>
        <Image height={100} width={200} src={image} alt="" />
      </Box>
    </Box>
  );
};

export default GlassPaper;
