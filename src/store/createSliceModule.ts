import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  async (item: any, { getState }) => {
    const state: any = getState();
    const updatedBasket = [...state.basket.items, item];
    return updatedBasket;
  }
);

export const deleteFromBasket = createAsyncThunk(
  "basket/deleteFromBasket",
  async (itemId: string, { getState }) => {
    const state: any = getState();
    const currentBasket = state.basket.items;
    const updatedBasket = currentBasket.filter(
      (item: any) => item.id !== itemId
    );
    return updatedBasket;
  }
);

export interface BasketState {
  items: any[];
  isLoading: boolean;
  isError: boolean | string | null;
}

const initialState: BasketState = {
  items: [],
  isLoading: false,
  isError: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToBasket.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addToBasket.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = false;
        state.items = action.payload;
      })
      .addCase(addToBasket.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.items = [];
      })
      .addCase(deleteFromBasket.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        deleteFromBasket.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = false;
          state.items = action.payload;
        }
      )
      .addCase(
        deleteFromBasket.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = action.payload;
          state.items = [];
        }
      );
  },
});
export const basketReducer = basketSlice.reducer;
