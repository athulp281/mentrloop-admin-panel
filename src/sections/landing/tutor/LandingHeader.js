import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
import { Box, Button, Paper } from "@mui/material";
import React from "react";
import NavigationButton from "./NavigationButton";

const LandingHeader = () => {
  return (
    <Box padding={1}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ pl: 2 }}>
          <Logo />
        </Box>
        <Box>
          <NavigationButton />
        </Box>
        <Box sx={{ pt: 1.7, pr: 2 }}>
          <Button
            sx={{
              borderRadius: 4,
              color: "white",
              background: `linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)`,
            }}
          >
            <Icon
              height={22}
              width={22}
              icon="majesticons:login-half-circle-line"
            />
            LogIn
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LandingHeader;
