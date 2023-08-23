import { createSlice, configureStore } from "@reduxjs/toolkit";

export const initialState = {
  itemList: [],
  totalQuantity: 0,
  isOpen: false,
  deliveryFee: 0,
  user: [],
  checkout: false,
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
        currentItem.quantity++;
        state.itemList = [...state.itemList];
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const isDefined =
        state.itemList.find(
          (item) => item.item.name === action.payload.item
        ) !== undefined;
      if (state.itemList.length === 0) {
        state.itemList = [];
      } else {
        if (!isDefined) {
          state.itemList = [...state.itemList];
        } else {
          const currentItem = state.itemList.find(
            (item) => item.item.name === action.payload.item
          );
          if (currentItem.quantity === 1) {
            state.itemList = state.itemList.filter(
              (item) => item.item.name !== action.payload.item
            );
          } else {
            currentItem.quantity--;
            state.itemList = [...state.itemList];
          }
        }
      }
      if (state.totalQuantity > 0 && isDefined) {
        state.totalQuantity--;
      }
    },
    openCard(state) {
      state.isOpen = true;
    },
    closeCard(state) {
      state.isOpen = false;
    },
    setDeliveryFee(state, action) {
      state.deliveryFee = action.payload.deliveryFee;
    },
    clear(state) {
      state.itemList = [];
      state.totalQuantity = 0;
    },
    setUser(state, action) {
      state.user = action.payload.userObj;
    },
    clearUser(state) {
      state.user = [];
    },
    setCheckout(state) {
      state.checkout = true;
    },
  },
});

const context = configureStore({
  reducer: orderSlice.reducer,
});

export const orderActions = orderSlice.actions;

export default context;
