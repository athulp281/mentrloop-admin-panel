import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CompanyIcon from "@/components/CompanyIcon";
import { SidebarAvatar } from "../SidebarAvatar";
import { Divider } from "@mui/material";
import SidebarMenuItems from "./SideBarMenuItems";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
export default function MobileSideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleDrawerClick = (event) => {
    if (event) {
      event.stopPropagation();
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: 280, marginTop: 10, padding: 1 }}
      role="presentation"
      onClick={handleDrawerClick()}
    >
      <Logo />
      <Box>
        <Box>
          <SidebarAvatar open={open} />
        </Box>
      </Box>
      <Divider
        sx={{
          marginTop: 8,
          borderBottomWidth: 2,
          borderStyle: "dashed",
        }}
      />
      <SidebarMenuItems setOpen={setOpen} />
    </Box>
  );

  return (
    <div>
      {/* <MenuIcon onClick={toggleDrawer(true)} sx={{ color: "black" }} /> */}
      <Box sx={{ color: "grey.600" }}>
        <Icon
          icon="line-md:chevron-small-triple-right"
          onClick={toggleDrawer(true)}
          height={23}
          width={23}
          style={{ color: "balck" }}
        />
      </Box>
      {/* <Button >Open drawer</Button> */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box onClick={handleDrawerClick}>{DrawerList}</Box>
      </Drawer>
    </div>
  );
}
