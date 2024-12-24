import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [total, setTotal] = useState({ totalPrice: 0, totalQuantity: 0 });

  const handleFetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProductItems(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (obj) => {
    const { id, title, image, price } = obj;
    const cartObj = { id, title, image, quantity: 1, price };
    setCartItems((prev) => [...prev, cartObj]);
  };

  const handleDeleteFromCart = (id) => {
    const newCarts = cartItems.filter((item) => item.id !== id);
    setCartItems(newCarts);
  };

  const countTotal = () => {
    let cartLength = cartItems.length;
    let totalCalculatedPrice = 0;
    let totalCalculatedProduct = 0;

    for (let i = 0; i < cartLength; i++) {
      totalCalculatedPrice =
        totalCalculatedPrice + cartItems[i].price * cartItems[i].quantity;
      totalCalculatedProduct = totalCalculatedProduct + cartItems[i].quantity;
    }
    setTotal({
      totalPrice: totalCalculatedPrice,
      totalQuantity: totalCalculatedProduct,
    });
  };

  const handleItemQuantity = (id, type) => {
    console.log(cartItems, "cartitems");
    if (type === "inc") {
      setCartItems((prev) => [
        ...prev.map((item) => {
          console.log(item, "items inside map");
          if (item.id === id) {
            console.log(item, "items");
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      ]);
    } else {
      setCartItems((prev) =>
        [
          ...prev.map((item) => {
            if (item.id === id) {
              if (item.quantity === 1) {
                return null;
              }
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          }),
        ].filter(Boolean)
      );
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    countTotal();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        productItems,
        handleAddToCart,
        handleDeleteFromCart,
        handleItemQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
