import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../DataContext";
import { CartContext } from "../CartContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginBottom: 70,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 30,
  },
  list: {
    listStyleType: "none",
  },
  grid: {
    maxWidth: "100%",
  },
  img: {
    maxWidth: "100%",
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 3,
    border: "1px solid #dcdcdc",
    cursor: "pointer",
    color: "#666666",
    fontSize: 15,
    fontWeight: 400,
    padding: "6px 24px",
    textDecoration: "none",
    outline: "none",
    "&:hover": {
      background: "rgb(235, 235, 235)",
    },
    "&:active": {
      background: "rgba(235, 235, 235, 0.5)",
    },
  },
}));

const ProductList = () => {
  const data = useContext(dataContext);
  const classes = useStyles();
  const { addItem, items } = useContext(CartContext);

  const handleAddition = (event) => {
    if (!items.find((item) => item.productID === event.target.value)) {
      const productObj = {
        productID: event.target.value,
        quantity: 1,
      };
      addItem(productObj);
    }
  };

  return (
    <div className={classes.root}>
      <ul>
        <Grid container spacing={3} className={classes.grid}>
          {Object.entries(data).map(([productID, { name, img, price }]) => {
            return (
              <Grid item xs={12} sm={6} lg={4}>
                <li key={productID} className={classes.list}>
                  <Paper className={classes.paper}>
                    <h3>{name}</h3>
                    <h3>${price}</h3>
                    <Link to={productID}>
                      <img className={classes.img} src={img} alt={name}></img>
                    </Link>
                    <br />
                    <button
                      className={classes.button}
                      onClick={handleAddition}
                      value={productID}
                    >
                      Add to Cart
                    </button>
                  </Paper>
                </li>
              </Grid>
            );
          })}
        </Grid>
      </ul>
    </div>
  );
};

export default ProductList;
