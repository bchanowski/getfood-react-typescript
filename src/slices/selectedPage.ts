import { selectedPageType } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: selectedPageType = {
  pageName: "home",
};

const selectedPageSlice = createSlice({
  name: "selectedPage",
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<string>) => {
      state.pageName = action.payload;
    },
  },
});

export const { setSelectedPage } = selectedPageSlice.actions;

export default selectedPageSlice.reducer;
