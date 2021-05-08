import React from 'react';
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  INCREMENT,
  DECREMENT,
  AMOUNT,
} from './actions';

export const initialState = {
  basket: [],
  amount: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const found = state.basket.find((item) => item.id === action.payload.id);
      if (found) {
        const totalQuantity = found.quantity++;
        return { ...state, totalQuantity };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((basket) => basket.id !== action.payload),
      };
    case INCREMENT:
      state.basket.map((basket) => {
        if (basket.id === action.payload) {
          basket.quantity = basket.quantity + 1;
        }
        return basket;
      });
      return { ...state };
    case DECREMENT:
      state.basket.map((basket) => {
        if (basket.id === action.payload) {
          basket.quantity =
            basket.quantity > 0 ? basket.quantity - 1 : (basket.quantity = 0);
        }
        return basket;
      });

      return { ...state };
    default:
      return state;
  }
};
export default reducer;
