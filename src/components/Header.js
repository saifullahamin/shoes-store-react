import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Header = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="products">Products</Link>
      {" | "}
      <Link to="cart">Cart</Link> {items.length}
    </div>
  );
};

export default Header;
