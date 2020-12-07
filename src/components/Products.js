import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h4>Products</h4>
      <Outlet />
    </div>
  );
};

export default Products;
