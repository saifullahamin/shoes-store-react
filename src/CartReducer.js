const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "DELETE": {
      for (let i = 0; i < state.length; i++) {
        if (state[i].productID === action.payload) {
          state.splice(i, 1);
          return state;
        }
      }
      break;
    }
    case "INCREASE": {
      for (let i = 0; i < state.length; i++) {
        if (state[i].productID === action.payload) {
          state[i].quantity++;
          return state;
        }
      }
      break;
    }
    case "DECREASE": {
      for (let i = 0; i < state.length; i++) {
        if (state[i].productID === action.payload) {
          state[i].quantity--;
          return state;
        }
      }
      break;
    }
    case "CHECKOUT": {
      return [];
    }
    default:
      return state;
  }
};
export default CartReducer;
