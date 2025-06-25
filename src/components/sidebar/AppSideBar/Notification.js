import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Divider, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{ pt: 1 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon icon="mingcute:notification-line" width="24" height="24" />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: 300 }}>
          <Box sx={{ padding: 1, display: "flex" }}>
            <Box sx={{ paddingTop: 0.4, paddingLeft: 0.6 }}>
              <Icon icon="mingcute:notification-line" width="24" height="24" />
            </Box>
            <Box>
              <Typography variant="overline" sx={{ fontSize: 14 }}>
                Notifications
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderStyle: "dashed", borderBottomWidth: 2 }} />
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Box>
      </Menu>
    </div>
  );
}
