import { configureStore } from "@reduxjs/toolkit";
import selectedPageReducer from "./slices/selectedPage";

const store = configureStore({
  reducer: {
    selectedPage: selectedPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
