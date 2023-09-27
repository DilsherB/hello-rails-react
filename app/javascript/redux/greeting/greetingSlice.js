import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const greetingDataFetch = createAsyncThunk("greeting", async () => {
  const response = await fetch("/api/greetings");
  const result = await response.json();

  return result;
});

const initialState = {
  greetingItem: [],
  loading: false,
  error: null,
};

const greetingSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(greetingDataFetch.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(greetingDataFetch.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        greetingItem: action.payload,
      }))
      .addCase(greetingDataFetch.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export default greetingSlice.reducer;
