import { Icon } from "@iconify/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const MiddleComp = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={1}>
        <Box sx={{ pt: 2, pl: 4, width: "50%" }}>
          <Typography
            sx={{
              fontFamily: "Space Grotesk, serif",
              fontSize: 60,
              fontWeight: 450,
            }}
          >
            Empowering Minds,
            <br /> Shaping{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(to bottom, #0089d0 0%, #0089d0 10%, #a125c2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Futures.
            </Box>
          </Typography>
        </Box>
        <Box
          width={"50%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "60%",
            }}
          >
            <Typography sx={{ color: "grey.500" }}>
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
            </Typography>
          </Box>
          <Box pt={3}>
            <Stack direction={"row"} spacing={4}>
              <Button
                sx={{
                  borderRadius: 5,
                  color: "white",
                  background: `linear-gradient(to right, #0089d0 0%, #0089d0 10%, #F4F6FF 100%)`,
                }}
              >
                <Icon
                  icon="material-symbols-light:tv-next-outline-rounded"
                  height={23}
                  width={23}
                />
                Get Started...
              </Button>
              <Button variant="outlined" sx={{ borderRadius: 5 }}>
                Visit Website{" "}
                <Icon
                  icon="fluent:directions-28-regular"
                  height={23}
                  width={23}
                />
              </Button>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default MiddleComp;
