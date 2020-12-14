import { useReducer } from "react";
import CartReducer from "./CartReducer";
import { cartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, []);

  function addItem(productObj) {
    dispatch({
      type: "ADD",
      payload: productObj,
    });
  }
  function deleteItem(productId) {
    dispatch({
      type: "DELETE",
      payload: productId,
    });
  }
  function increaseItem(productId) {
    dispatch({
      type: "INCREASE",
      payload: productId,
    });
  }
  function decreaseItem(productId) {
    dispatch({
      type: "DECREASE",
      payload: productId,
    });
  }
  function checkout() {
    dispatch({
      type: "CHECKOUT",
    });
  }

  return (
    <cartContext.Provider
      value={{
        items: state,
        addItem,
        deleteItem,
        increaseItem,
        decreaseItem,
        checkout,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
