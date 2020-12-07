import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { dataContext } from "../DataContext";

const Cart = () => {
  const [reRender, setReRender] = useState(false);
  const data = useContext(dataContext);

  const {
    items,
    deleteItem,
    increaseItem,
    decreaseItem,
    checkout,
  } = useContext(CartContext);

  const handleDecrease = (event) => {
    let equalOne = false;
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].productID === event.target.value &&
        items[i].quantity === 1
      ) {
        equalOne = true;
      }
    }

    if (equalOne) {
      deleteItem(event.target.value);
    } else {
      decreaseItem(event.target.value);
    }
    setReRender(!reRender);
  };

  const totalAmount = () => {
    let amount = 0;
    for (let i = 0; i < items.length; i++) {
      amount = amount + data[items[i].productID].price * items[i].quantity;
    }
    return amount;
  };

  return (
    <div>
      <h4>Cart</h4>
      <ul>
        {items.map((itemObj) => {
          return (
            <li key={itemObj.productID}>
              {itemObj.productID} {itemObj.quantity}{" "}
              {data[itemObj.productID].price}{" "}
              {data[itemObj.productID].price * itemObj.quantity};{" "}
              <button
                onClick={(event) => {
                  increaseItem(event.target.value);
                  setReRender(!reRender);
                }}
                value={itemObj.productID}
              >
                +
              </button>
              <button onClick={handleDecrease} value={itemObj.productID}>
                -
              </button>
              <button
                onClick={(event) => {
                  deleteItem(event.target.value);
                  setReRender(!reRender);
                }}
                value={itemObj.productID}
              >
                Delete
              </button>
              <img
                src={data[itemObj.productID].img}
                alt={itemObj.productID}
                width={100}
                height={100}
              ></img>
            </li>
          );
        })}
      </ul>

      <h3>Total: {totalAmount()}</h3>
      <button
        onClick={() => {
          checkout();
          setReRender(!reRender);
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
