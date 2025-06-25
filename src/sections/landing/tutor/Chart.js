import React, { useEffect, useState } from "react";
import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
import BaseOptionChart from "@/components/BaseOptionChart";

// ----------------------------------------------------------------------

export const GlobalBarChart = ({
  title,
  subheader,
  chartData,
  horizontalView,
  maxY,
  chartEdit, //IF THE CHART USES IN COURSE REGISTRATION ,STYLE IS CHANGE WRT THIS BOOLEAN
}) => {
  const dataLabel = chartData?.map((item) => item.label);
  const dataValues = chartData?.map((item) => item.value);
  const CHART_DATA = [{ data: dataValues }];

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => seriesName,
        title: {
          formatter: () => "",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: horizontalView,
        barHeight: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: dataLabel,
    },
    yaxis: {
      max: maxY,
    },
  });

  return (
    // <Card>
    <>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: chartEdit ? 0 : 3 }}>
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </>
    // </Card>
  );
};
