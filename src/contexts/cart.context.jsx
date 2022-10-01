import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  //if product already in cart update quantity
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
       cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem)
    
  }

  //if product not in cart, add to cart and set quantity to 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (product) => setCartItems(addCartItem(cartItems, product));
  useEffect(()=>{
    const cartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(cartTotal)
  }, [cartItems])
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
