import React, { useHistory } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import deleteAddress from "Cart/helper/DeleteAddress";
import { useCookies } from "react-cookie";
import Payment from "./Payment";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 250,
    marginTop: 20,
    marginLeft: 100,
    "align-items": "center",
    "box-shadow": "0 0 5px  black",
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
    // "margin-top": "50px",
    "border-color": "#a88734 #9c7e31 #846a29",
    "text-align": "center",
    cursor: "pointer",
    outline: "none",
    color: "black",
    "border-radius": "15px",
    "box-shadow": "0 2px #999",
  },
});

function AddressCard({ allAddress, history, setdelete }) {
  const [cookies, setCookies, removeCookies] = useCookies();

  function deleteaddress(e, id) {
    deleteAddress(e, cookies, id, setdelete);
  }

  const classes = useStyles();

  return (
    <div className="home__row">
      <div>
        {allAddress[0] && (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              ></Typography>
              <Typography variant="h5" component="h2">
                <strong>{allAddress[0] && allAddress[0].name}</strong><br />
                {allAddress[0] && allAddress[0].address_line + ", "}
                <br />
                {allAddress[0] && allAddress[0].land_mark + ", "}
                <br />
                {allAddress[0] && allAddress[0].city}
                {allAddress[0] && " - " + allAddress[0].pincode}
                <p>
                  Phone No:
                  {allAddress[0] && " - " + allAddress[0].phone_number_1}
                </p>
              </Typography>
            </CardContent>
            <div>
              <CardActions>
                <Button
                  onClick
                  size="small"
                  className={classes.button}
                  onClick={(e) => {
                    history.push("/pay/" + allAddress[0].id);
                  }}
                >
                  Use This Address
                </Button>
                <Button
                  onClick
                  size="small"
                  className={classes.button}
                  onClick={(e) => {
                    deleteaddress(e, allAddress[0].id);
                  }}
                >
                  Delete This Address
                </Button>
              </CardActions>
            </div>
          </Card>
        )}
      </div>

      <div>
        {allAddress[1] && (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              ></Typography>
              <Typography variant="h5" component="h2">
                <strong>{allAddress[1] && allAddress[1].name}</strong><br />
                {allAddress[1] && allAddress[1].address_line + ", "}
                <br />
                {allAddress[1] && allAddress[1].land_mark + ", "}
                <br />
                {allAddress[1] && allAddress[1].city}
                {allAddress[1] && " - " + allAddress[1].pincode}
                <p>
                  Phone No:{" "}
                  {allAddress[1] && " - " + allAddress[1].phone_number_1}
                </p>
              </Typography>
            </CardContent>
            <div>
              <CardActions>
                <Button
                  onClick
                  size="small"
                  className={classes.button}
                  onClick={() => {
                    history.push("/pay/" + allAddress[1].id);
                  }}
                >
                  Use This Address
                </Button>
                <Button
                  onClick
                  size="small"
                  className={classes.button}
                  onClick={(e) => {
                    deleteaddress(e, allAddress[1].id);
                  }}
                >
                  Delete This Address
                </Button>
              </CardActions>
            </div>
          </Card>
        )}
      </div>
      <div>
        {allAddress[2] && (
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              ></Typography>
              <Typography variant="h5" component="h2">
                <strong>{allAddress[2] && allAddress[2].name}</strong><br />
                {allAddress[2] && allAddress[2].address_line + ", "}
                <br />
                {allAddress[2] && allAddress[2].land_mark + ", "}
                <br />
                {allAddress[2] && allAddress[2].city}
                {allAddress[2] && " - " + allAddress[2].pincode}
                <p>
                  Phone No:
                  {allAddress[2] && " - " + allAddress[2].phone_number_1}
                </p>
              </Typography>
            </CardContent>
            <div>
              <CardActions>
                <Button
                  onClick
                  size="small"
                  className={classes.button}
                  onClick={() => {
                    history.push("/pay/" + allAddress[2].id);
                  }}
                >
                  Use This Address
                </Button>
                <Button
                  onClick
                  size="small"
                  className={classes.button}
                  onClick={(e) => {
                    deleteaddress(e, allAddress[2].id);
                  }}
                >
                  Delete This Address
                </Button>
              </CardActions>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default AddressCard;
