import { createSlice } from "@reduxjs/toolkit";
import { GetTodo } from "../api/TodoApi";

const initialState = {
  data: [],
  isLoading: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(GetTodo.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = action.payload;
    });
    builder.addCase(GetTodo.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
