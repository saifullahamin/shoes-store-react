import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../DataContext";
import { CartContext } from "../CartContext";

const ProductDetails = () => {
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

  const { productID } = useParams();
  return (
    <div>
      <h4>Product Details</h4>
      <br />
      <h4>{data[productID].name}</h4>
      <h4>${data[productID].price}</h4>
      <img
        height="400px"
        width="400px"
        src={data[productID].img}
        alt={productID}
      ></img>
      <button onClick={handleAddition} value={productID} id={productID}>
        Add to Cart
      </button>
      <p>{data[productID].detail}</p>
    </div>
  );
};

export default ProductDetails;
