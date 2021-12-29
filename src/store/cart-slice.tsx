import { createSlice } from "@reduxjs/toolkit";

export interface CartProduct {
  id: string;
  price: number;
  totalPrice: number;
  quantity: number;
  title: string;
  description: string;
}
interface CartState {
  items: CartProduct[];
  totalQuantity: number;
  changed: boolean;
  totalPrice: number;
  orderFormOpened: boolean;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
  totalPrice: 0,
  orderFormOpened: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          description: newItem.description,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem) state.totalPrice -= existingItem.price;
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
    openOrderForm(state) {
      state.orderFormOpened = true;
    },
    closeOrderForm(state) {
      state.orderFormOpened = true;
    },
  },
});

export const cartActions = cartSlice.actions;
