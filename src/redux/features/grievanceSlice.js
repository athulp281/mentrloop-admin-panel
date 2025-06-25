import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../api/request";
import { formatDataForDataTable } from "@/utils/formatData";

const initialState = {
  loading: false,
  data: [],
  allGrievancedata: [],
  studentCourses: [],
  grievanceJourneyData: [],
  studentProfileData: {},
};

export const createNewGrievance = createAsyncThunk(
  "grievance/createNewGrievance",
  async (data) => {
    const res = await apiRequest({
      url: "grievance",
      method: "post",
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

    return res;
  }
);

export const getAllGrievance = createAsyncThunk(
  "grievance/getAllGrievance",
  async () => {
    const res = await apiRequest({
      url: "grievance",
      method: "get",
    });
    return res;
  }
);
export const getStudentsCourse = createAsyncThunk(
  "grievance/getStudentsCourse",
  async () => {
    const res = await apiRequest({
      url: "grievance/courses",
      method: "get",
    });
    return res;
  }
);

export const deleteRequest = createAsyncThunk(
  "grievance/deleteRequest",
  async (id) => {
    const res = await apiRequest({
      url: `grievance/${id}`,
      method: "delete",
    });
    return res;
  }
);
export const updateGrievance = createAsyncThunk(
  "grievance/updateGrievance",
  async (data) => {
    const res = await apiRequest({
      url: `grievance/${data.id}`,
      method: "patch",
      data: data,
    });
    return res;
  }
);

export const getGrievanceJourney = createAsyncThunk(
  "grievance/getGrievanceJourney",
  async (id) => {
    const res = await apiRequest({
      url: `grievance/journey/${id}`,
      method: "get",
    });
    return res;
  }
);
export const studentDetails = createAsyncThunk(
  "grievance/studentDetails",
  async () => {
    const res = await apiRequest({
      url: `grievance/details`,
      method: "get",
    });
    return res;
  }
);

const grievanceSlice = createSlice({
  name: "grievance",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(createNewGrievance.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(createNewGrievance.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
      };
    });
    // -----------------getAllGrievance------------------------------
    builder.addCase(getAllGrievance.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getAllGrievance.fulfilled, (state, action) => {
      const data = formatDataForDataTable(action.payload.data);
      return {
        ...state,
        allGrievancedata: data,
        loading: false,
      };
    });
    // ------------getStudentsCourse--------------------------
    builder.addCase(getStudentsCourse.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getStudentsCourse.fulfilled, (state, action) => {
      const data = formatDataForDataTable(action.payload.data);
      return {
        ...state,
        studentCourses: data,
        loading: false,
      };
    });
    // -----------------deleteRequest----------------------------

    builder.addCase(deleteRequest.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(deleteRequest.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
      };
    });
    // ---------------updateGrievance------------------------------

    builder.addCase(updateGrievance.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(updateGrievance.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
      };
    });
    // -----------------getGrievanceJourney--------------------------------

    builder.addCase(getGrievanceJourney.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getGrievanceJourney.fulfilled, (state, action) => {
      const data = action.payload.data;
      return {
        ...state,
        grievanceJourneyData: data,
        loading: false,
      };
    });
    // ---------------studentDetails--------------------------------
    builder.addCase(studentDetails.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(studentDetails.fulfilled, (state, action) => {
      const data = action.payload.data;
      return {
        ...state,
        studentProfileData: data,
        loading: false,
      };
    });
  },
});

export default grievanceSlice.reducer;
