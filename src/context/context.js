import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [productsList, setCartList] = useState([]);
  const [orderId, setorderId] = useState('');

  // >> SHOPING CART
  // ADD product in shop cart
  const addToCart = (product) => {
    setorderId(''); // reset orederId

    const cart = [
      ...productsList,
      product
    ];
 
    const shopingCart = cart.reduce((acc, product) => {
      const existingItem = acc.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.count += product.count;
      } else {
        acc.push(product);
      }
      return acc;
    }, []);

    setCartList(shopingCart);
  }

  // REMOVE product in shop cart
  const removeItem = (id) => {
    const updatedShopingCart = productsList.filter(item => item.id !== id);
    setCartList(updatedShopingCart);
  };

  // CLEAR product from shop cart
  const clearCart = () => {
    setCartList([]);
  }

  // GET total items from productsList
  const getTotalItems = () => {
    return productsList.reduce((acc, item) => acc + item.count, 0);
  };

  // GET total price
  const getTotalPrice = () => {
    return productsList.reduce((acc, item) => acc + (item.price * item.count), 0);
  }

  // SET order ID
  const addOrder = (id) => {
    setorderId(id);
  }

  return(
    <CartContext.Provider value={{
      productsList,
      addToCart,
      clearCart,
      removeItem,
      getTotalItems,
      getTotalPrice,
      addOrder,
      orderId,
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;