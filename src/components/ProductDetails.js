import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../DataContext";
import { CartContext } from "../CartContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
    borderTop: "2px solid rgb(240, 240, 240)",
    marginTop: 0,
  },
  paperX: {
    borderTop: "2px solid rgb(240, 240, 240)",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: 30,
    fontSize: 18,
  },
  grid: {
    marginTop: 0,
  },
  img: {
    maxWidth: "100%",
    padding: "5px 20px",
  },
  button: {
    color: "#666666",
  },
}));

const ProductDetails = () => {
  const data = useContext(dataContext);
  const classes = useStyles();
  const { addItem, items } = useContext(CartContext);

  const handleAddition = (event) => {
    if (!items.find((item) => item.productID === event)) {
      const productObj = {
        productID: event,
        quantity: 1,
      };
      addItem(productObj);
    }
  };

  const { productID } = useParams();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid}>
        <Grid item sm={12}>
          <Paper className={classes.paperX}>
            <h2>{data[productID].name}</h2>
            <h2>${data[productID].price}</h2>
            <hr />
            <p>{data[productID].detail}</p>
          </Paper>
        </Grid>
        <Grid item sm={12}>
          <Paper className={classes.paper}>
            <img
              src={data[productID].img2}
              alt={productID}
              className={classes.img}
            ></img>
            <img
              src={data[productID].img}
              alt={productID}
              className={classes.img}
            ></img>
            <br />
            <Button
              className={classes.button}
              onClick={() => handleAddition(productID)}
              variant="outlined"
            >
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
