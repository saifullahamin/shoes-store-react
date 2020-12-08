import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { dataContext } from "../DataContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  corousal: {
    marginTop: 2,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottom: "3px solid rgb(235, 235, 224)",
    backgroundColor: "rgb(252, 252, 252)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgb(252, 252, 252)",
    boxShadow: "0 0",
    fontStyle: "italic",
    fontWeight: "light",
    color: "rgb(89, 89, 89)",
  },
  image: {
    maxWidth: "100%",
  },
  button: {
    marginTop: 50,
    marginBottom: 70,
    padding: "10px 30px",
    fontWeight: 900,
    fontSize: 20,
  },
  list: {
    listStyleType: "none",
  },
}));

const Home = (props) => {
  const data = useContext(dataContext);
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <Carousel className={classes.corousal}>
        {Object.entries(data).map(([productID, { name, img }]) => {
          return (
            <li key={productID} className={classes.list}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.paper}>
                    <h1>{name}</h1>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={8}>
                  <Paper className={classes.paper}>
                    <img className={classes.image} src={img} alt={name}></img>
                  </Paper>
                </Grid>
              </Grid>
            </li>
          );
        })}
      </Carousel>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={() => navigate("products")}
      >
        Let's Shop!
      </Button>
    </div>
  );
};

export default Home;
