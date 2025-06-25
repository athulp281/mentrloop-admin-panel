import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const NavigationButton = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box pt={0.5}>
      <Box sx={{ width: 400 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={
              <Typography
                sx={{
                  fontFamily: "Space Grotesk, serif",
                  fontWeight: "450",
                }}
              >
                Home
              </Typography>
            }
          />
          <BottomNavigationAction
            label={
              <Typography
                sx={{
                  fontFamily: "Space Grotesk, serif",
                  fontWeight: "450",
                }}
              >
                AboutUs
              </Typography>
            }
          />
          <BottomNavigationAction
            label={
              <Typography
                sx={{
                  fontFamily: "Space Grotesk, serif",
                  fontWeight: "450",
                }}
              >
                ContactUs
              </Typography>
            }
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default NavigationButton;
