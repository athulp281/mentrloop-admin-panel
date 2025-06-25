import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../api/request";

const initialState = {
  loading: false,
  data: [],
};

export const getAllLeads = createAsyncThunk("leads/getAllLeads", async () => {
  const res = await apiRequest({
    url: "api/get-all-leads",
    method: "get",
  });

  return res;
});

const leadSlice = createSlice({
  name: "leads",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(getAllLeads.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getAllLeads.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload.leads,
        loading: false,
      };
    });
  },
});

export default leadSlice.reducer;
