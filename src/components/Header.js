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
    position: "fixed",
    // left: 0,
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "rgb(0,0,0)",
    padding: "10px 30px",
    fontSize: 15,
    fontWeight: 400,
  },
  appBar: {
    backgroundColor: "rgb(255, 255, 255)",
  },
  logo: {
    "&:hover": {
      cursor: "pointer",
    },
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
            <img
              onClick={() => navigate("/")}
              className={classes.logo}
              src="https://emoji.gg/assets/emoji/nike.png"
              width="64px"
              height="64px"
              alt="nike"
            />
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
