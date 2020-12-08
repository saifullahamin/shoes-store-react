import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../DataContext";
import { CartContext } from "../CartContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 70,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 30,
  },
  paperX: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 30,
    fontSize: 18,
  },
  grid: {
    marginTop: 30,
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

const ProductDetails = () => {
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

  const { productID } = useParams();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={12} sm={12} lg={12}>
          <Paper className={classes.paper}>
            <h2>{data[productID].name}</h2>
            <h2>${data[productID].price}</h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Paper className={classes.paper}>
            <img
              src={data[productID].img}
              alt={productID}
              className={classes.img}
            ></img>
            <br />
            <button
              className={classes.button}
              onClick={handleAddition}
              value={productID}
            >
              Add to Cart
            </button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Paper className={classes.paperX}>
            <p>{data[productID].detail}</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
