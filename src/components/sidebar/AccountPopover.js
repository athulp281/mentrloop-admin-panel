import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function AccountPopover() {
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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={open ? { scale: 1.2, rotate: 360 } : { scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <Avatar
            sx={{
              bgcolor: open ? "black" : undefined,
            }}
            alt="Travis Howard"
            src="https://www.icon0.com/free/static2/preview2/stock-photo-kid-boy-avatar-people-icon-character-cartoon-32922.jpg"
          />
        </motion.div>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  );
}
