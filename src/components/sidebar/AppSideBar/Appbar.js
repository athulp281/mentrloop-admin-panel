import { Box, IconButton, Paper, Toolbar, styled } from "@mui/material";
import React, { memo, useCallback, useEffect } from "react";
import MuiAppBar from "@mui/material/AppBar";
import AccountPopover from "../AccountPopover";
import MobileSideBar from "./MobileSideBar";
import useResponsive from "@/components/Hooks/useResponsive";
import { Icon } from "@iconify/react";
import Notification from "./Notification";
import SearchBar from "../SearchBar";
import AppBarLogOut from "./AppBarLogOut";
import MotionWrapper from "@/components/MotionWrapper";
import { globalColors } from "@/theme/colors";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 43,
  height: "100%",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: globalColors.primarygradient,
  color: "white",
}));

const drawerWidth = 270;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: open ? drawerWidth : 0,
    width: `calc(100% - ${open ? drawerWidth : 0}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Appbar = ({ open, setOpen }) => {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  useEffect(() => {
    setOpen(mdUp);
  }, [mdUp, setOpen]);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: "none", bgcolor: "#f9fafb" }}
      open={open}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "flex-end" : "space-between",
        }}
      >
        {mdUp ? (
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Icon
              icon="line-md:chevron-small-triple-right"
              height={23}
              width={23}
            />
          </IconButton>
        ) : (
          <MobileSideBar />
        )}
        {mdUp && (
          <Box sx={{ mr: 2, mt: 0.3 }}>
            <MotionWrapper directions={"bottom"}>
              <SearchBar />
            </MotionWrapper>
          </Box>
        )}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <MotionWrapper directions={"top"}>
            <AccountPopover />
          </MotionWrapper>
          <AppBarLogOut />
          <MotionWrapper directions={"left"}>
            {" "}
            <Box ml={0.5}>
              <StyledPaper elevation={3}>
                <Notification />
              </StyledPaper>
            </Box>
          </MotionWrapper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Appbar);
