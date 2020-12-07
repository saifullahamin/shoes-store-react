import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="products">Products</Link>
    </div>
  );
};

export default Header;
