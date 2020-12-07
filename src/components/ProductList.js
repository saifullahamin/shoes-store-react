import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../DataContext";

const ProductList = () => {
  const data = useContext(dataContext);
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
