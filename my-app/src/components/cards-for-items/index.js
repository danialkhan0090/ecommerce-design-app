import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
import logo from "../../assets/logo/aus.png";

import { Grid2, Stack } from "@mui/material";

export default function MediaCard() {
  const data = [
    {
      image: shirt,
      title: "10.30",
      description: "T-shirt with multiple colors",
      price: "$10.30",
    },
    {
      image: shirt2,
      title: "10.30",
      description: "Jeans shorts for men ",
      price: "$10.30",
    },
    {
      image: shirt3,
      title: "12.50",
      description: "Brown winter coat medium",
      price: "$12.50",
    },
    {
      image: bag,
      title: "34.00",
      description: "Leather wallet black colored",
      price: "$34.00",
    },
    {
      image: bag2,
      title: "99.00",
      description: "Girls bag for shopping",
      price: "$99.00",
    },
    {
      image: trouser,
      title: "9.99",
      description: "Headset for gaming with mic",
      price: "$9.99",
    },
    {
      image: headset,
      title: "8.99",
      description: "Ladies bag for college ",
      price: "$8.99",
    },
    {
      image: cup,
      title: "10.39",
      description: "Mud mug, decoration ",
      price: "$10.39",
    },
    {
      image: cattle,
      title: "10.30",
      description: "Electric kettle for tea making",
      price: "$10.30",
    },
    {
      image: shirt3,
      title: "80.95",
      description: "T-shirt with multiple colors",
      price: "$80.95",
    },
  ];

  return (
    <>
      <Grid2 container sx={{ margin: "auto" }}>
        <Grid2
          item
          xs={12}
          sx={{
            textAlign: "left",
            padding: "20px 0px 10px 0px",
            marginLeft: "60px",
          }}
        >
          <Typography variant="h5" component="div" fontWeight={"bold"}>
            Recommended Items
          </Typography>
        </Grid2>
        <Grid2 container columnSpacing={2} justifyContent={"center"}>
          {data.map((item, index) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              key={index}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"5px 10px 5px 10px"}
            >
              <Card
                sx={{
                  width: 220,
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    objectFit: "cover",
                  }}
                  image={item.image}
                  title={item.title}
                />
                <CardActions>
                  <Stack>
                    <Typography variant="h6" textAlign={"left"}>
                      {item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"left"}
                      color="#8E8E8E"
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </>
  );
}
