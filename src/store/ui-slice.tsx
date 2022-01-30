import { createSlice } from "@reduxjs/toolkit";

export interface Products {
  id: string;
  price: number;
  totalPrice: number;
  quantity: number;
  title: string;
  description: string;
}

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    searchedItemDetailsOpened: false,
    searchedItemDetails: {} as Products,
    featuredProducts: [] as Products[],
    allProducts: [] as any[],
    searchResultsVisible: false,
    inputText: "",
  },
  reducers: {
    toggleCartOn(state) {
      state.cartIsVisible = true;
    },
    toggleCartOff(state) {
      state.cartIsVisible = false;
    },

    load(state, action) {
      const featured = action.payload;
      for (const item of featured.products) state.featuredProducts.push(item);
    },
    loadAllProducts(state, action) {
      const productsBackend = action.payload;
      for (const category in productsBackend)
        state.allProducts.push(...productsBackend[category]);
    },
    showSearchResults(state) {
      state.searchResultsVisible = true;
    },
    hideSearchResults(state) {
      state.searchResultsVisible = false;
    },
    takeSearchTextValue(state, action) {
      action.payload.length > 0
        ? (state.inputText = action.payload)
        : (state.inputText = "");
    },
    openSearchedItemDetails(state, action) {
      state.searchedItemDetailsOpened = true;
      state.searchedItemDetails = action.payload;
    },
    hideSearchedItemDetails(state) {
      state.searchedItemDetailsOpened = false;
    },
  },
});

export const uiActions = uiSlice.actions;
