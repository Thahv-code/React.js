import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterslice";

// Tạo store ứng dụng
export const store = configureStore({
  reducer: {
    counter: counterReducer, // map reducer counterSlice
  },
  devTools: true, // bật Redux DevTools
});

// Định nghĩa type cho RootState và AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
