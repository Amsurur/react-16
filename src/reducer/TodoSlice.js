import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Maruf",
      phone: "9876543212",
      status: false,
    },
  ],
  addName: "",
  addPhone: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleChangeName: (state, action) => {
      state.addName = action.payload;
    },
    handleChangePhone: (state, action) => {
      state.addPhone = action.payload;
    },
    handSaveAdd: (state) => {
      let obj = {
        id: Date.now(),
        name: state.addName,
        phone: state.addPhone,
        status: false,
      };
      state.data.push(obj);
      state.addName = "";
      state.addPhone = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleChangeName, handleChangePhone, handSaveAdd } =
  counterSlice.actions;

export default counterSlice.reducer;
