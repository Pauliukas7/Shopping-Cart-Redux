import {
  cartActions,
  CartProduct,
  cartSlice,
  CartState,
} from "../store/cart-slice";
const item1: CartProduct = {
  id: "p1",
  price: 5,
  totalPrice: 5,
  quantity: 1,
  title: "Pizza",
  description: "Yummy",
};

const item2: CartProduct = {
  id: "p2",
  price: 6,
  totalPrice: 6,
  quantity: 1,
  title: "Sushi",
  description: "Wow",
};

const cartStateNoItems: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
  totalPrice: 0,
};

const cartStateWithOneItem: CartState = {
  items: [item1],
  totalQuantity: 1,
  changed: true,
  totalPrice: 5,
};

const cartStateWithSameItems: CartState = {
  items: [{ ...item1, quantity: 2, totalPrice: 10 }],
  totalQuantity: 2,
  changed: true,
  totalPrice: item1.price * 2,
};

const cartStateWithDifferentItems: CartState = {
  items: [item1, item2],
  totalQuantity: 2,
  changed: true,
  totalPrice: item1.price + item2.price,
};

//Adding items to cart

describe("Redux Add to Cart actions", () => {
  it("should add items to cartState", () => {
    expect(
      cartSlice.reducer(cartStateNoItems, cartActions.addItemToCart(item1))
    ).toStrictEqual({
      items: [item1],
      totalPrice: 5,
      totalQuantity: 1,
      changed: true,
    });
  });

  it("should increase quantity and price of existing item and cart", () => {
    expect(
      cartSlice.reducer(
        cartStateWithSameItems,
        cartActions.addItemToCart(item1)
      )
    ).toStrictEqual({
      items: [{ ...item1, quantity: 3, totalPrice: 15 }],
      totalPrice: 15,
      totalQuantity: 3,
      changed: true,
    });
  });

  it("should add a second different item to cart and increase cart total quantity and price", () => {
    expect(
      cartSlice.reducer(cartStateWithOneItem, cartActions.addItemToCart(item2))
    ).toStrictEqual({
      items: [item1, item2],
      totalPrice: 11,
      totalQuantity: 2,
      changed: true,
    });
  });
});

//Removing items from cart

describe("Redux Remove from Cart actions", () => {
  it("should remove item from cart (1 item in cart)", () => {
    expect(
      cartSlice.reducer(
        cartStateWithOneItem,
        cartActions.removeItemFromCart(item1.id)
      )
    ).toStrictEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      changed: true,
    });
  });

  it("should remove item from cart (multiple same items in cart)", () => {
    expect(
      cartSlice.reducer(
        cartStateWithSameItems,
        cartActions.removeItemFromCart(item1.id)
      )
    ).toStrictEqual({
      items: [{ ...item1, totalPrice: 5, quantity: 1 }],
      totalPrice: 5,
      totalQuantity: 1,
      changed: true,
    });
  });

  it("should remove item from cart (multiple different items in cart)", () => {
    expect(
      cartSlice.reducer(
        cartStateWithDifferentItems,
        cartActions.removeItemFromCart(item1.id)
      )
    ).toStrictEqual({
      items: [item2],
      totalPrice: 6,
      totalQuantity: 1,
      changed: true,
    });
  });
});
