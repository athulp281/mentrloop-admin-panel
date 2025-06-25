import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import IconPaper from "./IconPaper";
// import { StudentsDetailstable } from "./StudentDetailsList";
import { useDispatch, useSelector } from "react-redux";
import ToolTip from "../ToolTip";
import { StudentsDetailstable } from "./StudentsDetailstable";
import MotionWrapper from "../MotionWrapper";
import useResponsive from "../Hooks/useResponsive";

// import Loader3D from "../../../../components/Loader/Loader3D";
const StudentProfileDetailsCard = () => {
  const leadDetailsLoading = false;
  const leadDetails = {};

  return (
    <Box>
      <MotionWrapper directions={"right"} delay={1.5}>
        <Paper elevation={2} sx={{ borderRadius: 3 }}>
          {leadDetailsLoading ? (
            <></>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box mt={1}>
                  <Stack direction={"column"} spacing={0}>
                    <MotionWrapper directions={"bottom"} delay={1}>
                      <Box sx={{ display: "flex", pl: 1 }}>
                        <AvatarGroup max={4}>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://www.granitenet.com/wp-content/uploads/2023/11/Benefits-CustomerService-Photo.jpg"
                          />
                          <Avatar
                            alt="Travis Howard"
                            src="https://media.istockphoto.com/id/1423369897/photo/call-center-worker.jpg?s=612x612&w=0&k=20&c=KaxWNnsroknjxkXjfJijLhmdomOGFt4T-RwUF0qK3hc="
                          />
                          <Avatar
                            alt="Cindy Baker"
                            src="https://media.istockphoto.com/id/1331493599/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ocaFzVRnDARFnANjyd6CMrwAI0Ua6I0Na_MKej8IysA="
                          />
                          <Avatar
                            alt="Agnes Walker"
                            src="https://media.istockphoto.com/id/1326217843/photo/shot-of-a-young-women-telemarketer-and-it-support-worker-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=JnA3x4xdQzEZ46L1i3tfseBFEtsvI6cVjf526y7zxo0="
                          />
                          <Avatar
                            alt="Trevor Henderson"
                            src="https://media.istockphoto.com/id/883698088/photo/happy-to-help.jpg?s=612x612&w=0&k=20&c=jI24l5jqWn3hJ-3y_r_2yr108G2449THJMwaMZMxf7A="
                          />
                        </AvatarGroup>
                      </Box>
                    </MotionWrapper>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 200,
                          fontStyle: "italic",
                        }}
                      >
                        "Every student has the power to shape their future; all
                        they need is guidance, effort, and belief in their
                        potential."
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
              {/* ----------------------------------------------------------------------- */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Stack direction={"row"} spacing={2}>
                  <ToolTip
                    action={() => {
                      if (leadDetails) {
                        window.open(
                          `https://wa.me/${leadDetails.contactNo}`,
                          "_blank"
                        );
                      }
                    }}
                    content={
                      <IconPaper>
                        <Icon
                          icon="ic:baseline-whatsapp"
                          height={23}
                          width={23}
                        />
                      </IconPaper>
                    }
                    expand={
                      leadDetails ? leadDetails.contactNo : "Not Available..!"
                    }
                  />

                  <ToolTip
                    content={
                      <IconPaper>
                        <Icon
                          icon="ic:outline-alternate-email"
                          height={23}
                          width={23}
                        />
                      </IconPaper>
                    }
                    expand={leadDetails?.email || "Not Available..!"}
                  />
                  <ToolTip
                    content={
                      <IconPaper>
                        <Icon
                          icon="material-symbols:school-outline"
                          height={23}
                          width={23}
                        />
                      </IconPaper>
                    }
                    expand={leadDetails?.schoolName || "Not Available..!"}
                  />
                </Stack>
              </Box>
              {/* -----------------------------details------------------------------------------ */}
              <Box>
                <Box>
                  <StudentsDetailstable data={leadDetails} />
                </Box>
              </Box>
            </>
          )}
        </Paper>
      </MotionWrapper>
    </Box>
  );
};

export default StudentProfileDetailsCard;
