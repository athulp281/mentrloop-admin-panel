"use client";
import MotionWrapper from "@/components/MotionWrapper";
import Wrapper from "@/components/Wrapper";
import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LEADS_TABLE_HEAD } from "./leadTableHead";
import { getAllLeads } from "@/redux/features/leadSlice";
import CustomGridToolbar from "@/components/CustomGridToolbar";

const Leads = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.leads);
  const [gridSize, setGridSize] = useState(5);
  useEffect(() => {
    dispatch(getAllLeads());
  }, []);
  return (
    <Wrapper title={"All Leads"}>
      <MotionWrapper directions={"bottom"}>
        <Box component={Paper} elevation={3}>
          <DataGrid
            autoHeight
            // disablePagination={false}
            slots={{ toolbar: CustomGridToolbar }}
            loading={loading}
            disableVirtualization
            sx={{
              "& .MuiDataGrid-columnHeaderTitle": {
                textOverflow: "clip",
                whiteSpace: "break-spaces",
                lineHeight: 1,
              },
            }}
            rows={data ? data : []}
            columns={LEADS_TABLE_HEAD}
            getRowId={(row) => row.id}
            pageSize={gridSize}
            rowsPerPageOptions={[5, 10, 25, 50]}
            onPageSizeChange={(newGridSize) => setGridSize(newGridSize)}
          />
        </Box>
      </MotionWrapper>
    </Wrapper>
  );
};

export default Leads;
