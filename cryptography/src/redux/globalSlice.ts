import { createSlice } from "@reduxjs/toolkit";

interface IState {
  loading?: boolean;
  AESKey: ArrayBufferLike;
  bitool: "";
}
const initialState = {
  loading: true,
  AESKey: "",
  bitool: "",
};
const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    fetchRequestStart: (state) => {
      state.loading = true;
    },
    fetchRequestSuccess: (state) => {
      state.loading = false;
    },
    fetchRequestFailure: (state) => {
      state.loading = false;
    },

    //
    setBitool: (state, action) => {
      state.bitool = action.payload;
    },
    setAESKey: (state, action) => {
      state.AESKey = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const {
  fetchRequestStart,
  fetchRequestSuccess,
  fetchRequestFailure,
  setBitool,
  setAESKey,
} = globalSlice.actions;
