import React, { useReducer, useContext, createContext } from 'react';
import Product from '../Product/Product';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      let productExist = state.products.find(
        (item) => item.id === action.item.id
      );
      if (productExist) {
        const updatedProducts = state.products.map((product) => {
          if (product.id === action.item.id) {
            console.log('product.quantity', product.quantity);
            product.quantity++;
          }

          return product;
        });
        return { ...state, products: updatedProducts };
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.item, quantity: 1 }],
        };
      }

    case 'REMOVE':
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case 'INCREMENT':
      // return state.map((product) => {
      //   if (product.id === action.id) {
      //     product.quantity++;
      //     return product;
      //   }

      //   return product;
      // });
      let tempCart = [...state];
      const SelectedProduct = tempCart.find((item) => item.id === action.id);
      const index = tempCart.indexOf(SelectedProduct);
      const product = tempCart[index];

      product.quantity = product.quantity + 1;
      return tempCart;
    case 'DECREMENT':
      return state.map((product) => {
        console.log('decrement called state ', state);
        console.log('decrement called product.id ', product.id);
        console.log('decrement called action.id ', action.id);
        if (product.id === action.id) {
          product.quantity === 0 ? product.quantity : product.quantity--;
          console.log('decrement called product.quantity ', product.quantity);
          return product;
        }

        return product;
      });
  }
};

export const CartProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, { products: [] });

  const addToCart = (item) => {
    dispatch({ type: 'ADD', item });
  };
  const increment = (id) => {
    dispatch({ type: 'INCREMENT', id });
  };
  const decrement = (id) => {
    dispatch({ type: 'DECREMENT', id });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE', item });
  };

  return (
    <CartStateContext.Provider
      value={{
        products,
        increment,
        decrement,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
