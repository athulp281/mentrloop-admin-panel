import { Avatar, Box, Link, Typography, styled } from "@mui/material";
import React from "react";

export const SidebarAvatar = ({ open }) => {
  const profile = JSON.parse(localStorage.getItem("user")).user;
  const AccountStyle = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 2.5),
    borderRadius: "50px 0 50px 0",
    // borderRadius: Number(theme.shape.borderRadius) * 8,
    backgroundColor: open ? "#edf4fb" : null,
  }));
  return (
    <>
      <Box sx={{ mt: 5, mx: open ? 2.5 : 0 }}>
        <AccountStyle>
          <Box
            sx={{
              padding: 0.4,
              background: `linear-gradient(to bottom, #702dff 0%, #702dff 10%, white 100%)`,
              borderRadius: "50%",
            }}
          >
            <Avatar
              src={`https://www.icon0.com/free/static2/preview2/stock-photo-kid-boy-avatar-people-icon-character-cartoon-32922.jpg`}
              alt="photoURL"
            />
          </Box>
          {open ? (
            <Box sx={{ marginLeft: 1, textAlign: "center" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {profile?.name || ""}
              </Typography>

              <Typography
                variant="subtitle3"
                sx={{
                  color: "#c3c9cf",
                  textTransform: "capitalize",
                  fontSize: "12px",
                }}
              >
                Mentrloop
              </Typography>
            </Box>
          ) : null}
        </AccountStyle>
      </Box>
    </>
  );
};
