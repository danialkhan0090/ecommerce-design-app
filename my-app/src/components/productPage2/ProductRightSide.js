import { Button, Grid, Grid2, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import fav from "../../assets/images/fav.png";
import Divider from "@mui/material/Divider";
import iphone12 from "../../assets/images/iphone12.png";
import gopro from "../../assets/images/gopro.png";
import watch2 from "../../assets/images/watch2.png";
const ProductCard = [
  {
    image: "iphone11",
    name: "Canon Camera EOS 2000 Black 10x Zoom",
    discountedPrice: "$128.00",
    originalPrice: "$998.00",
    rating: "7.5",
  },
  {
    image: "iphone12",
    name: "Apple phone 12 pro max 256Gb Dual-sim",
    discountedPrice: "$1500.00",
    originalPrice: "$1500.00",
    rating: "7.8",
  },
  {
    image: "oppo",
    name: "Oppo mobile, Camera EOS 200-Black 256Gb Dual-sim",
    discountedPrice: "$158.00",
    originalPrice: "$968.00",
    rating: "5.9",
  },

  {
    image: "tab2",
    name: "Tablet android 20-Black 256Gb Dual-sim",
    discountedPrice: "$28.00",
    originalPrice: "$98.00",
    rating: "7.5",
  },
  {
    image: "gopro",
    name: "DSLR Camera EOS 2000 Black 20x Zoom",
    discountedPrice: "$200.00",
    originalPrice: "$350.00",
    rating: "7.5",
  },

  {
    image: "lap",
    name: "Laptop core i9 16gb 500gb",
    discountedPrice: "$113.00",
    originalPrice: "$119.00",
    rating: "7.5",
  },

  {
    image: "appleHead",
    name: "Apple headset ",
    discountedPrice: "$44.00",
    originalPrice: "$122.00",
    rating: "7.5",
  },
  {
    image: "watch2",
    name: "High quality zero life style smart watch",
    discountedPrice: "$113.00",
    originalPrice: "$119.00",
    rating: "7.5",
  },
  {
    image: "gopro",
    name: "Smart watch ",
    discountedPrice: "$100.00",
    originalPrice: "$150.00",
    rating: "7.5",
  },
];

function ProductRightside() {
  const [value, setValue] = useState(2);

  return (
    <Grid2 container spacing={2} width={"920px"}>
      {ProductCard.map((item, index) => (
        <Grid2 key={index} height={"405"} width={"295px"}>
          <Grid2
            sx={{
              backgroundColor: "#FFFFFF",
              height: "370px",
              padding: "20px",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Grid2
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={require(`../../assets/images/${item.image}.png`)}
                alt="product"
                style={{ width: "185px", height: "185px" }}
              />
            </Grid2>
            <Divider sx={{ marginBottom: "20px", mt: "30px" }} />

            <Grid2 sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body2"
                sx={{ textDecoration: "line-through", marginRight: "8px" }}
              >
                {item.originalPrice}
              </Typography>
              <Typography variant="body2" color="#8B96A5">
                {item.discountedPrice}
              </Typography>
              <Button
                variant="contained"
                color="white"
                sx={{
                  width: "10px",
                  height: "30px",
                  border: "1px solid #8B96A5",
                  ml: "70px",
                }}
              >
                <img src={fav} alt="fav" />
              </Button>
            </Grid2>
            <Stack direction={"row"} alignItems="center">
              <Rating
                name="simple-controlled"
                value={value}
                size="small"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ marginTop: "2px" }}
              />
              <Typography
                variant="body2"
                color="#8B96A5"
                sx={{ marginLeft: "8px" }}
              >
                {item.rating}
              </Typography>
            </Stack>
            <Typography variant="body2" gutterBottom>
              {item.name}
            </Typography>
          </Grid2>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ProductRightside;
