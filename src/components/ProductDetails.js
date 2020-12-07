import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../DataContext";

const ProductDetails = () => {
  const data = useContext(dataContext);

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
    </div>
  );
};

export default ProductDetails;
