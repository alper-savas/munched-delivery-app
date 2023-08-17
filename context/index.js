import { createSlice, configureStore, current } from "@reduxjs/toolkit";

export const initialState = {
  itemList: [],
  totalQuantity: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      if (state.itemList.length === 0) {
        state.itemList = [{ item: action.payload.item, quantity: 1 }];
      } else if (
        state.itemList.find(
          (item) => item.item.name === action.payload.item.name
        ) === undefined
      ) {
        state.itemList = [
          ...state.itemList,
          { item: action.payload.item, quantity: 1 },
        ];
      } else {
        const currentItem = state.itemList.find(
          (item) => item.item.name === action.payload.item.name
        );
        currentItem.quantity += 1;
        state.itemList = [...state.itemList];
      }
      state.totalQuantity += 1;
    },
    removeItem(state, action) {
      if (state.itemList.length <= 1) {
        if (state.itemList[0].quantity === 1) {
          state.itemList = [];
        } else {
          state.itemList[0].quantity -= 1;
          state.itemList = [...state.itemList];
        }
      } else {
        const currentItem = state.itemList.find(
          (item) => item.item.name === action.payload.item
        );
        if (currentItem.quantity === 1) {
          state.itemList = state.itemList.filter(
            (item) => item.item.name !== action.payload.item
          );
        } else {
          currentItem.quantity -= 1;
          state.itemList = [...state.itemList];
        }
      }
      state.totalQuantity += 1;
    },
    openCard(state) {},
    closeCard(state) {},
  },
});

const context = configureStore({
  reducer: orderSlice.reducer,
});

export const orderActions = orderSlice.actions;

export default context;
