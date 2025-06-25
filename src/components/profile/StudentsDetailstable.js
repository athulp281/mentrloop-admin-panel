import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableCell,
  TableRow,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import useResponsive from "../Hooks/useResponsive";
import { useSelector } from "react-redux";

const StudentsDetailstable = () => {
  const { studentProfileData, loading } = useSelector(
    (state) => state.grievance
  );
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");
  const [moreInfo, setMoreInfo] = useState(false);
  const mappableArray = Object.entries(studentProfileData).filter(([key]) =>
    [
      "district",
      "studentMobNo",
      "email",
      "studentClassId",
      "medium",
      "syllbus",
    ].includes(key)
  );

  const MoreDetails = Object.entries(studentProfileData).filter(([key]) =>
    [
      "fatherName",
      "motherName",
      "challenges",
      "learningDirections",
      "tuitionHistory",
      "specifcNeeds",
      "remarks",
    ].includes(key)
  );

  return (
    <Paper
      sx={{
        margin: 1,
        borderRadius: 4,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
        <Stack direction={"row"} spacing={2}>
          <Button
            sx={{ borderRadius: 3 }}
            size="small"
            variant={moreInfo ? "outlined" : "contained"}
            onClick={() => setMoreInfo(false)}
          >
            General
          </Button>
          <Button
            sx={{ borderRadius: 3 }}
            size="small"
            variant={moreInfo ? "contained" : "outlined"}
            onClick={() => setMoreInfo(true)}
          >
            Personal
          </Button>
        </Stack>
      </Box>
      {moreInfo ? (
        <Table sx={{ maxWidth: mdUp ? 300 : "100%" }}>
          <tbody>
            {MoreDetails?.map(([key, value]) => (
              <TableRow key={key}>
                <TableCell variant="head" sx={{ padding: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <span>
                      <Icon
                        color="#0089d0"
                        icon="hugeicons:paragraph-bullets-point-01"
                        width="20"
                        height="20"
                      />
                    </span>

                    <span>{key}</span>
                  </Stack>
                </TableCell>

                <TableCell sx={{ padding: 0.5 }}>
                  <span>{value}</span>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      ) : (
        <>
          {!moreInfo ? (
            <Table sx={{ maxWidth: mdUp ? 320 : "100%" }}>
              <tbody>
                {mappableArray?.map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell variant="head" sx={{ padding: 1 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <span>
                          <Icon
                            color="#0089d0"
                            icon="hugeicons:paragraph-bullets-point-01"
                            width="20"
                            height="20"
                          />
                        </span>

                        <span>{key}</span>
                      </Stack>
                    </TableCell>

                    <TableCell sx={{ padding: 0.5 }}>
                      <span>{value}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          ) : null}
        </>
      )}
    </Paper>
  );
};

export { StudentsDetailstable };
