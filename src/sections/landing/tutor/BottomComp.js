import { Icon } from "@iconify/react";
import {
  Avatar,
  AvatarGroup,
  Box,
  LinearProgress,
  linearProgressClasses,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { GlobalBarChart } from "./Chart";
import Image from "next/image";
import tutor from "./tutor.png";

const BottomComp = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded", // Applies a rounded effect to the bar edges
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["2020", "2021", "2022", "2023", "2024"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical", // Defines gradient direction
        shadeIntensity: 0.5,
        gradientToColors: ["#a125c2"], // End color of the gradient
        inverseColors: false,
        stops: [0, 50, 100], // Defines the color stops
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}K`,
      },
    },
    colors: ["#0089d0"], // Start color of the gradient
  };

  const chartSeries = [
    {
      name: "Tutor Count",
      data: [30, 40, 50, 60, 80],
    },
  ];
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));
  return (
    <Box padding={4}>
      <Paper elevation={0.7} sx={{ borderRadius: 5 }}>
        <Stack direction={"row"} spacing={3}>
          <Box>
            <Box padding={3}>
              <AvatarGroup max={5}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://gtscholars.org/content/uploads/Untitled-1200-%C3%97-628-px-1200x600@2x.png"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://www.corporatevision-news.com/wp-content/uploads/2020/07/online-learning-1.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://classplusapp.com/growth/wp-content/uploads/2023/05/How-To-Become-An-Online-Tutor-Know-all-about-it-1024x684.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://media.istockphoto.com/id/1223044329/photo/confident-man-teacher-wearing-headset-speaking-holding-online-lesson.jpg?s=612x612&w=0&k=20&c=xKYLqKd6obXrUazZg5PDCycrwPiFXHVEJzqi0lxh78Q="
                />
              </AvatarGroup>
            </Box>
            <Box
              sx={{
                pt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Space Grotesk, serif",
                  fontSize: 22,
                  fontWeight: 900,
                }}
              >
                <Icon
                  icon="fluent:target-arrow-16-regular"
                  height={23}
                  width={23}
                />
                100%
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Space Grotesk, serif",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Efficient & Effective Tutors
              </Typography>
            </Box>
          </Box>
          {/* ------------------------------- */}
          <Box padding={2}>
            <Paper sx={{ borderRadius: 3, border: 1, borderColor: "grey.300" }}>
              <Box pl={3}>
                <Typography sx={{ color: "grey.500", fontSize: 13 }}>
                  Total Tutors
                </Typography>
              </Box>
              <Box pl={3}>
                <Typography variant="h4" sx={{}}>
                  18,354
                </Typography>
              </Box>
              <Box>
                <ReactApexChart
                  options={chartOptions}
                  series={chartSeries}
                  type="bar"
                  height={250}
                />
              </Box>
            </Paper>
          </Box>

          {/* ----------------------------------------------- */}
          <Box padding={2} width={"100%"}>
            <Paper
              sx={{
                background: `linear-gradient(to right, #F4F6FF 0%, #F4F6FF 10%, #b85fd3 100%)`,
                borderRadius: 5,
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <Box sx={{ minWidth: "60%" }}>
                  <Box sx={{ display: "flex" }}>
                    <Image
                      src={tutor}
                      height={350}
                      width={540}
                      alt="tutor"
                      priority
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "40%",
                    borderRadius: 5,
                    pt: 24,
                    display: "flex",
                    justifyContent: "flex-end",
                    pr: 2,
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 3,
                      width: "100%",
                      height: 140,
                    }}
                  >
                    <Box padding={1.5}>
                      <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                        Total Data
                      </Typography>
                      <Box pl={1}>
                        <Typography sx={{ fontSize: 11, color: "grey.500" }}>
                          Data count..!
                        </Typography>
                      </Box>
                    </Box>

                    <Box padding={2}>
                      <Box>
                        <Typography variant="h4">30757</Typography>
                      </Box>
                      <BorderLinearProgress variant="determinate" value={50} />
                    </Box>
                  </Paper>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default BottomComp;
