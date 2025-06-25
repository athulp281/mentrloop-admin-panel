import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/authSlice";
import grievancereducer from "./features/grievanceSlice";
import leadsReducer from "./features/leadSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    grievance: grievancereducer,
    leads: leadsReducer,
  },
});
