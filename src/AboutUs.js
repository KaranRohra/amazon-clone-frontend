import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link, useHistory } from "react-router-dom";
import "App.css";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    top: "100px",
    marginLeft: "50px",
    marginRight: "50px",
    marginTop: "100px",
    marginBottom: "100px",
    background:"#232F3E",
    color:"white",
  },
  media: {
    height: 500,
  },
  button:{
    color:"white",
  }
});

export default function AboutUs() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className=" body_about home__row ">
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../images/anisha.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Anisha Dhameja
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Frontend Developer
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Responsibilities: Presenting dynamic data using API through
                ReactJs. Building frontend using HTML, CSS, ReactJs
              </Typography>
              <Typography
                variant="body2"
                color="white"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/KaranRohra/amazon-clone-frontend",
                    "_blank"
                  );
                }}
                className={classes.button}
              />
            </Button>
            <Button size="small" color="primary">
              <LinkedInIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/KaranRohra/amazon-clone-backend",
                    "_blank"
                  );
                }}
                className={classes.button}
              />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../images/karan.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Karan Rohra
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Backend Developer
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Responsibilities: Maintained whole backend, created API for
                frontend using Django. APIS are tested using Postman and
                Unittest.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/KaranRohra/amazon-clone-backend",
                    "_blank"
                  );
                }}
                className={classes.button}
              />
            </Button>
            <Button size="small" color="primary">
              <LinkedInIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/karan-rohra-a457801a7/",
                    "_blank"
                  );
                }}
                className={classes.button}
              />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../../images/khushboo.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Khushboo Bajaj
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Frontend Developer
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Responsibilities: Presenting dynamic data using API through
                ReactJs. Building frontend using HTML, CSS, ReactJs
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <GitHubIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/KaranRohra/amazon-clone-frontend",
                    "_blank"
                  );
                }}
                className={classes.button}
              />
            </Button>
            <Button size="small" color="primary">
              <LinkedInIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/khushboo-bajaj-76760a1b2/",
                    "_blank"
                  );
                }}
                className={classes.button}
              />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
