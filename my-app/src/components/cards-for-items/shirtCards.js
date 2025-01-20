import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import shirt from "../../assets/images/shirt.jpg";
import shirt2 from "../../assets/images/shirt2.jpg";
import shirt3 from "../../assets/images/shirt3.jpg";
import bag from "../../assets/images/bag.jpg";
import bag2 from "../../assets/images/bag2.jpg";
import trouser from "../../assets/images/trouser.jpg";
import headset from "../../assets/images/headset.jpg";
import cup from "../../assets/images/cup.jpg";
import cattle from "../../assets/images/cattle.jpg";
import catle from "../../assets/images/cattle.jpg";

import { Grid2 } from "@mui/material";

export default function MediaCard() {
  const data = [
    {
      image: shirt,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: shirt2,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: shirt3,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: bag,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: bag2,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: trouser,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: headset,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: bag2,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: shirt,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
    {
      image: shirt,
      title: "10.30",
      Typography: "T-shirt with multiple colors for men",
    },
  ];
  return (
    <>
      <Grid2 container spacing={2}>
        {data.map((item, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card sx={{ width: 320 }}>
              <CardMedia
                sx={{ height: 120 }}
                image="image"
                title={item?.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
