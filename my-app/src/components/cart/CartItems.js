import { Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import shirt from "../../assets/images/blueshirt.png";
import bag from "../../assets/images/bluebag.png";
import bluelamp from "../../assets/images/bluelamp.png";

function CartItems() {
  const cardForItems = [
    {
      image: shirt,
      title: "T-shirt with multiple colors",
      Typography: "Size: Medium , color: blue, Material fabrica",
      price: "$29.99",
      seller: "Artel market",
    },
    {
      image: bag,
      title: "Jeans Bag for Collge/ university",
      Typography: "Size: 36`*16` , color: blue, Material: jeans",
      price: "$16.99",
      seller: "Artel market",
    },
    {
      image: bluelamp,
      title: "Lamp for showcasing and night light",
      Typography: "Size: small, color: Every color",
      price: "$19.00",
      seller: "Artel market",
    },
  ];
  return (
    <>
      {cardForItems.map((item) => (
        <Grid2
          container
          sx={{ backgroundColor: "white" }}
          width={"880px"}
          height={"136px"}
          marginLeft={"20px"}
          justifyContent={"space-between"}
          display={"flex"}
          padding={"20px"}
          borderRadius={"5px"}
        >
          <Grid2
            direction={"column"}
            display={"flex"}
            margin={"0px 0px 0px 0px"}
            sx={{}}
          >
            {/* grid for image */}
            <Grid2 width={"90px"} height={"90px"} padding={"5px"}>
              {item?.image && (
                <img
                  src={item?.image}
                  alt="product"
                  style={{ width: "80px", height: "80px" }}
                />
              )}
            </Grid2>
            {/* Typography */}
            <Grid2
              // sx={{ backgroundColor: "blue" }}
              width={"462px"}
              height={"100px"}
              mt={"3px"}
              ml={"3px"}
            >
              {" "}
              <Typography mt={"4px"} fontSize={"16px"} color="#1C1C1C">
                {item?.title}
              </Typography>
              <Typography mt={"5px"} fontSize={"12px"} color="#8B96A5">
                {item?.Typography}
              </Typography>
              <Typography mt={"5px"} fontSize={"12px"} color="#8B96A5">
                {" "}
                {item?.seller}
              </Typography>
              <Stack direction={"row"}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: "red",
                    backgroundColor: "#DEE2E7",
                    borderRadius: "5px",
                    width: "70px",
                    height: "30px",
                    boxShadow: "none",
                    mt: "10px",
                  }}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: "#007AFF",
                    backgroundColor: "#DEE2E7",
                    borderRadius: "5px",
                    width: "103px",
                    ml: "8px",
                    height: "30px",
                    boxShadow: "none",
                    mt: "10px",
                  }}
                >
                  Save for later
                </Button>
              </Stack>
            </Grid2>
          </Grid2>
          {/* grid for quantity */}
          <Grid2
            width={"100px"}
            height={"100px"}
            // sx={{ backgroundColor: "black" }}
          ></Grid2>
          <Divider sx={{ marginBottom: "20px", mt: "20px", width: "830px" }} />
        </Grid2>
      ))}
    </>
  );
}

export default CartItems;
