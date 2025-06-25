import Wrapper from "@/components/Wrapper";
import { Box, Typography } from "@mui/material";
import React from "react";

const IndexPage = () => {
  return (
    <Box>
      <Wrapper>
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4">Hello Welcome back...</Typography>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default IndexPage;
