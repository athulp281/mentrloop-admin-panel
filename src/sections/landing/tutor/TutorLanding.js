import { Box } from "@mui/material";
import React from "react";
import LandingHeader from "./LandingHeader";
import MiddleComp from "./MiddleComp";
import BottomComp from "./BottomComp";

const TutorLanding = () => {
  return (
    <Box>
      <Box>
        <LandingHeader />
      </Box>
      <Box>
        <MiddleComp />
      </Box>
      <Box>
        <BottomComp />
      </Box>
    </Box>
  );
};
export default TutorLanding;
