import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const Logo = () => {
  const [logoRotated, setLogoRotated] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (!logoRotated) {
      controls.start({
        rotateX: 360,
        transition: { duration: 1, ease: "easeInOut", delay: 3 },
      });
      setLogoRotated(true);
    }

    if (logoRotated) {
      setInterval(() => {
        setLogoRotated(false);
      }, 6000);
    }
  }, [logoRotated, controls]);

  return (
    <Stack
      direction={"row"}
      sx={{
        // backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        borderRadius: 3,
        // minWidth: 300,
      }}
    >
      <Box sx={{ paddingTop: 1.6 }}>
        <motion.div animate={controls}>
          <Image
            height={60}
            width={180}
            src={"https://mentrtest.vercel.app/assets/img/logo/logo-blue.png"}
            alt="logo"
            priority
          />
        </motion.div>
      </Box>
      {/* <Box>
        <Image
          src={
            "https://portal.teaminterval.net/static/media/map.7dd1ec7c87cddefd09e4.gif"
          }
          alt="login Img"
          height={50}
          width={50}
        />
      </Box> */}
    </Stack>
  );
};

export default Logo;
