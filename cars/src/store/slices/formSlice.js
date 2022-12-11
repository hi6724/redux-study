import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
const initialState = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => initialState);
  },
});

export const { changeCost, changeName, reset } = formSlice.actions;
export const formReducer = formSlice.reducer;
