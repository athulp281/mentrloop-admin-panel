import { Avatar, Box, Chip, Paper, Typography } from "@mui/material";
import React from "react";
import { SidebarAvatar } from "../sidebar/SidebarAvatar";
import MotionWrapper from "../MotionWrapper";
import { Icon } from "@iconify/react";

const ProfileHeader = () => {
  const profile = JSON.parse(localStorage.getItem("user")).user;

  return (
    <Box>
      <MotionWrapper directions={"top"} delay={1}>
        <Paper
          sx={{
            backgroundImage: "url('/header.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            width: "99.4%",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              height: "90px",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "0 0 40px 40px",
            }}
          >
            <Box>
              <Box
                sx={{
                  height: 90,
                  width: 90,
                  position: "relative",
                  top: -70,
                  ml: 4,
                }}
              >
                <MotionWrapper directions={"bottom"} delay={1.5}>
                  <Box
                    sx={{
                      padding: 0.6,
                      background: `linear-gradient(to bottom, #702dff 0%, #702dff 10%, white 100%)`,
                      borderRadius: "50%",
                      height: 100,
                      width: 100,
                    }}
                  >
                    <Avatar
                      sx={{ height: 90, width: 90 }}
                      src={`https://www.icon0.com/free/static2/preview2/stock-photo-kid-boy-avatar-people-icon-character-cartoon-32922.jpg`}
                      alt="photoURL"
                    />
                  </Box>
                </MotionWrapper>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  pl: 6.9,
                  // pt: 1.3,
                  position: "relative",
                  top: -60,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography color={"white"} variant="h6">
                  {profile?.name || ""}
                </Typography>
                <MotionWrapper directions={"bottom"} delay={1.8}>
                  <Box>
                    <Chip
                      icon={
                        <Icon
                          style={{ color: "white" }}
                          icon="solar:user-id-bold"
                          width="20"
                          height="20"
                        />
                      }
                      variant="outlined"
                      size="small"
                      sx={{ color: "white" }}
                      label={profile?.admnNo || ""}
                    />
                  </Box>
                </MotionWrapper>
              </Box>
            </Box>
          </Box>
        </Paper>
      </MotionWrapper>
    </Box>
  );
};

export default ProfileHeader;
