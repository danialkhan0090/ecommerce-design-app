import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import shirt from "../../assets/images/blueshirt.png";
import bag from "../../assets/images/bluebag.png";
import bluelamp from "../../assets/images/bluelamp.png";
import backimage from "../../assets/images/backimage.png";
import { useNavigate } from "react-router-dom";

function CartItems() {
  const navigate = useNavigate();
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
          height={"150px"}
          // marginLeft={"20px"}
          justifyContent={"space-between"}
          display={"flex"}
          padding={"20px "}
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
                    backgroundColor: "white",
                    border: "2px solid #EEF2FF",
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
                    backgroundColor: "white",
                    borderRadius: "5px",
                    border: "2px solid #EEF2FF",
                    width: "105px",
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
          >
            <Box ml={"50px"}>{item?.price}</Box>
            <Box mt={"10px"}>
              <select
                style={{
                  width: "100px",
                  height: "30px",
                  color: "#1C1C1C",
                  backgroundColor: "white",
                  border: "1px solid #DEE2E7",
                  borderRadius: "5px",

                  fontWeight: "normal",
                }}
              >
                <option style={{}}>Qty:1</option>
                <option>Qty:2</option>
                <option> Qty:3</option>
                <option> Qty:4</option>
                <option> Qty:5</option>
              </select>
            </Box>
          </Grid2>
          <Divider sx={{ marginBottom: "20px", mt: "30px", width: "840px" }} />
        </Grid2>
      ))}
      <Grid2
        width={"880px"}
        height={"auto"}
        padding={"20px"}
        display={"flex"}
        sx={{
          backgroundColor: "white",
          justifyContent: "space-between",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
        // direction={"column"}
      >
        <Grid2 sx={{}}>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("/ProductPage")}
            sx={{
              textTransform: "none",
              color: "ffffff",
              backgroundColor: "navyblue",
              borderRadius: "5px",
              width: "120px",
              ml: "8px",
              height: "30px",
              boxShadow: "none",
              mt: "10px",
            }}
          >
            Back to shop
          </Button>
        </Grid2>
        <Grid2>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              backgroundColor: "white",
              color: "#007AFF",
              border: "1px solid #DEE2E7",

              // width: "120px",
              ml: "8px",
              height: "30px",
              boxShadow: "none",
              mt: "10px",
            }}
          >
            Remove all
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}

export default CartItems;
