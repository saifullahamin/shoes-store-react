import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "'Sacramento', cursive",
    flexGrow: 1,
    color: "rgb(0,0,0)",
    fontSize: 35,
    fontStyle: "italic",
    paddingTop: 7,
  },
  button: {
    color: "rgb(0,0,0)",
    padding: "10px 40px",
    fontSize: 15,
    fontWeight: 400,
  },
  appBar: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: "5px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { items } = useContext(CartContext);
  const cartItems = () => {
    if (items.length > 0) {
      return items.length;
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Nike Shoes
          </Typography>
          <Button className={classes.button} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            className={classes.button}
            onClick={() => navigate("products")}
          >
            Products
          </Button>

          <Button className={classes.button} onClick={() => navigate("cart")}>
            <ShoppingCartOutlinedIcon /> <span>{cartItems()}</span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../CartContext";

// const Header = () => {
//   const { items } = useContext(CartContext);
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       {" | "}
//       <Link to="products">Products</Link>
//       {" | "}
//       <Link to="cart">Cart</Link> {items.length}
//     </div>
//   );
// };

// export default Header;
