import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AuthLogoHeader = () => {
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
    <Box
      sx={{
        height: 44,
        width: "100%",
        // background: `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #a125c2 100%)`,
        background: "#fff",
        borderRadius: 5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <motion.div animate={controls}>
          <Box sx={{ pt: 1 }}>
            <Image
              height={30}
              width={130}
              src={
                "https://www.intervaledu.com/static/web/images/logo/logo-dark.png"
              }
              alt="logo"
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AuthLogoHeader;
