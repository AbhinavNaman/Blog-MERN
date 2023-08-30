import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import moment from "moment";

export default function About() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Card
          sx={{ display: "flex", borderRadius: "10px", boxShadow: 4 }}
          style={{
            position: "absolute",
            padding: "50px",
            margin: "50px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Abhinav Naman
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                condimentum ac lectus vitae imperdiet. Ut non ante odio.
                Vestibulum diam arcu, consectetur vitae risus at, rutrum dapibus
                lacus. Sed tellus augue, scelerisque vel vehicula at, bibendum
                condimentum neque. Nulla malesuada malesuada turpis, a imperdiet
                velit porttitor eu. Donec fringilla vel ex interdum dapibus.
                Suspendisse eget nisl lorem. Nunc sollicitudin accumsan
                scelerisque. Vivamus auctor lorem vitae eleifend maximus. Fusce
                vehicula tincidunt quam, in interdum urna dignissim in. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
                neque sem. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Ut felis nibh,
                vestibulum vitae nulla nec, tincidunt finibus nunc. Nam viverra
                euismod nisl et pulvinar. Phasellus ornare dui eu eros
                vestibulum, a facilisis ipsum vestibulum. Vestibulum et urna
                dapibus dolor rutrum posuere. In commodo sapien eget risus
                ultricies, sed ultrices odio iaculis. Pellentesque ac ex ut sem
                maximus dapibus. Vivamus vitae tellus ac nisl porta fermentum.
                Nullam laoreet nunc id purus dapibus, sed dapibus est ornare.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                hendrerit convallis ante, sit amet scelerisque ipsum. Vestibulum
                elementum venenatis justo in interdum. Duis egestas velit
                turpis, eget mollis diam facilisis in. Suspendisse laoreet lorem
                sapien, vel scelerisque nulla viverra sed. Quisque aliquet
                ultrices sapien at pulvinar. Praesent quis maximus dolor, sed
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 400, padding: 2, borderRadius: "25px" }}
            image="https://media.licdn.com/dms/image/C5603AQGuI3DqAfQ_Zw/profile-displayphoto-shrink_800_800/0/1662816744990?e=2147483647&v=beta&t=mQli2upTphzAAw0XYm_pQNUOe5_N8vR8Bz-CxaBuVyM"
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </div>
  );
}
