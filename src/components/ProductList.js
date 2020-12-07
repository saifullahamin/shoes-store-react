import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../DataContext";
import { CartContext } from "../CartContext";

const ProductList = () => {
  const data = useContext(dataContext);

  const { addItem, items } = useContext(CartContext);

  const handleAddition = (event) => {
    document.getElementById(event.target.value).innerHTML = "Added";

    if (!items.find((item) => item.productID === event.target.value)) {
      const productObj = {
        productID: event.target.value,
        quantity: 1,
      };
      addItem(productObj);
    }
  };

  return (
    <div>
      <ul>
        {Object.entries(data).map(([productID, { name, img, price }]) => {
          return (
            <li key={productID}>
              <Link to={productID}>
                <h3>{name}</h3>
                <h3>${price}</h3>
                <img height={300} width={300} src={img} alt={name}></img>
              </Link>
              <br />
              <button onClick={handleAddition} value={productID} id={productID}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
