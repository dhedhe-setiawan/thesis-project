import PropTypes from 'prop-types';
import { createContext, useCallback, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  const updateCart = useCallback((id, jumlah) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id_barang === id);

      if (jumlah > 0) {
        return existingItem
          ? prevCart.map(item =>
              item.id_barang === id ? { ...item, jumlah } : item
            )
          : [...prevCart, { id_barang: id, jumlah }];
      } else {
        return prevCart.filter(item => item.id_barang !== id);
      }
    });
  }, []);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id_barang !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any,
};
