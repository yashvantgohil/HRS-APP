import {
  ButtonBase,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ProductDetail = (props) => {
  const id = props.match.params.id;

  const product = useSelector((state) =>
    state.productState.products.find((x) => x.id === Number(id))
  );

  const classes = useStyles();

  const productDetails = product ? (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://picsum.photos/300/300"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Price
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Name : {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID : {product.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <KeyboardBackspaceIcon
                    onClick={() => props.history.push("/")}
                  />
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{product.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  ) : (
    <h3>No Detail Found</h3>
  );

  return <Container style={{ marginTop: "30px" }}>{productDetails}</Container>;
};

export default ProductDetail;
