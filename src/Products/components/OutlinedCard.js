import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "Styles/Card.css"
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { addToCart } from "Cart/helper/AddToCart";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 200,
    "align-items": "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 60,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    "align-items": "center",
    width: "50%",
    background: "#f0c14b",
    border: "1px solid",
    "margin-top": "50px",
    "border-color": "#a88734 #9c7e31 #846a29",
    "text-align": "center",
    cursor: "pointer",
    outline: "none",
    color: "black",
    "border-radius": "15px",
    "box-shadow": "0 2px #999",
  },
});

export default function OutlinedCard({details}) {
  const [cookies,setCookies] = useCookies("");
   const history = useHistory();
  const classes = useStyles();
 
  const bull = <span className={classes.bullet}>•</span>;
  var myObject;
  if(details){
       myObject = details.description;
  }
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h5" component="h2">
          {details && details.name}
        </Typography>

        <Typography variant="body2" component="p">
          {details &&
            Object.entries(myObject).map(([key, value]) => (
              <h4>
                <li>
                  {key}:{value}
                </li>
              </h4>
            ))}
          <br />
          {details && (
            <p className="checkoutProduct__price">
              <strong>Price:</strong>
              <small>&#8377;</small>
              <strong>{details.price}</strong>
            </p>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => addToCart(cookies, details.id, history)}
          size="small"
          className={classes.button}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
