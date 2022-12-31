import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.details = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const restauranDetails = (state) => state.restaurant.details;

export default restaurantSlice.reducer;
