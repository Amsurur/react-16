import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Api = "https://6697657702f3150fb66d72df.mockapi.io/users";

export const GetTodo = createAsyncThunk("counter/GetTodo", async () => {
  try {
    const { data } = await axios.get(Api);
    return data;
  } catch (error) {
    console.error(error);
  }
});
export const DeleteTodo = createAsyncThunk(
  "counter/DeleteTodo",
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.delete(`${Api}/${id}`);
      dispatch(GetTodo());
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
