import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  loading: false,
  error: '',
};

const getGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/greetings/');
    const result = await response.json();

    if (!response.ok) {
      throw new Error(response.message);
    }
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
});
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
