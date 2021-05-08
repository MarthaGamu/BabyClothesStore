import React, { createContext, useReducer, useContext } from 'react';
import {
  ADD_TO_BASKET,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_BASKET,
} from './actions';
import reducer, { initialState } from './reducer';
const StateContext = createContext();

export const useBasket = () => useContext(StateContext);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (product) => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: product,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: id,
    });
  };
  const Increment = (Id) => {
    dispatch({
      type: INCREMENT,
      payload: Id,
    });
    console.log('Increment Id captured', Id);
  };
  const Decrement = (Id) => {
    dispatch({
      type: DECREMENT,
      payload: Id,
    });
    console.log('Decrement has been captured', Id);
  };
  const totalBasket = state.basket.reduce(function (accumulator, basket) {
    return accumulator + basket.quantity;
  }, 0);
  return (
    <StateContext.Provider
      value={{
        basket: state.basket,
        amount: state.amount,
        addToBasket,
        removeItem,
        Increment,
        Decrement,
        totalBasket,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default StateProvider;
