import { Box, Paper } from "@mui/material";
import React from "react";

const IconPaper = ({ children }) => {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: 1,
          borderRadius: "50%",
          height: 35,
          width: 35,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: 1,
          borderColor: "grey",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default IconPaper;
