import { Button, Grid2, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import iphone11 from "../../assets/images/iphone11.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import fav from "../../assets/images/fav.png";
import oppo from "../../assets/images/oppo.png";
import tab from "../../assets/images/tab2.png";
import lap from "../../assets/images/lap.png";

import appleHead from "../../assets/images/appleHead.png";
const ProductCard = [
  {
    image: "iphone11",
    name: "Canon Camera EOS 2000 Black 10x Zoom",
    discountedPrice: "$128.00",
    originalPrice: "$998.00",
    orders: "154 orders",
  },
  {
    image: "oppo",
    name: "Oppo mobile,Camera EOS 200-Black ",
    discountedPrice: "$158.00",
    originalPrice: "$968.00",
    orders: "1555 orders",
  },
  {
    image: "tab2",
    name: "Tablet andriod 20-Black",
    discountedPrice: "$28.00",
    originalPrice: "$98.00",
    orders: "14 orders",
  },
  {
    image: "lap",
    name: "Laptop core i9 16gb 500gb",
    discountedPrice: "$113.00",
    originalPrice: "$119.00",
    orders: "78 orders",
  },

  {
    image: "watch",
    name: "Smart watch ",
    discountedPrice: "$100.00",
    originalPrice: "$150.00",
    orders: "322 orders",
  },

  {
    image: "appleHead",
    name: "Apple headset ",
    discountedPrice: "$44.00",
    originalPrice: "$122.00",
    orders: "12 orders",
  },
];
function ProductRight() {
  const [value, setValue] = useState(2);

  return (
    <>
      {ProductCard.map((item) => (
        <Grid2
          display={"flex"}
          alignSelf={"right"}
          container
          sx={{
            backgroundColor: "#FFFFFF",
            width: "920px",
            height: "auto",
            padding: "20px 0px 20px 0px",
            margin: "10px 0px 20px 0px",
            borderRadius: "6px",
          }}
        >
          <Grid2
            display={"flex"}
            sx={{
              margin: "0px 0px 5px 0px",
              width: "185px",
              height: "185px",
              alignSelf: "right",
            }}
          >
            <img
              src={require(`../../assets/images/${item.image}.png`)}
              alt="mobilePhone"
              style={{ width: "100%" }}
            />
          </Grid2>
          <Grid2
            sx={{
              width: "600px",
              height: "185px",
            }}
            alignSelf={"flex-start"}
          >
            <Typography variant="body1">{item.name}</Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}
            >
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  marginRight: "8px",
                }}
              >
                {item.originalPrice}
              </Typography>

              <Typography variant="h6" color="#8B96A5">
                {item.discountedPrice}
              </Typography>
            </Box>

            <Stack direction={"row"}>
              <Grid2 display={"flex"}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="small"
                  sx={{ marginTop: "2px" }}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Grid2>
              <Grid2 display={"flex"} sx={{ marginLeft: "3px" }}>
                <Typography variant="body2" color="#8B96A5">
                  {item.orders}
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#00B517",
                      fontSize: "16px",
                    }}
                  >
                    Free shipping
                  </span>
                </Typography>
              </Grid2>
            </Stack>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt
            </p>
            <Button
              variant="text"
              sx={{
                marginTop: "2px",
                fontSize: "12px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              View details
            </Button>
          </Grid2>
          <Grid2 alignSelf={"flex-start"}>
            <Button
              variant="contained"
              color="white"
              sx={{
                width: "10px",
                height: "30px",
                border: "1px solid #8B96A5",
              }}
            >
              <img src={fav} alt="fav" style={{}} />
            </Button>
          </Grid2>
        </Grid2>
      ))}
    </>
  );
}

export default ProductRight;
