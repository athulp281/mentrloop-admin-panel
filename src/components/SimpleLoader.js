import React from "react";
import { Box, styled } from "@mui/material";
import "./../assets/loader.css";

const LoadingContainer = styled(Box)({
  //   height: "100vh",
  //   width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   background: "hsl(220deg 29% 90% / 50%)",
});

const SvgLoader = styled("svg")({
  width: "6em",
  height: "6em",
  "& .pl__ring": {
    animation: "ringA 2s linear infinite",
  },
  "& .pl__ring--a": {
    stroke: "#f42f25",
  },
  "& .pl__ring--b": {
    animationName: "ringB",
    stroke: "#f49725",
  },
  "& .pl__ring--c": {
    animationName: "ringC",
    stroke: "#255ff4",
  },
  "& .pl__ring--d": {
    animationName: "ringD",
    stroke: "#f42582",
  },
});

const Loader = () => {
  return (
    <LoadingContainer>
      <SvgLoader
        className="pl"
        width="240"
        height="240"
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="pl__ring pl__ring--a"
          cx="120"
          cy="120"
          r="105"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 660"
          strokeDashoffset="-330"
          strokeLinecap="round"
        />
        <circle
          className="pl__ring pl__ring--b"
          cx="120"
          cy="120"
          r="35"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 220"
          strokeDashoffset="-110"
          strokeLinecap="round"
        />
        <circle
          className="pl__ring pl__ring--c"
          cx="85"
          cy="120"
          r="70"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        />
        <circle
          className="pl__ring pl__ring--d"
          cx="155"
          cy="120"
          r="70"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        />
      </SvgLoader>
    </LoadingContainer>
  );
};

export default Loader;
