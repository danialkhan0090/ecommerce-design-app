import { Button, Grid2, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import fav from "../../assets/images/fav.png";
import Divider from "@mui/material/Divider";
import tabCart from "../../assets/images/tabCart.png";
import iphone12Cart from "../../assets/images/iphone12Cart.png";
import lapCart from "../../assets/images/lapCart.png";
import watchCart from "../../assets/images/watchCart.png";
import cartButton from "../../assets/images/cartButton.png";
const ProductCard = [
  {
    image: "tabCart",
    originalPrice: "$99.50",
    Typography: "Tablet android, Dual-sim",
  },
  {
    image: "iphone12Cart",
    Typography: "Apple phone 12 pro",
    originalPrice: "$1500.00",
  },
  {
    image: "lapCart",
    Typography: "Laptop core i9 16gb 500gb",
    originalPrice: "$968.00",
  },

  {
    image: "watchCart",
    Typography: "Laptop core i9 16gb 500gb",
    originalPrice: "$119.00",
  },
];

function SavedForLater() {
  const [value, setValue] = useState(2);

  return (
    <>
      <Grid2
        pl={"40px"}
        pt={"20px"}
        mt={"20px"}
        width={"1240px"}
        sx={{ backgroundColor: "white" }}
        borderRadius={"5px"}
      >
        <Typography fontSize={14} fontWeight={"bold"}>
          Saved for later
        </Typography>
      </Grid2>
      <Grid2
        container
        xs={12}
        display={"flex"}
        width={"1240px"}
        sx={{ backgroundColor: "white", justifyContent: "center" }}
      >
        {ProductCard.map((item, index) => (
          <Grid2
            key={index}
            height={"382"}
            display={"flex"}
            width={"270px"}
            mr={"20px"}
            mt={"20px"}
          >
            <Grid2
              sx={{
                backgroundColor: "white",
                height: "370px",
                width: "270px",
                pb: "20px",
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
                  style={{ width: "275px", height: "250px" }}
                />
              </Grid2>

              <Grid2
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={"bold"}
                  sx={{ marginRight: "8px" }}
                >
                  {item.originalPrice}
                </Typography>
              </Grid2>
              <Grid2 mt={"3px"}>
                <Typography variant="body2" color="#8B96A5" gutterBottom>
                  {item.Typography}
                </Typography>
                <Button size="small">
                  <img
                    src={require("../../assets/images/cartButton.png")}
                    style={{ width: "100px" }}
                  />
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default SavedForLater;
