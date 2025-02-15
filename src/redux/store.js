import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { alertSlice } from "./features/alertSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    alerts: alertSlice.reducer,
  },
});
