import { createSlice } from "@reduxjs/toolkit";

export const setError = (message) => (dispatch) => {
  dispatch(set(message));
};

const initialState = {
  errors: [],
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    set(state, action) {
      state.errors.push(action.payload);
    },
  },
});

const { set } = errorsSlice.actions;

export default errorsSlice.reducer;
