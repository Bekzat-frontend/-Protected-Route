import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const BASE_URL = "https://4dadd4e37a0e9cb1.mokky.dev/register";
const initialState = {
  token: "",
  isAuth: false,
};
const RegisterReducer = createAsyncThunk("auth/register", async () => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuth = true;
    });
  },
});
export default authSlice;
