import { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ImageContainer } from "@/components/ImageContainer";
import LogInRegForm from "./LogInRegForm";
import Logo from "@/components/Logo";
import useResponsive from "@/components/Hooks/useResponsive";
import { globalColors } from "@/theme/colors";
import Image from "next/image";
import img from "../../../../public/authPage/slide-6.png";

export default function AuthForm() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 2,
        delay: 1,
        type: "spring",
        stiffness: 50,
      },
    },
  };
  return (
    <motion.div
      custom="bottom"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Box
        display="flex"
        minHeight="100vh"
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          padding: 2,
        }}
      >
        {mdUp ? (
          <Box
            sx={{
              background: globalColors.secondarygradient,
              borderRadius: 5,
              padding: 5,
              minHeight: "93vh",

              width: "50%",
            }}
          >
            <Box>
              <Logo />
            </Box>

            <Box
              sx={{
                // minHeight: "93vh",
                padding: 2,
                pt: 15,
              }}
            >
              <Image src={img} alt="img" height={400} width={400} />
              {/* <ImageContainer /> */}
            </Box>
          </Box>
        ) : null}

        <Box sx={{ width: "100%", padding: smUp ? 3 : null }}>
          <LogInRegForm />
        </Box>
      </Box>
    </motion.div>
  );
}
