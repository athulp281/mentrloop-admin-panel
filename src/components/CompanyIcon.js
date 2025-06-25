import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";

function CompanyIcon({ setNavItem }) {
  return (
    <div>
      <Box
        mt={1}
        component={Link}
        href="/"
        // onClick={() => setNavItem(null)}
      >
        <Stack direction={"row"} paddingLeft={5}>
          <Box>
            <Image
              src={
                "https://intervaledu.com/static/web/images/logo/logo-dark.png"
              }
              height={35}
              width={150}
              alt="logo"
              priority
            />
          </Box>
          {/* <Box mt={1.5}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Poppins ",
                flexGrow: 1,
                color: "black",
                fontWeight: "bolder",
                fontStyle: "normal",
                fontSize: 14,
              }}
            >
              Weather <br /> Company
            </Typography>
          </Box> */}
        </Stack>
      </Box>
    </div>
  );
}

export default CompanyIcon;
