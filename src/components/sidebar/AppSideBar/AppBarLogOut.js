import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Divider,
  Menu,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { PATH_AUTH } from "@/route/paths";
import { motion } from "framer-motion";
import { globalColors } from "@/theme/colors";

const AppBarLogOut = () => {
  const profile = JSON.parse(localStorage.getItem("user")).user;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRemove = () => {
    localStorage.removeItem("user");
    router.push(PATH_AUTH.login);
  };
  return (
    <Box sx={{ ml: 2 }}>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
      >
        <Paper
          elevation={3}
          onClick={handleClick}
          sx={{
            width: 150,
            pt: 1,
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: globalColors.primarygradient,
            color: "white",
          }}
        >
          <Stack direction={"row"}>
            <Box>
              <Icon icon="ph:student" width="25" height="25" />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: 12, pt: 0.7 }}>
              {profile?.name || ""}
            </Typography>
            <Box sx={{ pt: 0.5, pl: 1 }}>
              <Icon icon="icon-park-outline:down" width="20" height="20" />
            </Box>
          </Stack>
        </Paper>
      </motion.div>

      <Menu
        sx={{ mt: 1 }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: 200 }}>
          <Box sx={{ padding: 1, display: "flex", justifyContent: "center" }}>
            <Box sx={{ paddingTop: 0.4, paddingLeft: 0.6 }}>
              <Icon icon="line-md:logout" width="24" height="24" />
            </Box>
            <Box sx={{ pt: 0.5 }}>
              <Typography
                // variant="overline"
                sx={{ fontSize: 14, color: "red", fontWeight: "bolder" }}
              >
                Logout
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderStyle: "dashed", borderBottomWidth: 2 }} />
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: 1,
              }}
            >
              <Button
                onClick={handleRemove}
                sx={{
                  color: "white",
                  backgroundColor: "#e30e08",
                  borderRadius: 4,
                  width: "100%",
                  ":hover": {
                    backgroundColor: "white",
                    color: "#e30e08",
                  },
                }}
              >
                Logout
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Menu>
    </Box>
  );
};

export default AppBarLogOut;
