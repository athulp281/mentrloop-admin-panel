import React, { useEffect, useState } from "react";
import { Box, Typography, keyframes } from "@mui/material";
import MotionWrapper from "./MotionWrapper";

// Keyframes for the spinning animation
const spin = keyframes`
  0% {
    border-radius: 20%;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 50%;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 20%;
  }
`;

const MainLoader = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["Loading", "Loading.", "Loading..", "Loading..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 500);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <MotionWrapper directions={"bottom"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "70px",
            height: "70px",
            border:
              messageIndex == 1
                ? "12px double #af0ce7"
                : messageIndex == 2
                ? "12px double #0089d0"
                : messageIndex == 3
                ? "12px double #af0ce7"
                : messageIndex == 0
                ? "12px double #0089d0"
                : null,
            animation: `${spin} 1s ease-in-out infinite`,
          }}
        />
        <Typography
          sx={{
            color: "black",
            fontFamily: "Courier, monospace",
            fontSize: "20px",
            marginTop: "20px",
            marginLeft: "5px",
          }}
        >
          {messages[messageIndex]}
        </Typography>
      </Box>
    </MotionWrapper>
  );
};

export default MainLoader;
