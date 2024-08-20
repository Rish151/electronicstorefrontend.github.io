import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // For Cart Count and SubCount
  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let SubTotal = 0;
    cartItems.forEach(
      (item) => (SubTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(SubTotal); // Update subtotal state
  }, [cartItems]);

  // Add product in the Cart
  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity; // Corrected quantity assignment
      items = [...items, product];
    }
    setCartItems(items);
  };

  // Remove Product from Cart
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((item) => item.id !== product.id); // Corrected filter condition
    setCartItems(items);
  };

  // Handle quantity in cart
  const handleCartQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((item) => item.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
