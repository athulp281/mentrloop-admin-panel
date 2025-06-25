import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Image from "next/image";

function Loader() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Image
            width={180}
            height={60}
            src="https://mentrtest.vercel.app/assets/img/logo/logo-blue.png"
            alt="Interval Logo"
            priority
          />
          <Box sx={{ width: "100%", marginTop: 1.5 }}>
            <LinearProgress sx={{ borderRadius: 2 }} />
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </div>
  );
}

export default Loader;
